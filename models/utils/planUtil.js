const dao = require('../Dao')
const c = require('../../utils/constants')


const getDay = async dayId => {
    // when called by getWeek, dayId cannot be null
    const dayInfo = await dao.getDay(dayId)
    console.log('[Util]: Day Info obtained. Now getting Meal Info...')
    console.log()

    // at this point, parallel processing below works fine
    return await Promise.all(c.meals.map(async meal => await dao.getRecipeById(dayInfo[meal])))
}


const getWeek = async (year, week) => {
    const weekInfo = await dao.getWeek([year, week])
    if (!weekInfo) return null
    console.log('[Util]: Week Info obtained. Now getting Day Info...')
    console.log()

    // need to handle the case when weekInfo is null ?
    return await Promise.all(c.days.map(async day => await getDay(weekInfo[day])))
}


// takes day array(breakfast, lunch, dinner)
// returns an existing or a new id
const dayIdFinder = async day => {
    let sql =
        `select id from day 
        where `
    day.map((mealId, i) => {
        sql += c.meals[i]
        if (!mealId) sql += ' is null'
        else sql += '=' + mealId
        if (i < c.meals.length - 1) sql += ' and '
        else sql += ';'
    })
    let dayIdRes = await dao.sqlHandler(sql, null, 1)
    console.log('dayIdRes', dayIdRes)
    console.log()
    if (dayIdRes) {
        console.log('[Util]: An Existing Day Table Detected.')
        console.log()
        return dayIdRes.id
    }
    dayIdRes = await dao.getDayIdUponInsertion(day)
    console.log('[Util]: An New Day Table Created.')
    console.log()
    return dayIdRes[1][0].id
}

const weekHandler = async body => {
    let info = [
        body.year,
        body.week,
        body.memberId
    ]
    let weekIdRes = await dao.findWeekId(info)
    let weekId = null
    if (weekIdRes) {
        weekId = weekIdRes.id
        console.log('[Util]: An Existing Week Table Detected.')
        console.log()
    } else {
        weekIdRes = await dao.getWeekIdUponInsertion(info)
        weekId = weekIdRes[1][0].id
        console.log('[Util]: A New Week Table Created.')
        console.log()
    }

    body.weekInfo.push(weekId)
    return await dao.updateWeek(body.weekInfo)
}

module.exports = {
    dayIdFinder,
    weekHandler,
    getDay,
    getWeek,

}