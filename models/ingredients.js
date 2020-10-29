function Ingredient(id, meat, fish, misc, sauce) {
    this.id = id;
    this.meat = meat;
    this.fish = fish;
    this.misc = misc;
    this.sauce = sauce;
}
Ingredient.prototype.toJSON = function () {
    return {
        id: this.id,
        meat_tableId: this.meat,
        fish_tableId: this.fish,
        misc_tableId: this.misc,
        sauce_tableId: this.sauce,
    }
}

module.exports = [
    new Ingredient('ing_3014', 'meat_137', null, 'misc_214', 'sauce_715').toJSON(),
    new Ingredient('ing_156', null, 'fish_115', 'misc_119', 'sauce_183').toJSON(),
    new Ingredient('ing_3752', 'meat_207', null, 'misc_250', 'sauce_195').toJSON(),
    new Ingredient('ing_3694', 'meat_423', null, 'misc_410', 'sauce_416').toJSON(),
    new Ingredient('ing_8701', 'meat_518', null, 'misc_516', 'sauce_884').toJSON(),
    new Ingredient('ing_1737', 'meat_123', null, 'misc_416', 'sauce_885').toJSON(),
    new Ingredient('ing_1738', 'meat_124', null, 'misc_417', 'sauce_886').toJSON(),
    new Ingredient('ing_1739', null, 'fish_116', 'misc_418', 'sauce_887').toJSON(),
    new Ingredient('ing_1740', 'meat_125', null, 'misc_419', 'sauce_888').toJSON(),
    new Ingredient('ing_1741', null, 'fish_117', 'misc_420', 'sauce_889').toJSON(),
    new Ingredient('ing_1742', 'meat_126', null, 'misc_421', 'sauce_890').toJSON(),
]
