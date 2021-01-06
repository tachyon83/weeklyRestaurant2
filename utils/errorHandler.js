const resCode = require('../configs/responseCode')
const resHandler = require('./responseHandler')

module.exports = err => {
    console.log('[ERROR]:', err)
    resHandler(false, err.reason ? resCode[err.reason] : resCode.error, null)
}