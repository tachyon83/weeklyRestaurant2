module.exports = class IngDummySuperDao {

    // DTO usually forms the whole JSON {id: ~, contents: ~}
    // contents = array

    constructor() {
        // this.storage = []
        // this.table = []
    }
    // idNum = 519
    // idQueue = [129, 130]
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
        let newId = this.tableIdPrefix + this.newIdAssigner()
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

    checkStorage = cb => {
        cb(null, this.storage)
    }
}
