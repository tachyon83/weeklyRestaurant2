const dao = require('../Dao')
// const c = require('../../utils/constants')


const getWeek = async (year, week) => {
    // Even where there is no week data in database, 
    // there should be a return in correct form.

    let ret = []
    for (let i = 0; i < 7; ++i)ret.push([null, null, null])
    const weekInfo = await dao.getWeek([year, week])
    if (!weekInfo.length) return ret
    weekInfo.map(e => {
        ret[e.day][e.meal] = {
            id: e.id,
            name: e.name,
            style: e.style,
            img: e.img,
        }
    })
    return ret
}

const weekHandler = async body => {
    return await Promise.all(body.plan.map(async (day, dayIdx) => {
        await Promise.all(day.map(async (meal, mealIdx) => {
            if (meal) await dao.handleWeek([body.year, body.week, dayIdx, mealIdx, meal, meal])
        }))
    }))
}

module.exports = {
    weekHandler,
    getWeek,

}