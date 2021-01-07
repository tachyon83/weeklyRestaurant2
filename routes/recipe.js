// acts both as a router and as a controller

const resCode = require('../configs/responseCode')
const resHandler = require('../utils/responseHandler')
const errHandler = require('../utils/errorHandler')
const express = require('express');
const router = express.Router();
const dao = require('../models/Dao')
const c = require('../utils/constants')
const materialUtil = require('../models/utils/materialUtil');

router.post('/', async (req, res) => {

    // takes recipeName and userId
    // returns true/err
    const recipeNameChecker = async (name, userId) => {
        const result = await dao.getRecipeByName(name, userId)
        if (result) {
            let err = new Error()
            err.reason = 'duplicate'
            return Promise.reject(err)
        } else {
            console.log('[Router]: Duplicate Recipe Name Checked OK.')
            console.log()
            return Promise.resolve(true)
        }
    }


    // takes tableName and eachIngredientTableInfo
    // return an Id for that ingredient table
    const eachIngredientTableIdFinder = async (i, info) => {
        if (!info) return Promise.resolve(null)

        const currentMaterialSet = await materialUtil.currentMaterialSetMaker(i)
        // let cond = []
        let names = []
        let amounts = []

        await info.contents.map(async obj => {
            await materialUtil.newMaterialCheckThenAdder(obj, currentMaterialSet, i)
            // cond.push(obj.name, obj.amount)
            names.push(obj.name)
            amounts.push(obj.amount)
        })

        // cond = cond.join(' and ')
        // names = names.join(',')
        // amounts = amounts.join(',')

        let sql_findIdFromMaterials =
            `select id from ${c.ingredientTableNames[i]} 
            where `

        namesSz = names.length
        names.map((e, i) => {
            sql_findIdFromMaterials += e + '= ' + amounts[i]
            if (i === namesSz - 1) sql_findIdFromMaterials += ';'
            else sql_findIdFromMaterials += ' and '
        })
        let findIdResult = await dao.sqlHandler(sql_findIdFromMaterials, null, 1)

        if (findIdResult) {
            console.log('[Router]: Existing SubIngredient Table Detected.')
            console.log()
            return findIdResult.id
        }


        let sql_getLastInsertIdFromMaterials =
            `insert into ${c.ingredientTableNames[i]}
            (`
        names.map((e, i) => {
            sql_getLastInsertIdFromMaterials += e
            if (i === namesSz - 1) { }
            else sql_getLastInsertIdFromMaterials += ','
        })
        sql_getLastInsertIdFromMaterials += ') values('
        amounts.map((e, i) => {
            sql_getLastInsertIdFromMaterials += e
            if (i === namesSz - 1) { }
            else sql_getLastInsertIdFromMaterials += ','
        })
        sql_getLastInsertIdFromMaterials += ');'
        sql_getLastInsertIdFromMaterials += 'select last_insert_id() as id;'

        let insertResult = await dao.sqlHandler(sql_getLastInsertIdFromMaterials, null)
        console.log('[Router]: New SubIngredient Table Created.')
        console.log()
        console.log('insertResult', insertResult)
        console.log()
        return insertResult[1][0].id
    }


    // takes recipeContents
    // returns an array containing all four ingredient Ids
    const ingredientTablesIdFinder = async contents => {
        return Promise.all(c.ingredientTableNames.map(async (tableName, i) => {
            return await eachIngredientTableIdFinder(i, contents[tableName])
                .catch(err => Promise.reject(err))
        }))
            .catch(err => Promise.reject(err))
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

        let findIdResult = await dao.sqlHandler(findSql, ingIdArr, null, 1)
        if (findIdResult.length) {
            console.log('[Router]: Existing Ingredient Table Detected.')
            console.log()
            return findIdResult[0].id
        }
        findIdResult = await dao.getIngredientIdUponInsertion(ingIdArr)
        console.log('[Router]: New Ingredient Table Created.')
        console.log()
        return findIdResult[1][0].id
    }


    await recipeNameChecker(req.body.name, req.session.passport.user)
        .then(async () => {
            let ingIdArr = await ingredientTablesIdFinder(req.body.contents)
                .catch(err => Promise.reject(err))
            return Promise.resolve(ingIdArr)
        })
        .then(ingredientTableIdFinder)
        .then(async ingId => await dao.addNewRecipe(req.body.name, req.body.style, req.body.img, req.session.passport.user, ingId))
        .then(() => res.json(resHandler(true, resCode.success, null)))
        .catch(err => res.json(errHandler(err)))

})

router.get('/:id', (req, res) => {

    // 소유권 확인 완료

    const materialHandler = async (id, tableName, unitTableName) => {
        const materialInfo = await dao.getMaterialById(tableName, id)
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
        console.log('[Router]: materialHandler complete.')
        console.log()
        return Promise.resolve(result)
    }

    const ingredientsFinder = async result => {
        // result={id:###,name:###,style:###,...}
        let ingIds = await dao.getIngredientById(result.ingredientId)
            .catch(err => res.json(errHandler(err)))
        // ingIds={meatId:####,fishId:####,...}
        result.contents = {}

        return Promise.all(c.ingredientTableNames.map(
            async (name, i) =>
                result.contents[name] = await materialHandler(ingIds[c.ingredientTableIds[i]], name, c.ingredientUnitTableNames[i])
        ))
            .then(() => {
                console.log('[Router]: ingredientsFinder complete.')
                console.log()
                return Promise.resolve(result)
            })
    }

    dao.getMemberByUserId(req.session.passport.user)
        .then(member => {
            if (member) return dao.getRecipeByIds(parseInt(req.params.id), member.id)
            else res.json(resHandler(false, resCode.notAuth, null))
        })
        .then(result => {
            if (!result) res.json(resHandler(false, resCode.notAuth, null))
            else {
                console.log('[Router]: Recipe Ownership checked OK.')
                console.log()
                return Promise.resolve(result)
            }
        })
        .then(ingredientsFinder)
        .then(result => res.json(resHandler(true, resCode.success, result)))
        .catch(err => res.json(errHandler(err)))
})

module.exports = router