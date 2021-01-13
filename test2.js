const serve = require('./scheduleTest')
const moment = require('moment')

const now = moment(Date.now())
console.log(moment(now).week())
console.log(moment(now).year())
console.log(moment(now).day())
serve()