// *** when using passport,
// body-parser, cookie-parser, express-session,
// passport, passport-local, and of course express are required

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const dao = require('../models/Dao')
const bcrypt = require('bcrypt')

module.exports = () => {
    passport.serializeUser((member, done) => {
        done(null, member.username);
    })
    passport.deserializeUser((username, done) => {
        dao.getMemberByUsername(username).then(member => {
            if (member) return done(null, member)
            return done(null, null)
        }).catch(err => done(err, null))
    })
    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        session: true,
        passReqToCallback: true,
    }, (req, username, password, done) => {
        dao.getMemberByUsername(username).then(member => {
            if (member && bcrypt.compareSync(password, member.password)) return done(null, member)
            return done(null, false)
        }).catch(err => done(err))
    }))
}