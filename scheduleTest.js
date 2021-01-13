const moment = require('moment')
const schedule = require('node-schedule')
const breakfastRule = new schedule.RecurrenceRule()
const lunchRule = new schedule.RecurrenceRule()
breakfastRule.second = 24
lunchRule.second = 26

const serve = meal => {
    const now = Date.now()
    const year = moment(now).year()
    const week = moment(now).week()
    const day = moment(now).day()

    console.log('time to eat', meal)
}

module.exports = () => {
    schedule.scheduleJob(breakfastRule, () => serve('breakfast'))
    schedule.scheduleJob(lunchRule, () => serve('lunch'))
}