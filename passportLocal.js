const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const MemberDao = require('./models/MemberTempDAO')
const memberDao = new MemberDao()

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    })
    passport.deserializeUser((id, done) => {
        memberDao.findById(id, (err, user) => {
            if (err) return done(err, null);
            done(null, user);
        })
    })
    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        session: true,
        passReqToCallback: true,
    }, (req, id, pw, done) => {
        memberDao.findById(id, (err, user) => {
            console.log('inside passportLocal')
            if (err) return done(err);
            if (!user) return done(null, false, { message: "this ID does not exist" });
            if (user.pw == pw) return done(null, user);
            return done(null, false, { message: "password does not match" })
        })
    }))
}