const IngDummySuperDao = require('./IngDummySuperDao')

module.exports = class MiscDummyDao extends IngDummySuperDao {

    constructor() {
        super()
        this.tableIdPrefix = 'misc_'
        this.storage = [
            { name: '감자', amount: 600, unit: '개' },
            { name: '양파', amount: 400, unit: '개' },
            { name: '당근', amount: 200, unit: '개' },
            { name: '버섯', amount: 600, unit: '개' },
            { name: '대파', amount: 50, unit: '단' },
            { name: '마늘', amount: 800, unit: '개' },
            { name: '면', amount: 150, unit: '인분' },
            { name: '국수', amount: 100, unit: '인분' },
            { name: '청양고추', amount: 100, unit: '개' },
            { name: '고추', amount: 200, unit: '개' },
            { name: '애호박', amount: 80, unit: '개' },
            { name: '참깨', amount: 1000, unit: 'g' },
            { name: '김', amount: 2000, unit: 'g' },
            { name: '밥', amount: 50000, unit: 'g' },
            { name: '콩나물', amount: 1000, unit: 'g' },
            { name: '두부', amount: 2000, unit: 'g' },
            { name: '달걀', amount: 800, unit: '개' },
            { name: '양배추', amount: 100, unit: '개' },
            { name: '오이', amount: 100, unit: '개' },
            { name: '죽순', amount: 150, unit: '뿌리' },
            { name: '파프리카', amount: 100, unit: '개' },
            { name: '청경채', amount: 120, unit: '개' },
            { name: '빵가루', amount: 200, unit: 'g' },
            { name: '우유', amount: 3000, unit: 'ml' },
        ]
        this.table = [
            { id: 'misc_214', contents: this.newContents(2, 0.5, 0.3, 0.5, 1, 0, 0, 0, 2) },
            { id: 'misc_119', contents: this.newContents(0, 0.5, 0, 0, 0, 0, 0, 1, 0, 0, 0.5, 1, 1, 0, 0, 0, 0.5) },
            { id: 'misc_250', contents: this.newContents(0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 1) },
            { id: 'misc_410', contents: this.newContents(0, 0.6, 0, 0, 0, 5, 2, 0, 1, 0, 1) },
            { id: 'misc_516', contents: this.newContents(0, 0, 0.3, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 4) },
            { id: 'misc_416', contents: this.newContents(0, 0, 0, 0, 1, 0, 0, 0, 2) },
            { id: 'misc_417', contents: this.newContents(0, 1, 0, 0, 1.5, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.3) },
            { id: 'misc_417', contents: this.newContents(0, 1, 0, 0, 1.5, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.3) },
            { id: 'misc_418', contents: this.newContents(0, 0.5, 0, 2, 1, 0, 0, 0, 0, 0, 0, 10, 0, 200, 0, 0, 0, 0, 0, 1, 1, 4) },
            { id: 'misc_419', contents: this.newContents(0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 200, 1000) },
            { id: 'misc_420', contents: this.newContents(0, 1, 0, 0, 0, 5, 1) },
            { id: 'misc_420', contents: this.newContents(0, 1, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 200) },
        ]
    }
    idNum = 517
    idQueue = [415]
}
