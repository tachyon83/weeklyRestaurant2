module.exports = class MeatDummyDao {

    // Data means the whole JSON {id: ~, contents: ~}
    // contents means data.contents
    // contents = array

    constructor() {
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
            if (e.id == dto.id) {
                e.contents = newContents
                cb(error, null)
                return
            }
        }
        // need to check this for each ingredientDao
        let newId = 'meat_' + this.newIdAssigner()
        this.table.push({ id: newId, contents: newContents })
        cb(error, newId)
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
                cb(err, e);
                break;
            }
        }
        // when it does not exist, throw err
    }

    returnStorage() {
        return this.storage;
    }
}
