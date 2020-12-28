const resCode = require('../configs/responseCode')
const resHandler = require('../utils/responseHandler')
const errHandler = require('../utils/errorHandler')
const express = require('express');
const router = express.Router();
const dao = require('../models/Dao')
const c = require('../utils/constants')

router.get('/:id', (req, res) => {

    // 소유권 확인 완료

    const materialHandler = async (id, tableName, unitTableName) => {
        const materialInfo = await dao.getMaterialById(tableName, id)
            // .catch(err => errHandler(req, res, err, 'routes>recipe', '/recipe/:id', 'materialHandler', 'dao.getMaterialById'))
            .catch(err => { throw (err) })
        // const units = await dao.getUnit(unitTableName)
        //     // .catch(err => errHandler(req, res, err, 'routes>recipe', '/recipe/:id', 'materialHandler', 'dao.getUnit'))
        //     .catch(err => { throw (err) })
        // const colNames = await dao.getColumnNames(unitTableName)
        //     // .catch(err => errHandler(req, res, err, 'routes>recipe', '/recipe/:id', 'materialHandler', 'dao.getColumnNames'))
        //     .catch(err => { throw (err) })

        return Promise.all(c.ingredientTableNames.map(async name => {
            if (!materialInfo) return null
            console.log('materialInfo', materialInfo)
            const units = await dao.getUnit(unitTableName)
                // .catch(err => errHandler(req, res, err, 'routes>recipe', '/recipe/:id', 'materialHandler', 'dao.getUnit'))
                .catch(err => { throw (err) })
            const colNames = await dao.getColumnNames(unitTableName)
                // .catch(err => errHandler(req, res, err, 'routes>recipe', '/recipe/:id', 'materialHandler', 'dao.getColumnNames'))
                .catch(err => { throw (err) })

            let result = {
                id: materialInfo.id,
                name: materialInfo.name,
            }
            colNames.map(colName => {
                if (materialInfo[colName]) {
                    result[colName] = {
                        amount: materialInfo[colName],
                        units: units[colName],
                    }
                    console.log(result)
                }
            })
            return result
        }))
    }

    const ingredientsIdFinder = async result => {
        let ingIds = await dao.getIngredientById(result.id)
            .catch(err => errHandler(req, res, err, 'routes>recipe', '/recipe/:id', 'ingredientsHandler'))

        const materials = c.ingredientTableNames.map(async (name, i) => await materialHandler(ingIds[c.ingredientTableIds[i]], name, c.ingredientUnitTableNames[i]))
        // .catch(err => errHandler(req, res, err, 'routes>recipe', '/recipe/:id', 'ingredientsHandler', 'materialHandler'))
        // return Promise.all(c.ingredientTableNames.map(async (name, i) =>
        //     await materialHandler(ingIds[c.ingredientTableIds[i]], name, c.ingredientUnitTableNames[i])
        // ))
        c.ingredientTableNames.map((name, i) => {
            result[name] = materials[i]
        })
        return Promise.resolve(result)
    }

    // const resultHandler = result => {
    //     c.ingredientTableNames.map((name, i) => {
    //         result[name] = material[i]
    //     })
    //     return Promise.resolve(result)
    // }

    dao.getMemberByUsername(req.session.passport.user)
        .then(member => {
            if (member) return dao.getRecipeByIds(req.params.id, member.id)
            return resHandler(req, res, false, resCode.notAuthenticated, null)
        })
        .then(result => {
            if (!result) return resHandler(req, res, false, resCode.notAuthenticated, null)
            return Promise.resolve(result)
        })
        .then(ingredientsIdFinder)
        // .then(resultHandler)
        .then(result => {
            console.log('final', result)
            resHandler(req, res, true, resCode.success, result)
        })
        .catch(err => errHandler(req, res, err, 'routes>recipe', '/recipe/:id'))
})

module.exports = router