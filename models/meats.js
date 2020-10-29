function Meat(id, chicken, beef, pork, koreansausage) {
    this.id = id;
    this.chicken = chicken;
    this.beef = beef;
    this.pork = pork;
    this.koreansausage = koreansausage
}
Meat.prototype.toJSON = function () {
    return {
        id: this.id,
        '닭고기': this.chicken,
        '소고기': this.beef,
        '돼지고기': this.pork,
        '순대': this.koreansausage,
    }
}

module.exports = {
    kinds: [
        { name: '닭고기', unit: '마리' },
        { name: '소고기', unit: 'kg' },
        { name: '돼지고기', unit: 'kg' },
        { name: '순대', unit: '컵' },
    ],
    meats: [
        new Meat('meat_137', 1, 0, null, 0).toJSON(),
        new Meat('meat_207', null, null, 1, 0).toJSON(),
        new Meat('meat_423', 1, 0, 0, 0).toJSON(),
        new Meat('meat_518', 0, 1, 0, 0).toJSON(),
        new Meat('meat_123', 0, 0, 0, 4).toJSON(),
        new Meat('meat_124', 0, 0, 0.2, 0).toJSON(),
        new Meat('meat_125', 0, 0, 0.6, 0).toJSON(),
        new Meat('meat_126', 0, 0.3, 0.3, 0).toJSON(),
    ]
};
