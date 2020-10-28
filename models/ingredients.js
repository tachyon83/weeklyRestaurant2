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
    new Ingredient('ing_3014', 'meat_137', null, 'misc_214', 'sauce_715').toJSON()
]
