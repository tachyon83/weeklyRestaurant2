const IngDummySuperDao = require('./IngDummySuperDao')

module.exports = class MeatDummyDao extends IngDummySuperDao {

    constructor() {
        super()
        this.tableIdPrefix = 'meat_'
        this.storage = [
            { name: '닭고기', amount: 300, unit: '마리' },
            { name: '소고기', amount: 300, unit: 'kg' },
            { name: '돼지고기', amount: 200, unit: 'kg' },
            { name: '순대', amount: 150, unit: '컵' },
        ]
        this.table = [
            { id: 'meat_137', contents: this.newContents(1) },
            { id: 'meat_207', contents: this.newContents(0, 0, 1) },
            { id: 'meat_423', contents: this.newContents(1) },
            { id: 'meat_518', contents: this.newContents(0, 1) },
            { id: 'meat_123', contents: this.newContents(0, 0, 0, 4) },
            { id: 'meat_124', contents: this.newContents(0, 0, 0.2) },
            { id: 'meat_125', contents: this.newContents(0, 0, 0.6) },
            { id: 'meat_126', contents: this.newContents(0, 0.3, 0.3) },
        ]
    }
    idNum = 519
    idQueue = [129, 130]
}
