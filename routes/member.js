const resCode = require('../configs/responseCode')
const resHandler = require('../utils/responseHandler')
const errHandler = require('../utils/errorHandler')
const auth = require('../utils/auth')
const encode = require('../utils/encode')
const express = require('express');
const router = express.Router();
const dao = require('../models/Dao')
const passport = require('passport');
const passportConfig = require('../configs/passportLocal')
passportConfig()


// need to worry about the fact that anyone can check if a certain ID exists.
router.get('/check/:username', (req, res) => {
    dao.getMemberByUsername(req.params.username)
        .then(member => {
            if (member) res.json(resHandler(false, resCode.duplicate, null))
            res.json(resHandler(true, resCode.success, null))
        })
        .catch(err => res.json(errHandler(err)))
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, member, info) => {
        if (err) res.json(errHandler(err))
        if (member) {
            // when using custom callback, need to use req.logIn()
            req.logIn(member, (err) => {
                if (err) res.json(errHandler(err))
                console.log('[MEMBER]: login successful')
                console.log(req.session.passport)
                console.log()
                res.json(resHandler(true, resCode.success, null))
            })
        } else {
            console.log('[MEMBER]: login failed')
            console.log()
            res.json(resHandler(false, resCode.wrong, null))
        }
    })(req, res, next)
})

router.post('/', (req, res) => {

    encode(req.body.password)
        .then(hash => {
            req.body.password = hash
            return Promise.resolve(req.body)
        })
        .then(dao.insertMember)
        .then(result => {
            if (result) {
                res.json(resHandler(true, resCode.success, null))
                console.log('[MEMBER]: signup successful')
                console.log()
            }
            res.json(resHandler(false, resCode.error, null))
        })
        .catch(err => res.json(errHandler(err)))

})

router.get('/logout', auth, (req, res) => {
    req.session.destroy(err => {
        if (err) res.json(errHandler(err))
        console.log('[MEMBER]: successfully logged out')
        console.log()
        res.json(resHandler(true, resCode.success, null))
    })
})

module.exports = router