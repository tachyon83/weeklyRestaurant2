module.exports = (req, res, next) => {
    // console.log(req.headers)
    let currTime = new Date();
    let timeStamp = currTime.getHours() + ':' + currTime.getMinutes();
    console.log('[TimeStamp] server called at: ', timeStamp)
    console.log()
    console.log('session Id in timestamp', req.session.id)
    next()
}