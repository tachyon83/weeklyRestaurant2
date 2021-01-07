// *** when using passport,
// body-parser, cookie-parser, express-session,
// passport, passport-local, and of course express are required

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const dao = require('../models/Dao')
const bcrypt = require('bcrypt')

module.exports = () => {

    // key='user' in passport

    passport.serializeUser((member, done) => {
        // done(null, member.username);
        done(null, member.id);
    })
    // passport.deserializeUser((username, done) => {
    passport.deserializeUser((id, done) => {
        console.log('[PASSPORT]: Deserializing...')
        console.log()
        // dao.getMemberByUsername(username).then(member => {
        dao.getMemberByUserId(id).then(member => {
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
            if (member && bcrypt.compareSync(password, member.password)) {
                console.log('[PASSPORT]: Authenticated.')
                console.log()
                return done(null, member)
            }
            console.log('[PASSPORT]: Not Authenticated.')
            console.log()
            return done(null, false)
        }).catch(err => done(err))
    }))
}