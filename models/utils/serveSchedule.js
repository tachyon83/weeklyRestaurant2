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

    console.log('[SCHEDULE]: time to eat', meal)
    inventoryUtil.consume(year, week, servingTime.days[day], meal)
        .catch(err => { throw err })
}

module.exports = () => {
    c.meals.map(meal => {
        const rule = new schedule.RecurrenceRule()
        rule.hour = servingTime[meal]
        // rule.second = servingTime[meal]
        schedule.scheduleJob(rule, () => serve(meal))
    })
}