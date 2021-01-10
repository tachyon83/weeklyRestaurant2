const resCode = require('../configs/responseCode')
const resHandler = require('./responseHandler')

module.exports = err => {
    console.log('[ERROR]:', err)
    return resHandler(false, err.reason ? resCode[err.reason] : err.errno === 1062 ? resCode.duplicate : resCode.error, null)
}