const moment = require('moment')
const servingTime = require('../../configs/servingTime')
const schedule = require('node-schedule')
const inventoryUtil = require('./inventoryUtil')
const c = require('../../utils/constants')

const serve = async meal => {
    const now = Date.now()
    const year = moment(now).year()
    const week = moment(now).week()
    const day = moment(now).day()

    let currTime = new Date();
    let timeStamp = currTime.getHours() + ' : ' + currTime.getMinutes() + ' : ' + currTime.getSeconds();
    console.log('[Schedule] now the time is : ', timeStamp)
    console.log('[Schedule]: time to eat', c.meals[meal])
    console.log()
    try {
        await inventoryUtil.consume(year, week, day, meal)
    } catch (err) {
        throw err
    }
}

module.exports = () => {
    // c.meals.map(meal => {
    [0, 1, 2].map(meal => {
        // const rule = new schedule.RecurrenceRule()
        // rule.hour = servingTime[meal]
        // rule.minute = servingTime[meal]
        // rule.second = servingTime[meal]
        // schedule.scheduleJob(rule, () => serve(meal))
        schedule.scheduleJob(servingTime[c.meals[meal]], () => serve(meal))
    })
}