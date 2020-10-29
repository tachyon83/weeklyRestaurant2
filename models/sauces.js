function Sauce(id, soysauce, redsauce, redpowder, sugar, salt, pepper, vinegar, choppedgarlic, ricewine, sesameoil, saltedshrimp, chunjang) {
    this.id = id;
    this.soysauce = soysauce;
    this.redsauce = redsauce;
    this.redpowder = redpowder;
    this.sugar = sugar;
    this.salt = salt;
    this.pepper = pepper;
    this.vinegar = vinegar;
    this.choppedgarlic = choppedgarlic;
    this.ricewine = ricewine;
    this.sesameoil = sesameoil;
    this.saltedshrimp = saltedshrimp
    this.chunjang = chunjang
}
Sauce.prototype.toJSON = function () {
    return {
        sauce_tableId: this.id,
        '간장': this.soysauce,
        '고추장': this.redsauce,
        '고춧가루': this.redpowder,
        '설탕': this.sugar,
        '소금': this.salt,
        '후추': this.pepper,
        '식초': this.vinegar,
        '다진마늘': this.choppedgarlic,
        '청주': this.ricewine,
        '참기름': this.sesameoil,
        '새우젓': this.saltedshrimp,
        '춘장': this.chunjang,
    }
}

module.exports = {
    kinds: [
        { name: '간장', unit: '스푼' },
        { name: '고추장', unit: '스푼' },
        { name: '고춧가루', unit: '스푼' },
        { name: '설탕', unit: '스푼' },
        { name: '소금', unit: '스푼' },
        { name: '후추', unit: '스푼' },
        { name: '식초', unit: '스푼' },
        { name: '다진마늘', unit: '스푼' },
        { name: '청주', unit: '스푼' },
        { name: '참기름', unit: '스푼' },
        { name: '새우젓', unit: '스푼' },
        { name: '춘장', unit: '컵' },
    ],
    sauces: [
        new Sauce('sauce_715', 1.5, null, 1, 3, null, null, null, 2, null, null, 0, 0).toJSON(),
        new Sauce('sauce_183', 10, null, 0, 0, 1.5, null, null, 0, null, null, 0, 0).toJSON(),
        new Sauce('sauce_195', 0.3, 0.5, 3, 0, 0, null, null, 2, null, 1, 0, 0).toJSON(),
        new Sauce('sauce_416', 1, 1.5, 0, 1, 0.3, 1, 1, 0.5, 2, 0, 0, 0).toJSON(),
        new Sauce('sauce_884', 3, 0, 0.5, 0, 0, 0, 0, 0.5, 1, 1, 0, 0).toJSON(),
        new Sauce('sauce_885', 0, 0, 3, 0, 0.5, 0.5, 0, 1.5, 0, 0, 1.5, 0).toJSON(),
        new Sauce('sauce_886', 0, 0, 0, 0.2, 0, 0, 0, 0, 0, 0, 0, 0.3).toJSON(),
        new Sauce('sauce_887', 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0).toJSON(),
        new Sauce('sauce_888', 0, 0, 0, 0, 0.5, 0.3, 0, 0, 0, 0, 0, 0).toJSON(),
        new Sauce('sauce_889', 0, 0, 0, 0, 0.2, 0, 0, 0, 0, 0, 0, 0).toJSON(),
        new Sauce('sauce_890', 0.5, 0, 0, 0.5, 0.2, 0.2, 0, 0.5, 0, 0, 0, 0).toJSON(),
    ]
}
