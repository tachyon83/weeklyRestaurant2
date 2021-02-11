const errHandler = require('../utils/errorHandler')

module.exports = (req, res, next) => {
    // console.log('session ID', req.session.id)
    // if (process.env.NODE_ENV !== 'production') return next()
    if (req.isAuthenticated()) {
        console.log('[AUTH CHECK]: Authenticated.')
        return next()
    }
    console.log('[AUTH CHECK]: Not Authenticated.')
    let err = new Error()
    err.reason = 'notAuth'
    res.json(errHandler(err))
}