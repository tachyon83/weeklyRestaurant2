module.exports = (req, res, next) => {
    if (req.isAuthenticated()) {
        console.log('[AUTH CHECK]: Authenticated.')
        return next()
    }
    console.log('[AUTH CHECK]: Not Authenticated.')
}