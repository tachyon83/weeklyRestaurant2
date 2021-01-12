const serve = require('./scheduleTest')
const moment = require('moment')

console.log(moment(Date.now()).week())
console.log(moment(Date.now()).year())
console.log(moment(Date.now()).day())