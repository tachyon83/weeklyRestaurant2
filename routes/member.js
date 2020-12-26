const resCode = require('../configs/responseCode')
const resHandler = require('../utils/responseHandler')
const errHandler = require('../utils/errorHandler')
const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportConfig = require('../configs/passportLocal')
const dao = require('../models/Dao')
const bcrypt = require('bcrypt')
const saltRounds = 10
passportConfig()


router.get('/check/:username', (req, res) => {
    dao.getMemberByUsername(req.params.username)
        .then(member => {
            if (member) return resHandler(req, res, false, resCode.exist, null)
            return resHandler(req, res, true, resCode.success, null)
        })
        .catch(err => errHandler(req, res, err, 'routes>member', '/check/:username', 'getMemberByusername'))
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, member, info) => {
        if (err) return errHandler(req, res, err, 'routes>member', '/login', 'passport.authenticate')
        if (member) {
            // when using custom callback, need to use req.logIn()
            req.logIn(member, (err) => {
                if (err) return errHandler(req, res, err, 'routes>member', '/login', 'passport.authenticate', 'req.login')
                console.log('login successful')
                return resHandler(req, res, true, resCode.success, null)
            })
        } else {
            console.log('login failed')
            return resHandler(req, res, false, resCode.wrong, null)
        }
    })(req, res, next)
})

router.post('/', (req, res) => {

    bcrypt.genSalt(saltRounds)
        .then(salt => {
            return bcrypt.hash(req.body.password, salt)
        })
        .then(hash => {
            req.body.password = hash
            return Promise.resolve(req.body)
        })
        .then(dao.register)
        .then(result => resHandler(req, res, true, resCode.success, null))
        .catch(err => errHandler(req, res, err, 'routes>member', '/', 'dao.register'))
})

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) return errHandler(req, res, err, 'routes>member', '/logout', 'sesion.destroy')
        return resHandler(req, res, true, resCode.success, null)
    })
})

module.exports = router