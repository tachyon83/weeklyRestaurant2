const moment = require('moment')
const schedule = require('node-schedule')
const breakfastRule = new schedule.RecurrenceRule()
const lunchRule = new schedule.RecurrenceRule()
breakfastRule.second = 24
lunchRule.second = 26
const times = {
    breakfast: '23 15 14 * * *',
}

const serve = meal => {
    const now = Date.now()
    const year = moment(now).year()
    const week = moment(now).week()
    const day = moment(now).day()

    console.log(year, week, day)
    let currTime = new Date();
    let timeStamp = currTime.getHours() + ' : ' + currTime.getMinutes() + ' : ' + currTime.getSeconds();
    console.log('[Schedule] now the time is : ', timeStamp)

    console.log('time to eat', meal)
}

module.exports = () => {
    schedule.scheduleJob(times.breakfast, () => serve('breakfast'))
    schedule.scheduleJob(lunchRule, () => serve('lunch'))
}