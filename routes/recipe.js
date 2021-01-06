// acts both as a router and as a controller

const resCode = require('../configs/responseCode')
const resHandler = require('../utils/responseHandler')
const errHandler = require('../utils/errorHandler')
const express = require('express');
const router = express.Router();
const dao = require('../models/Dao')
const c = require('../utils/constants')
const materialUtil = require('../models/utils/materialUtil')

router.post('/', (req, res) => {

    const recipeNameChecker = async(req.body.name, req.session.passport.user) => {
        const result = await dao.getRecipeByName(req.body.name, req.session.passport.user)
        if (result) res.json(resHandler(false, resCode.duplicate, null))
        else {
            console.log('[Router]: Duplicate Recipe Name Checked OK.')
            return Promise.resolve(req.body.contents)
        }
    }


    // ing table duplicate check
    // if so, find and connect that id

    //omg...need to set default 0 in material table..


    // duplicate table check -> utilize in model
    // new material introduced check -> utilize in model
    // new material register -> utilize in model

    // complete


    const eachIngredientHandler = (contents, i) => {
        if (!contents) return Promise.resolve(null)
        // contents=[{name:...,amount:...,unit:...},{},{}]
        const currentMaterialSet = await materialUtil.currentMaterialSetMaker(i)
        console.log('currentMaterialSet has been made', currentMaterialSet)
        for (let obj of contents) {
            materialUtil.newMaterialCheckThenAdder(obj, currentMaterialSet, i)
        }


    }
    const allIngredientsHandler = async contents => {
        // contents={meat:{},fish:{},...}
        // 4개의 서브 테이블이 묶인 contents를 받아
        // 각 ingredientId (총 4개)가 묶인 객체(ingIds)를 리턴
        let ingIds = {}
        Promise.all(c.ingredientTableNames.map(async (name, i) => {
            ingIds[name] = await eachIngredientHandler(contents[name].contents, i)
        }))

        contents.map(async obj => {
            console.log('obj', obj)
            await materialUtil.newMaterialCheckThenAdder(obj, currentMaterialSet, i)
            temp.push(obj.name + '=' + obj.amount)
            names.push(obj.name)
            amounts.push(obj.amount)
        })
    }

    dao.getRecipeByName(req.body.name, req.session.passport.user)
        .then(result => {
            if (result) res.json(resHandler(false, resCode.duplicate, null))
            else {
                console.log('[Router]: Duplicate Recipe Name Checked OK.')
                return Promise.resolve(req.body.contents)
            }
        })
        .then(async contents => {
            let ingIds = {}
            return Promise.all(c.ingredientTableNames.map(async (name, i) => {
                const currentMaterialSet = await materialUtil.currentMaterialSetMaker(i)
                console.log('currentMaterialSet in recipe.js', currentMaterialSet)
                let temp = []
                let names = []
                let amounts = []
                console.log('ingIds', ingIds)
                return Promise.all(contents[name].contents.map(async obj => {
                    console.log('obj', obj)
                    await materialUtil.newMaterialCheckThenAdder(obj, currentMaterialSet, i)
                    temp.push(obj.name + '=' + obj.amount)
                    names.push(obj.name)
                    amounts.push(obj.amount)
                })).then(async () => {
                    // temp=['닭고기',1,'소고기',0.5...]
                    temp = temp.join(' and ')
                    let findSql = `select id from ${c.ingredientTableNames[i]} 
                    where ${temp};`
                    await dao.customSqlHandler(findSql, 1)
                        .then(async exist => {
                            console.log('exist', exist)
                            if (exist) {
                                console.log('[Router]: An Existing Ingredient Table Detected.')
                                ingIds[c.ingredientTableIds[i]] = exist.id
                            }
                            else {
                                console.log('not exist')
                                let insertSql =
                                    `insert into ${c.ingredientTableNames[i]}(${names.join(',')}) 
                                    values (${amounts.join(',')});`
                                await dao.customSqlHandler(insertSql)
                                    .then(async () => {
                                        ingIds[c.ingredientTableIds[i]] = await dao.customSqlHandler(findSql, 1)
                                        console.log('[Router]: New Ingredient Table Created.')
                                    })


                            }
                        })
                })
            }))
                .then(() => console.log('ingIds', ingIds))
        })
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
        return Promise.resolve(result)
    }

    const ingredientsFinder = async result => {
        // result={id:###,name:###,style:###,...}
        let ingIds = await dao.getIngredientById(result.id)
            .catch(err => res.json(errHandler(err)))
        // ingIds={meatId:####,fishId:####,...}
        result.contents = {}

        return Promise.all(c.ingredientTableNames.map(
            async (name, i) =>
                result.contents[name] = await materialHandler(ingIds[c.ingredientTableIds[i]], name, c.ingredientUnitTableNames[i])
        ))
            .then(() => {
                console.log('[Router]: ingredientsFinder complete.')
                return Promise.resolve(result)
            })
    }

    dao.getMemberByUserId(req.session.passport.user)
        .then(member => {
            if (member) return dao.getRecipeByIds(req.params.id, member.id)
            else res.json(resHandler(false, resCode.notAuth, null))
        })
        .then(result => {
            if (!result) res.json(resHandler(false, resCode.notAuth, null))
            else {
                console.log('[Router]: Recipe Ownership checked OK.')
                return Promise.resolve(result)
            }
        })
        .then(ingredientsFinder)
        .then(result => res.json(resHandler(true, resCode.success, result)))
        .catch(err => res.json(errHandler(err)))
})

module.exports = router