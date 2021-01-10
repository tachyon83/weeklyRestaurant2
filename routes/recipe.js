// acts both as a router and as a controller

const resCode = require('../configs/responseCode')
const resHandler = require('../utils/responseHandler')
const errHandler = require('../utils/errorHandler')
const express = require('express');
const router = express.Router();
const dao = require('../models/Dao')
const c = require('../utils/constants')
// const recipeUtil = require('../models/utils/recipeUtil')
const ingredientUtil = require('../models/utils/ingredientUtil')


router.get('/new', async (req, res) => {
    let result = {}
    await Promise.all(c.ingredientUnitTableNames.map(async (unitTableName, i) => {
        result[c.ingredientTableNames[i]] = await ingredientUtil.eachSubIngredientListFinder(unitTableName)
    }))
    res.json(resHandler(true, resCode.success, result))
})

router.get('/list', (req, res) => {
    dao.getStyleList(req.query.style)
        .then(list => res.json(resHandler(true, resCode.success, list)))
        .catch(err => res.json(errHandler(err)))
})

router.delete('/', (req, res) => {
    dao.deleteRecipe(req.body.id)
        .then(() => res.json(resHandler(true, resCode.success, null)))
        .catch(err => res.json(errHandler(err)))
})

router.put('/', async (req, res) => {

    // 수정 시에는 소유권을 확인하지 않는다.
    const ingIdsArr = await ingredientUtil.ingredientTablesIdFinder(req.body.contents)
    const ingId = await ingredientUtil.ingredientTableIdFinder(ingIdsArr)
    dao.updateRecipe(req.body.name, req.body.style, req.body.img, ingId, req.body.id)
        .then(() => res.json(resHandler(true, resCode.success, null)))
        .catch(err => res.json(errHandler(err)))

})

router.post('/', async (req, res) => {

    const ingIdsArr = await ingredientUtil.ingredientTablesIdFinder(req.body.contents)
    const ingId = await ingredientUtil.ingredientTableIdFinder(ingIdsArr)
    dao.insertRecipe(req.body.name, req.body.style, req.body.img, req.session.passport.user, ingId)
        .then(() => res.json(resHandler(true, resCode.success, null)))
        .catch(err => res.json(errHandler(err)))

})

router.get('/:id', (req, res) => {

    dao.getMemberByUserId(req.session.passport.user)
        .then(member => {
            if (member) return dao.getRecipeByIds(parseInt(req.params.id), member.id)
            else res.json(resHandler(false, resCode.notAuth, null))
        })
        // 소유권 확인 완료
        .then(result => {
            if (!result) res.json(resHandler(false, resCode.notAuth, null))
            else {
                console.log('[Router]: Recipe Ownership checked OK.')
                console.log()
                return Promise.resolve(result)
            }
        })
        .then(ingredientUtil.ingredientsFinder)
        .then(result => res.json(resHandler(true, resCode.success, result)))
        .catch(err => res.json(errHandler(err)))
})

module.exports = router