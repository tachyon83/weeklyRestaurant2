function Meat(id, chicken, beef, pork) {
    this.id = id;
    this.chicken = chicken;
    this.beef = beef;
    this.pork = pork;
}
Meat.prototype.toJSON = function () {
    return {
        id: this.id,
        '닭고기': this.chicken,
        '소고기': this.beef,
        '돼지고기': this.pork,
    }
}

module.exports = {
    kinds: [
        { name: '닭고기', unit: '마리' },
        { name: '소고기', unit: 'kg' },
        { name: '돼지고기', unit: 'kg' },
    ],
    meats: [
        new Meat('meat_137', 1, 0, null).toJSON()
    ]
    // meats: {
    //     'meat_137': {
    //         meat_tableId: 'meat_137',
    //         '닭고기': 1
    //     },
    // }
};
