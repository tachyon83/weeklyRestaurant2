const dao = require('../Dao')
const c = require('../../utils/constants')

module.exports = {
    // currentMaterialArrMaker: async i => {
    //     const currentMaterialArr = await dao.getColumnNames(c.ingredientUnitTableNames[i])
    //     return currentMaterialArr.map(material => material.COLUMN_NAME)
    // },

    currentMaterialSetMaker: async i => {
        const currentMaterialArr = await dao.getColumnNames(c.ingredientUnitTableNames[i])
        // .catch(err => Promise.reject(err))

        let currentMaterialSet = new Set()
        for (let elem of currentMaterialArr) currentMaterialSet.add(elem.COLUMN_NAME)
        // console.log(currentMaterialSet)
        // console.log()
        return currentMaterialSet
    },

    // returns if added or not
    newMaterialCheckThenAdder: async (obj, set, i) => {
        console.log('set', set)
        console.log('each obj', obj)
        if (!set.has(obj.name)) {
            console.log('[Util]: New Material ' + obj.name + ' Detected.')
            console.log()

            await dao.insertMaterialColumn(c.ingredientTableNames[i], obj.name)
            await dao.insertMaterialUnitColumn(c.ingredientUnitTableNames[i], obj.name)
            await dao.insertMaterialUnit(c.ingredientUnitTableNames[i], obj.name, obj.unit)
            await dao.inserInventoryColumn(c.inventoryNames[i], obj.name)

            console.log('[Util]: New Material Added into DB.')
            console.log()
            return true
        }
        else console.log('[Util]: This Material ' + obj.name + ' Exists.')
        return false
    },

}