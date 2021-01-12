const moment = require('moment')
const servingTime = require('../settings/servingTime')
const schedule = require('node-schedule')

const breakfastRule = new schedule.RecurrenceRule()
const lunchRule = new schedule.RecurrenceRule()
const dinnerRule = new schedule.RecurrenceRule()
breakfastRule.hour = servingTime.breakfast
lunchRule.hour = servingTime.lunch
dinnerRule.hour = servingTime.dinner

module.exports = {
    breakfast: schedule.scheduleJob(breakfastRule, () => {
        const now = Date.now()
        const year = moment(now).year()
        const week = moment(now).week()
        const day = moment(now).day()

        // week table null
        // 해당 meal recipeId=null
        // inventory에 0
        // 차감 후 마이너스일때

        // year,week,day -> recipe
        // 재료 숫자
        // member servings파악
        // inventory에서 차감
        console.log('time to eat breakfast')
    }),
    lunch: schedule.scheduleJob(lunchRule, () => {
        console.log('oh now eat lunch')
    }),
    dinner: schedule.scheduleJob(dinnerRule, () => {

    }),
}