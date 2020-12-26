const resCode = require('../configs/responseCode')
const resHandler = require('./responseHandler')

module.exports = (req, res, err, ...r) => {
    r = r.join('_')
    console.log('[ERR]: ' + r)
    console.log(err)
    console.log()
    resHandler(req, res, false, resCode.error, null)
}