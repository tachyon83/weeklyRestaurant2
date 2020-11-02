module.exports = class FishDummyDao {

    // Data means the whole JSON {id: ~, contents: ~}
    // contents means data.contents
    // contents = array

    constructor() {
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
            if (e.id == id) {
                e.contents = newContents
                cb(error, null)
                return
            }
        }
        // need to check this for each ingredientDao
        let newId = 'fish_' + this.newIdAssigner()
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
