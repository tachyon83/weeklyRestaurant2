const IngDummySuperDao = require('./IngDummySuperDao')

module.exports = class SauceDummyDao extends IngDummySuperDao {

    constructor() {
        super()
        this.tableIdPrefix = 'sauce_'
        this.storage = [
            { name: '간장', amount: 3000, unit: '스푼' },
            { name: '고추장', amount: 2000, unit: '스푼' },
            { name: '고춧가루', amount: 800, unit: '스푼' },
            { name: '설탕', amount: 600, unit: '스푼' },
            { name: '소금', amount: 600, unit: '스푼' },
            { name: '후추', amount: 400, unit: '스푼' },
            { name: '식초', amount: 800, unit: '스푼' },
            { name: '다진마늘', amount: 200, unit: '스푼' },
            { name: '청주', amount: 50, unit: '스푼' },
            { name: '참기름', amount: 100, unit: '스푼' },
            { name: '새우젓', amount: 100, unit: '스푼' },
            { name: '춘장', amount: 50, unit: '컵' },
        ]
        this.table = [
            { id: 'sauce_715', contents: this.newContents(1.5, 0, 1, 3, 0, 0, 0, 2) },
            { id: 'sauce_183', contents: this.newContents(10, 0, 0, 0, 1.5) },
            { id: 'sauce_195', contents: this.newContents(0.3, 0.5, 3, 0, 0, 0, 0, 2, 0, 1) },
            { id: 'sauce_416', contents: this.newContents(1, 1.5, 0, 1, 0.3, 1, 1, 0.5, 2) },
            { id: 'sauce_884', contents: this.newContents(3, 0, 0.5, 0, 0, 0, 0, 0.5, 1, 1) },
            { id: 'sauce_885', contents: this.newContents(0, 0, 3, 0, 0.5, 0.5, 0, 1.5, 0, 0, 1.5) },
            { id: 'sauce_886', contents: this.newContents(0, 0, 0, 0.2, 0, 0, 0, 0, 0, 0, 0, 0.3) },
            { id: 'sauce_887', contents: this.newContents(0, 0, 0, 0, 0, 0, 0, 2, 2, 2) },
            { id: 'sauce_888', contents: this.newContents(0, 0, 0, 0, 0.5, 0.3) },
            { id: 'sauce_889', contents: this.newContents(0, 0, 0, 0, 0.2) },
            { id: 'sauce_890', contents: this.newContents(0.5, 0, 0, 0.5, 0.2, 0.2, 0, 0.5) },
        ]
    }
    idNum = 891
    idQueue = [184, 196]
}
