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
        const units = await dao.getUnit(unitTableName)
            //     // .catch(err => errHandler(req, res, err, 'routes>recipe', '/recipe/:id', 'materialHandler', 'dao.getUnit'))
            .catch(err => { throw (err) })
        const colNames = await dao.getColumnNames(unitTableName)
            //     // .catch(err => errHandler(req, res, err, 'routes>recipe', '/recipe/:id', 'materialHandler', 'dao.getColumnNames'))
            .catch(err => { throw (err) })

        let result = {}
        if (materialInfo) {
            result.id = materialInfo.id
            result.name = materialInfo.name
            colNames.map(cname => {
                const colName = cname.COLUMN_NAME
                if (materialInfo[colName]) {
                    result[colName] = {
                        amount: materialInfo[colName],
                        units: units[colName]
                    }
                }
            })
        }
        return Promise.resolve(result)
    }

    const ingredientsIdFinder = async result => {
        let ingIds = await dao.getIngredientById(result.id)
            .catch(err => errHandler(req, res, err, 'routes>recipe', '/recipe/:id', 'ingredientsHandler'))

        // Promise.all(c.ingredientTableNames.map(async (name, i) => await materialHandler(ingIds[c.ingredientTableIds[i]], name, c.ingredientUnitTableNames[i])))
        // .then(ingInfos=>{

        // })
        // const materials = await c.ingredientTableNames.map(async (name, i) => await materialHandler(ingIds[c.ingredientTableIds[i]], name, c.ingredientUnitTableNames[i]))
        // .catch(err => errHandler(req, res, err, 'routes>recipe', '/recipe/:id', 'ingredientsHandler', 'materialHandler'))
        // return Promise.all(c.ingredientTableNames.map(async (name, i) =>
        //     await materialHandler(ingIds[c.ingredientTableIds[i]], name, c.ingredientUnitTableNames[i])
        // ))
        return Promise.all(c.ingredientTableNames.map(async (name, i) => {
            // console.log(name)
            result[name] = await materialHandler(ingIds[c.ingredientTableIds[i]], name, c.ingredientUnitTableNames[i])
            // console.log(result)
        })).then(() => {
            return Promise.resolve(result)
        })
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