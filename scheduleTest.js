const schedule = require('node-schedule')
const breakfastRule = new schedule.RecurrenceRule()
const lunchRule = new schedule.RecurrenceRule()
breakfastRule.second = 24
lunchRule.second = 26

module.exports = {
    breakfast: schedule.scheduleJob(breakfastRule, () => {
        console.log('oh now eat breakfast')
    }),
    lunch: schedule.scheduleJob(lunchRule, () => {
        console.log('oh now eat lunch')
    })
}