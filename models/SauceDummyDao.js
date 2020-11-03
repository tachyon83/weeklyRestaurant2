module.exports = class SauceDummyDao {

    // Data means the whole JSON {id: ~, contents: ~}
    // contents means data.contents
    // contents = array

    constructor() {
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

    createNewRecipe = cb => {
        let ret = []
        for (let e of this.storage) {
            let temp = {}
            temp.name = e.name
            temp.unit = e.unit
            ret.push(temp)
        }
        cb(null, ret)
    }

    // this is to create a data given from front-end
    // can be used for both CREATE and UPDATE
    // ex: {name:'오리고기',amount:300,unit:'g'}
    // the Dao front-controller will scoop out and send in the partial data
    handleContentsFromFront = (dto, cb) => {
        if (!dto) {
            cb(null, null)
            return
        }
        let error = null
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
            if (e.id == dto.id) {
                e.contents = newContents
                cb(error, null)
                return
            }
        }
        // need to check this for each ingredientDao
        let newId = 'sauce_' + this.newIdAssigner()
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
        }
        // when it does not exist, throw err
    }

    returnStorage() {
        return this.storage;
    }
}
