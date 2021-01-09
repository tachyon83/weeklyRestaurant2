const dao = require('../Dao')
// const c = require('../../utils/constants')

module.exports = {

    // takes recipeName and userId
    // returns true/err
    recipeNameChecker: async (name, userId) => {
        const result = await dao.getRecipeByName(name, userId)
        if (result) {
            let err = new Error()
            err.reason = 'duplicate'
            return Promise.reject(err)
        } else {
            console.log('[Util]: Duplicate Recipe Name Checked OK.')
            console.log()
            return Promise.resolve()
        }
    },



}