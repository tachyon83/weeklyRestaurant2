const dao = require('../Dao')
const c = require('../../utils/constants')

module.exports = {
    currentMaterialSetMaker: async i => {
        console.log('going to call dao.getColumnNames')
        const currentMaterialArr = await dao.getColumnNames(c.ingredientUnitTableNames[i])
            .catch(err => { return Promise.reject(err) })
        let currentMaterialSet = new Set()
        for (let elem of currentMaterialArr) currentMaterialSet.add(elem.COLUMN_NAME)
        console.log(currentMaterialSet)
        return Promise.resolve(currentMaterialSet)
    },

    newMaterialCheckThenAdder: async (obj, set, i) => {
        console.log('obj in newMaterialCheckThenAdder', obj)
        console.log('set', set)
        if (!set.has(obj.name)) {
            console.log('[Router]: New Material Detected.')
            await dao.addNewMaterial(c.ingredientUnitTableNames[i], obj.name)
                .catch(err => { return Promise.reject(err) })
            await dao.insertUnit(c.ingredientUnitTableNames[i], obj.name, obj.unit)
                .catch(err => { return Promise.reject(err) })
            console.log('[Router]: New Material Added into DB.')
        }
    },

}