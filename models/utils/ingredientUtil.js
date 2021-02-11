const dao = require('../Dao')
const c = require('../../utils/constants')
const materialUtil = require('./materialUtil')


// takes subIngredientTableId, its tableName, and corresponding unitTableName
// returns the whole subIngredient object (id, name, contents)
const subIngredientGetter = async (id, tableName, unitTableName) => {
    const materialInfo = await dao.getFromTableById(tableName, id)
    const units = await dao.getFromTable(unitTableName)
    const colNames = await dao.getColumnNames(unitTableName)

    let result = {}
    if (materialInfo) {
        result.id = materialInfo.id
        result.name = materialInfo.name
        result.contents = (colNames.filter(cname => {
            const colName = process.env.NODE_ENV !== 'production' ? cname.COLUMN_NAME : cname.column_name
            if (materialInfo[colName] > 0) return true
        }).map(cname => {
            const colName = process.env.NODE_ENV !== 'production' ? cname.COLUMN_NAME : cname.column_name
            return {
                name: colName,
                amount: materialInfo[colName],
                unit: units[colName]
            }
        }))
    }
    console.log('[Util]: SubIngredientGetter complete.')
    console.log()
    if (!Object.keys(result).length) {
        result.id = null
        result.name = null
        result.contents = []
    }
    return result
}


// takes recipe object
// returns the recipe object with contents attached
const ingredientsFinder = async result => {
    // result={id:###,name:###,style:###,...}
    let ingIds = await dao.getIngredientsById(result.ingredientId)
    // ingIds={meatId:####,fishId:####,...}
    result.contents = {}

    // meat, fish, misc, sauce are independent
    // the following parallel processing in map works fine.
    // return Promise.all(c.ingredientTableNames.map(
    //     async (name, i) =>
    //         result.contents[name] = await subIngredientGetter(ingIds[c.ingredientTableIds[i]], name, c.ingredientUnitTableNames[i])
    // ))
    //     .then(() => {
    //         console.log('[Util]: ingredientsFinder complete.')
    //         console.log()
    //         return Promise.resolve(result)
    //     })
    await Promise.all(c.ingredientTableNames.map(async (name, i) => {
        result.contents[name] = await subIngredientGetter(ingIds[c.ingredientTableIds[i]], name, c.ingredientUnitTableNames[i])
    }))
    console.log(result)
    console.log(result.contents.misc.contents)
    console.log('[Util]: ingredientsFinder complete.')
    console.log()
    return Promise.resolve(result)
}


// takes index and eachIngredientTableInfo
// returns an Id for that ingredient table
const eachIngredientTableIdFinder = async (i, info) => {
    if (!info) return null

    let currentMaterialSet = await materialUtil.currentMaterialSetMaker(i)
    let names = []
    let amounts = []
    // console.log('info.contents in eachIng', info.contents)

    // each material is assumed to be unique in the array.
    // the following parallel processing in map works fine.
    await Promise.all(info.contents.map(async obj => {
        const added = await materialUtil.newMaterialCheckThenAdder(obj, currentMaterialSet, i)
        // cond.push(obj.name, obj.amount)
        if (!added) currentMaterialSet.delete(obj.name)
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
    // console.log('namesSz', c.ingredientTableNames[i], namesSz)
    names.map((e, i) => {
        sql_findIdFromMaterials += e + '= ' + amounts[i]
        sql_findIdFromMaterials += ' and '
    })

    let idx = 0
    currentMaterialSet.forEach(e => {
        sql_findIdFromMaterials += e + ' is null'
        idx++
        if (idx < currentMaterialSet.size) sql_findIdFromMaterials += ' and '
        else sql_findIdFromMaterials += ';'
    })
    // console.log('sql', sql_findIdFromMaterials)

    let findIdResult = await dao.sqlHandler(sql_findIdFromMaterials, null, 1)
    // console.log(findIdResult)

    if (findIdResult) {
        console.log('[Util]: An Existing SubIngredient Table Detected.')
        console.log()
        return findIdResult.id
    }

    let sql_getLastInsertIdFromMaterials =
        `insert into ${c.ingredientTableNames[i]}
            (`
    names.map((e, i) => {
        // console.log('i in names.map', e, i)
        // console.log(namesSz)
        sql_getLastInsertIdFromMaterials += e
        if (i === namesSz - 1) { }
        else sql_getLastInsertIdFromMaterials += ','
    })
    sql_getLastInsertIdFromMaterials += ') values('
    amounts.map((e, i) => {
        // console.log('i in names.map', e, i)
        sql_getLastInsertIdFromMaterials += e
        if (i === namesSz - 1) { }
        else sql_getLastInsertIdFromMaterials += ','
    })
    sql_getLastInsertIdFromMaterials += ');'
    sql_getLastInsertIdFromMaterials += 'select last_insert_id() as id;'

    let insertResult = await dao.sqlHandler(sql_getLastInsertIdFromMaterials, null)
    console.log('[Util]: A New SubIngredient Table Created.')
    console.log()
    // console.log('insertResult', insertResult)
    // console.log()
    return insertResult[1][0].id
}


// takes recipeContents
// returns an array containing all four ingredient Ids
const ingredientTablesIdFinder = contents => {
    // meat, fish, misc, sauce are independent
    // the following parallel processing in map works fine.
    return Promise.all(c.ingredientTableNames.map(async (tableName, i) =>
        await eachIngredientTableIdFinder(i, contents[tableName])
    ))
}

const ingredientTableIdFinder = async ingIdArr => {
    console.log('subIngredientsIdArr', ingIdArr)
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
        console.log('[Util]: An Existing Ingredient Table Detected.')
        console.log()
        return findIdResult.id
    }
    findIdResult = await dao.getIngredientIdUponInsertion(ingIdArr)
    console.log('[Util]: A New Ingredient Table Created.')
    console.log()
    return findIdResult[1][0].id
}


// takes unitTableName
// returns each subIngredient current list
const eachSubIngredientListFinder = async unitTableName => {
    const units = await dao.getFromTable(unitTableName)
    return Object.keys(units).map(material => { return { [material]: units[material] } })
}

module.exports = {
    ingredientTablesIdFinder,
    ingredientTableIdFinder,
    subIngredientGetter,
    ingredientsFinder,
    eachSubIngredientListFinder,

}