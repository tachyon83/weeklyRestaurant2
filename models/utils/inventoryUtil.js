const dao = require('../Dao')
const c = require('../../utils/constants')
const materialUtil = require('./materialUtil')

const getEachInventoryArr = async (i, id) => {
    let subInvs = await dao.getFromTableById(c.inventoryNames[i], id)
    delete subInvs.id
    let units = await dao.getFromTable(c.ingredientUnitTableNames[i])

    let result = []
    Object.keys(subInvs).map(key => {
        result.push({
            name: key,
            amount: subInvs[key],
            unit: units[key],
        })
    })
    return result
}

const getInventories = async memberId => {
    const invIds = await dao.getInventoryByMemberId(memberId)
    // invIds={"meat":12,"fish":25,...}
    let res = {}
    for (let i = 0; i < c.ingredientTableNames.length; ++i) {
        let subIngName = c.ingredientTableNames[i]
        res[subIngName] = await getEachInventoryArr(i, invIds[subIngName])
    }
    return res
}

const consume = async (year, week, day, meal) => {
    // parameters ex:(2021, 7, 6, 1)
    // there should be many members but can handle only one in this time...
    let servings = await dao.getServings()
    servings = servings.servings
    const mealInfo = await dao.getMeal([year, week, day, meal])
    if (!mealInfo) return

    const ingId = await dao.getIngIdByRecipeId(mealInfo.recipeId)
    const ingIds = await dao.getIngredientsById(ingId.ingredientId)

    for (let i = 0; i < c.ingredientTableIds.length; ++i) {
        if (!ingIds[c.ingredientTableIds[i]]) continue
        let needs = await dao.getFromTableById(c.ingredientTableNames[i], ingIds[c.ingredientTableIds[i]])
        delete needs.id
        delete needs.name
        const inventory = await dao.getFromTableById(c.inventoryNames[i], 1)

        let sql = 'update '
        sql += c.inventoryNames[i] + ' '
        sql += 'set '

        const sz = Object.keys(needs).length
        Object.keys(needs).map((material, i) => {
            if (needs[material]) {
                const after = inventory[material] - needs[material] * servings
                if (after > 0) sql += material + '=' + after
                else sql += material + '=' + 0
                if (i < sz - 1) sql += ','
            }
        })
        if (sql[sql.length - 1] === ',') sql = sql.substring(0, sql.length - 1)
        sql += ' where id=1;'
        await dao.sqlHandler(sql, null).catch(err => err)
    }
    return
}

const insertOrUpdate = async body => {
    const currSubMaterialSet = await materialUtil.currentMaterialSetMaker(body.ingredientType)
    await materialUtil.newMaterialCheckThenAdder(body, currSubMaterialSet, body.ingredientType)
    return await dao.updateInventory(c.inventoryNames[body.ingredientType], body.name, body.amount, 1)
}

module.exports = {
    getEachInventoryArr,
    getInventories,
    consume,
    insertOrUpdate,

}