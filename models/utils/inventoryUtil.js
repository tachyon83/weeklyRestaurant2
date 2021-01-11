const dao = require('../Dao')
const c = require('../../utils/constants')

const getEachInventoryArr = async (i, id) => {
    let subInvs = await dao.getSubInventoryById(c.inventoryNames[i], id)
    delete subInvs.id
    let units = await dao.getUnit(c.ingredientUnitTableNames[i])

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
    for (let i = 0; i < 4; ++i) {
        let subIngName = c.ingredientTableNames[i]
        res[subIngName] = await getEachInventoryArr(i, invIds[subIngName])
    }
    return res
}

module.exports = {
    getEachInventoryArr,
    getInventories,

}