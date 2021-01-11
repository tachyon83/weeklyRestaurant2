const resCode = require('../configs/responseCode')
const resHandler = require('../utils/responseHandler')
const errHandler = require('../utils/errorHandler')
const express = require('express');
const router = express.Router();
const inventoryUtil = require('../models/utils/inventoryUtil')


router.get('/', (req, res) => {
    inventoryUtil.getInventories(req.session.passport.user)
        .then(result => res.json(resHandler(true, resCode.success, result)))
        .catch(err => res.json(errHandler(err)))
})

router.put('/', (req, res) => {

})

module.exports = router