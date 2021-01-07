const dao = require('../Dao')
const c = require('../../utils/constants')

module.exports = {
    currentMaterialSetMaker: async i => {
        const currentMaterialArr = await dao.getColumnNames(c.ingredientUnitTableNames[i])
            .catch(err => { return Promise.reject(err) })

        let currentMaterialSet = new Set()
        for (let elem of currentMaterialArr) currentMaterialSet.add(elem.COLUMN_NAME)
        console.log(currentMaterialSet)
        console.log()
        return Promise.resolve(currentMaterialSet)
    },

    newMaterialCheckThenAdder: async (obj, set, i) => {
        if (!set.has(obj.name)) {
            console.log('[Router]: New Material Detected.')
            console.log()
            await dao.addNewMaterial(c.ingredientTableNames[i], obj.name)
                .catch(err => { return Promise.reject(err) })
            await dao.addNewMaterialUnit(c.ingredientUnitTableNames[i], obj.name)
                .catch(err => { return Promise.reject(err) })
            await dao.insertUnit(c.ingredientUnitTableNames[i], obj.name, obj.unit)
                .catch(err => { return Promise.reject(err) })
            console.log('[Router]: New Material Added into DB.')
            console.log()
        }
    },

}