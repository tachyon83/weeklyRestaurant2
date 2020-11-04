const IngDummySuperDao = require('./IngDummySuperDao')

module.exports = class FishDummyDao extends IngDummySuperDao {

    constructor() {
        super()
        this.tableIdPrefix = 'fish_'
        this.storage = [
            { name: '멸치', amount: 3200, unit: '마리' },
            { name: '새우', amount: 300, unit: '마리' },
            { name: '조개', amount: 3200, unit: 'g' },
            { name: '오징어', amount: 450, unit: '마리' },
        ]
        this.table = [
            { id: 'fish_115', contents: this.newContents(30) },
            { id: 'fish_116', contents: this.newContents(0, 10, 80, 20) },
            { id: 'fish_117', contents: this.newContents(0, 3, 200, 0.5) },
        ]
    }
    idNum = 118
    idQueue = [106, 85, 54]
}
