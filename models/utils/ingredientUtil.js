const dao = require('../Dao')
const c = require('../../utils/constants')
const materialUtil = require('./materialUtil')

// takes subIngredientTableId, its tableName, and corresponding unitTableName
// returns the whole subIngredient object (id, name, contents)
const subIngredientGetter = async (id, tableName, unitTableName) => {
    const materialInfo = await dao.getSubIngredientById(tableName, id)
        .catch(err => res.json(errHandler(err)))
    const units = await dao.getUnit(unitTableName)
        .catch(err => res.json(errHandler(err)))
    const colNames = await dao.getColumnNames(unitTableName)
        .catch(err => res.json(errHandler(err)))

    let result = {}
    if (materialInfo) {
        result.id = materialInfo.id
        result.name = materialInfo.name
        result.contents = (colNames.filter(cname => {
            const colName = cname.COLUMN_NAME
            if (materialInfo[colName] > 0) return true
        }).map(cname => {
            const colName = cname.COLUMN_NAME
            return {
                name: colName,
                amount: materialInfo[colName],
                units: units[colName]
            }
        }))
    }
    console.log('[Util]: SubIngredientGetter complete.')
    console.log()
    return Promise.resolve(result)
}


// takes recipe object
// returns the recipe object with contents attached
const ingredientsFinder = async result => {
    // result={id:###,name:###,style:###,...}
    let ingIds = await dao.getIngredientsById(result.ingredientId)
        .catch(err => {
            err.reason = 'noIng'
            res.json(errHandler(err))
        })
    // ingIds={meatId:####,fishId:####,...}
    result.contents = {}

    return Promise.all(c.ingredientTableNames.map(
        async (name, i) =>
            result.contents[name] = await subIngredientGetter(ingIds[c.ingredientTableIds[i]], name, c.ingredientUnitTableNames[i])
    ))
        .then(() => {
            console.log('[Util]: ingredientsFinder complete.')
            console.log()
            return Promise.resolve(result)
        })
}


// takes tableName and eachIngredientTableInfo
// returns an Id for that ingredient table
const eachIngredientTableIdFinder = async (i, info) => {
    if (!info) return Promise.resolve(null)

    const currentMaterialSet = await materialUtil.currentMaterialSetMaker(i)
    // let cond = []
    let names = []
    let amounts = []
    console.log('info.contents in eachIng', info.contents)

    await Promise.all(info.contents.map(async obj => {
        await materialUtil.newMaterialCheckThenAdder(obj, currentMaterialSet, i)
        // cond.push(obj.name, obj.amount)
        names.push(obj.name)
        amounts.push(obj.amount)
    }))

    // cond = cond.join(' and ')
    // names = names.join(',')
    // amounts = amounts.join(',')

    let sql_findIdFromMaterials =
        `select id from ${c.ingredientTableNames[i]} 
            where `

    let namesSz = names.length
    console.log('namesSz', c.ingredientTableNames[i], namesSz)
    names.map((e, i) => {
        sql_findIdFromMaterials += e + '= ' + amounts[i]
        if (i === namesSz - 1) sql_findIdFromMaterials += ';'
        else sql_findIdFromMaterials += ' and '
    })
    let findIdResult = await dao.sqlHandler(sql_findIdFromMaterials, null, 1)

    if (findIdResult) {
        console.log('[Util]: Existing SubIngredient Table Detected.')
        console.log()
        return findIdResult.id
    }

    let sql_getLastInsertIdFromMaterials =
        `insert into ${c.ingredientTableNames[i]}
            (`
    names.map((e, i) => {
        console.log('i in names.map', e, i)
        console.log(namesSz)
        sql_getLastInsertIdFromMaterials += e
        if (i === namesSz - 1) { }
        else sql_getLastInsertIdFromMaterials += ','
    })
    sql_getLastInsertIdFromMaterials += ') values('
    amounts.map((e, i) => {
        console.log('i in names.map', e, i)
        sql_getLastInsertIdFromMaterials += e
        if (i === namesSz - 1) { }
        else sql_getLastInsertIdFromMaterials += ','
    })
    sql_getLastInsertIdFromMaterials += ');'
    sql_getLastInsertIdFromMaterials += 'select last_insert_id() as id;'

    let insertResult = await dao.sqlHandler(sql_getLastInsertIdFromMaterials, null)
    console.log('[Util]: New SubIngredient Table Created.')
    console.log()
    // console.log('insertResult', insertResult)
    // console.log()
    return insertResult[1][0].id
}


// takes recipeContents
// returns an array containing all four ingredient Ids
const ingredientTablesIdFinder = contents => {
    return Promise.all(c.ingredientTableNames.map(async (tableName, i) =>
        await eachIngredientTableIdFinder(i, contents[tableName])
    ))
}

const ingredientTableIdFinder = async ingIdArr => {
    console.log(ingIdArr)
    console.log()
    let findSql =
        `select id from ingredient 
        where `

    ingIdArr.map((ingId, i) => {
        if (ingId) findSql += `${c.ingredientTableIds[i]}=${ingId}`
        else findSql += `${c.ingredientTableIds[i]} is null`
        if (i === c.ingredientTableIds.length - 1) findSql += ';'
        else findSql += ' and '
    })

    let findIdResult = await dao.sqlHandler(findSql, null, 1)
    // console.log(findIdResult)
    if (findIdResult) {
        console.log('[Util]: Existing Ingredient Table Detected.')
        console.log()
        return findIdResult.id
    }
    findIdResult = await dao.getIngredientIdUponInsertion(ingIdArr)
    console.log('[Util]: New Ingredient Table Created.')
    console.log()
    return findIdResult[1][0].id
}

module.exports = {
    ingredientTablesIdFinder,
    ingredientTableIdFinder,
    subIngredientGetter,
    ingredientsFinder,

}