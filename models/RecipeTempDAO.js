const recipes = require('./recipes');
const ingredients = require('./ingredients')
const meats = require('./meats')
const fishes = require('./fishes')
const miscs = require('./miscs')
const sauces = require('./sauces')

module.exports = class RecipeTempDAO {
    constructor() { }

    filterByAmount = (from, to, ref) => {
        if (!from) return;
        for (let i = 0; i < ref.kinds.length; ++i) {
            let amount = from[ref.kinds[i].name];
            if (amount > 0) {
                to.push({
                    name: ref.kinds[i].name,
                    amount: amount,
                    unit: ref.kinds[i].unit,
                })
            }
        }
    }

    showListByCategory = (category, cb) => {
        let err = null;
        let results = recipes.filter(recipe => recipe.recipeCategory == category);
        if (err) cb(err, null);
        else cb(null, { [category]: results })
    }

    showDetailById = (id, cb) => {
        let err = null;
        let recipe = recipes.filter(e => e.recipeId == id)[0];
        let ingredient = ingredients.filter(e => e.id == recipe.ingredients_tableId)[0];

        let wholemeat = meats.meats.filter(e => e.id == ingredient.meat_tableId)[0]
        let meat = [];
        this.filterByAmount(wholemeat, meat, meats);

        let wholefish = fishes.fishes.filter(e => e.id == ingredient.fish_tableId)[0]
        let fish = [];
        this.filterByAmount(wholefish, fish, fishes);

        let wholemisc = miscs.miscs.filter(e => e.id == ingredient.misc_tableId)[0]
        let misc = [];
        this.filterByAmount(wholemisc, misc, miscs)

        let wholesauce = sauces.sauces.filter(e => e.id == ingredient.sauce_tableId)[0]
        let sauce = [];
        this.filterByAmount(wholesauce, sauce, sauces)

        let result = {
            recipe: recipe,
            meat: meat,
            fish: fish,
            misc: misc,
            sauce: sauce,
        }
        if (err) cb(err, null);
        else cb(null, result);
    }

    createNewRecipe = cb => {
        let err = null;
        let result = {
            meat: meats.kinds,
            fish: fishes.kinds,
            misc: miscs.kinds,
            sauce: sauces.kinds,
        }
        if (err) cb(err, null);
        else cb(null, result);
    }
}