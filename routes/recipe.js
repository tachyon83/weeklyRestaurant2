// acts both as a router and as a controller

const resCode = require('../configs/responseCode')
const resHandler = require('../utils/responseHandler')
const errHandler = require('../utils/errorHandler')
const express = require('express');
const router = express.Router();
const dao = require('../models/Dao')
// const c = require('../utils/constants')
const recipeUtil = require('../models/utils/recipeUtil')
const ingredientUtil = require('../models/utils/ingredientUtil')

router.put('/', (req, res) => {


})

router.post('/', (req, res) => {

    recipeUtil.recipeNameChecker(req.body.name, req.session.passport.user)
        .then(async () => {
            const ingIdsArr = await ingredientUtil.ingredientTablesIdFinder(req.body.contents)
            const ingId = await ingredientUtil.ingredientTableIdFinder(ingIdsArr)
            return await dao.insertRecipe(req.body.name, req.body.style, req.body.img, req.session.passport.user, ingId)
        })
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