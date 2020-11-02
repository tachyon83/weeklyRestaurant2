module.exports = class MiscDummyDao {

    // Data means the whole JSON {id: ~, contents: ~}
    // contents means data.contents
    // contents = array


    constructor() {
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
    newIdAssigner() {
        // this returns only the number
        // the full id name is composed below in handler
        if (this.idQueue.length) return this.idQueue.shift()
        return this.idNum++
    }

    setFormer() {
        // kindsSet contains the names only
        let kindsSet = new Set()
        for (let e of this.storage) kindsSet.add(e.name)
        return kindsSet
    }

    // newContents is just to create dummy data
    // not needed actually
    newContents(...nums) {
        let ret = []
        for (let i in nums) {
            let temp = {}
            temp.name = this.storage[i].name
            temp.amount = nums[i];
            temp.unit = this.storage[i].unit
            ret.push(temp)
        }
        return ret;
    }

    rowFormer(p) {
        let temp = {}
        temp.name = p.name
        temp.amount = p.amount
        temp.unit = p.unit
        return temp
    }

    // this is to create a data given from front-end
    // can be used for both CREATE and UPDATE
    // ex: {name:'오리고기',amount:300,unit:'g'}
    // the Dao front-controller will scoop out and send in the partial data
    handleContentsFromFront = (dto, cb) => {
        let error = null;
        let newContents = [], newMaterial = []
        let kindsSet = this.setFormer()
        for (let p of dto.contents) {
            if (kindsSet.has(p.name)) newContents.push(this.rowFormer(p))
            else newMaterial.push(p)
        }
        while (newMaterial.length) {
            let curr = newMaterial.shift()
            this.storage.push({ name: curr.name, amount: 0, unit: curr.unit })
            newContents.push(this.rowFormer(curr))
        }
        for (let e of this.table) {
            if (e.id == id) {
                e.contents = newContents
                cb(error, null)
                return
            }
        }
        // need to check this for each ingredientDao
        let newId = 'misc_' + this.newIdAssigner()
        this.table.push({ id: newId, contents: newContents })
        return newId
    }

    deleteById = (id, cb) => {
        this.table = this.table.filter(e => e.id != id)
        this.idQueue.push(id)
        cb(null, true)
    }

    findDetailById = (id, cb) => {
        let err = null
        for (let e of this.table) {
            if (e.id == id) {
                cb(err, e)
                break;
            }
            // when it does not exist, throw err
        }
    }

    returnStorage() {
        return this.storage;
    }
}
