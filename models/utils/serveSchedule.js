const moment = require('moment')
const servingTime = require('../../configs/servingTime')
const schedule = require('node-schedule')
const inventoryUtil = require('../utils/inventoryUtil')
const c = require('../../utils/constants')

const serve = meal => {
    const now = Date.now()
    const year = moment(now).year()
    const week = moment(now).week()
    const day = moment(now).day()

    let currTime = new Date();
    let timeStamp = currTime.getHours() + ' : ' + currTime.getMinutes() + ' : ' + currTime.getSeconds();
    console.log('[Schedule] now the time is : ', timeStamp)
    console.log('[Schedule]: time to eat', meal)
    console.log()
    inventoryUtil.consume(year, week, servingTime.days[day], meal)
        .catch(err => { throw err })
}

module.exports = () => {
    c.meals.map(meal => {
        // const rule = new schedule.RecurrenceRule()
        // rule.hour = servingTime[meal]
        // rule.minute = servingTime[meal]
        // rule.second = servingTime[meal]
        // schedule.scheduleJob(rule, () => serve(meal))
        schedule.scheduleJob(servingTime[meal], () => serve(meal))
    })
}