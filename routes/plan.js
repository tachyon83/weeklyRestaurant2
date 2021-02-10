// acts both as a router and as a controller

const resCode = require('../configs/responseCode')
const resHandler = require('../utils/responseHandler')
const errHandler = require('../utils/errorHandler')
const express = require('express');
const router = express.Router();
const auth = require('../utils/auth')
const planUtil = require('../models/utils/planUtil')


router.get('/:year/:week', async (req, res) => {
    planUtil.getWeek(req.params.year, req.params.week)
        .then(result => res.json(resHandler(true, resCode.success, result)))
        .catch(err => res.json(errHandler(err)))
})

router.put('/', auth, async (req, res) => {
    planUtil.mealHandler(req.body)
        .then(() => res.json(resHandler(true, resCode.success, null)))
        .catch(err => res.json(errHandler(err)))
})

module.exports = router