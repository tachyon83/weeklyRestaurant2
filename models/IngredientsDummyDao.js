module.exports = class IngredientsDummyDao {
    constructor() {
        this.meats = new (require('./MeatDummyDao'))
        this.fishes = new (require('./FishDummyDao'))
        this.miscs = new (require('./MiscDummyDao'))
        this.sauces = new (require('./SauceDummyDao'))
        this.table = [
            {
                id: 'ing_3014',
                contents: {
                    meat_tableId: 'meat_137',
                    fish_tableId: null,
                    misc_tableId: 'misc_214',
                    sauce_tableId: 'sauce_715',
                },
            },
            {
                id: 'ing_156',
                contents: {
                    meat_tableId: null,
                    fish_tableId: 'fish_115',
                    misc_tableId: 'misc_119',
                    sauce_tableId: 'sauce_183',
                },
            },
            {
                id: 'ing_3752',
                contents: {
                    meat_tableId: 'meat_207',
                    fish_tableId: null,
                    misc_tableId: 'misc_250',
                    sauce_tableId: 'sauce_195',
                },
            },
            {
                id: 'ing_3694',
                contents: {
                    meat_tableId: 'meat_423',
                    fish_tableId: null,
                    misc_tableId: 'misc_410',
                    sauce_tableId: 'sauce_416',
                },
            },
            {
                id: 'ing_8701',
                contents: {
                    meat_tableId: 'meat_518',
                    fish_tableId: null,
                    misc_tableId: 'misc_516',
                    sauce_tableId: 'sauce_884',
                },
            },
            {
                id: 'ing_1737',
                contents: {
                    meat_tableId: 'meat_123',
                    fish_tableId: null,
                    misc_tableId: 'misc_416',
                    sauce_tableId: 'sauce_885',
                },
            },
            {
                id: 'ing_1738',
                contents: {
                    meat_tableId: 'meat_124',
                    fish_tableId: null,
                    misc_tableId: 'misc_417',
                    sauce_tableId: 'sauce_886',
                },
            },
            {
                id: 'ing_1739',
                contents: {
                    meat_tableId: null,
                    fish_tableId: 'fish_116',
                    misc_tableId: 'misc_418',
                    sauce_tableId: 'sauce_887',
                },
            },
            {
                id: 'ing_1740',
                contents: {
                    meat_tableId: 'meat_125',
                    fish_tableId: null,
                    misc_tableId: 'misc_419',
                    sauce_tableId: 'sauce_888',
                },
            },
            {
                id: 'ing_1741',
                contents: {
                    meat_tableId: null,
                    fish_tableId: 'fish_117',
                    misc_tableId: 'misc_420',
                    sauce_tableId: 'sauce_889',
                },
            },
            {
                id: 'ing_1742',
                contents: {
                    meat_tableId: 'meat_126',
                    fish_tableId: null,
                    misc_tableId: 'misc_421',
                    sauce_tableId: 'sauce_890',
                },
            },
        ]
    }
    idNum = 8702
    idQueue = [3753, 3754]
    newIdAssigner() {
        // this returns only the number
        // the full id name is composed below in handler
        if (this.idQueue.length) return this.idQueue.shift()
        return this.idNum++
    }

    ingAssemble_detail = async (contents, cb) => {
        let ret = {}
        await this.meats.findDetailById(contents.meat_tableId, (err, result) => {
            if (err) throw new Error(err);
            ret.meats = result;
        })
        await this.fishes.findDetailById(contents.fish_tableId, (err, result) => {
            if (err) throw new Error(err);
            ret.fishes = result;
        })
        await this.miscs.findDetailById(contents.misc_tableId, (err, result) => {
            if (err) throw new Error(err);
            ret.miscs = result;
        })
        await this.sauces.findDetailById(contents.sauce_tableId, (err, result) => {
            if (err) throw new Error(err);
            ret.sauces = result;
        })
        cb(ret);
    }
    ingAssemble_handle = async (contents, cb) => {
        let ret = {}
        await this.meats.handleContentsFromFront(contents.meats, (err, newId) => {
            if (err) throw new Error(err);
            if (newId) ret.meat_tableId = newId
        })
        await this.fishes.handleContentsFromFront(contents.fishes, (err, newId) => {
            if (err) throw new Error(err);
            if (newId) ret.fish_tableId = newId
        })
        await this.miscs.handleContentsFromFront(contents.miscs, (err, newId) => {
            if (err) throw new Error(err);
            if (newId) ret.misc_tableId = newId
        })
        await this.sauces.handleContentsFromFront(contents.sauces, (err, newId) => {
            if (err) throw new Error(err);
            if (newId) ret.sauce_tableId = newId
        })
        cb(ret);
    }
    ingAssemble_delete = async (contents, cb) => {
        await this.meats.deleteById(contents.meat_tableId, (err, res) => {
            if (err) throw new Error(err)
        })
        await this.fishes.deleteById(contents.fish_tableId, (err, res) => {
            if (err) throw new Error(err)
        })
        await this.miscs.deleteById(contents.misc_tableId, (err, res) => {
            if (err) throw new Error(err)
        })
        await this.sauces.deleteById(contents.sauce_tableId, (err, res) => {
            if (err) throw new Error(err)
        })
        cb(null, true)
    }
    ingAssemble_storage = async cb => {
        let ret = {}
        await this.meats.checkStorage((err, res) => {
            if (err) throw new Error(err)
            ret.meats = res
        })
        await this.fishes.checkStorage((err, res) => {
            if (err) throw new Error(err)
            ret.fishes = res
        })
        await this.miscs.checkStorage((err, res) => {
            if (err) throw new Error(err)
            ret.miscs = res
        })
        await this.sauces.checkStorage((err, res) => {
            if (err) throw new Error(err)
            ret.sauces = res
        })
        cb(null, ret)
    }

    createNewRecipe = async cb => {
        let ret = {}
        await this.meats.createNewRecipe((err, res) => {
            if (err) throw new Error(err)
            ret.meats = {}
            ret.meats.contents = res
        })
        await this.fishes.createNewRecipe((err, res) => {
            if (err) throw new Error(err)
            ret.fishes = {}
            ret.fishes.contents = res
        })
        await this.miscs.createNewRecipe((err, res) => {
            if (err) throw new Error(err)
            ret.miscs = {}
            ret.miscs.contents = res
        })
        await this.sauces.createNewRecipe((err, res) => {
            if (err) throw new Error(err)
            ret.sauces = {}
            ret.sauces.contents = res
        })
        cb(null, ret)
    }

    // takes ID, then returns ingredientsDto
    findDetailById = (id, cb) => {
        for (let e of this.table) {
            if (e.id == id) {
                // need to worry about async waterfall here
                this.ingAssemble_detail(e.contents, (res) => {
                    let ret = {}
                    ret.id = id
                    ret.contents = res;
                    cb(null, ret)
                    // break;
                })
            }
        }
    }

    // used for CREATE and UPDATE.
    // if success, return true. 
    // returns false otherwise.
    handleIngredientsFromFront = (ingDto, cb) => {
        let error = null;
        let backToRecipeDummy = null;
        if (!ingDto.id) {
            this.ingAssemble_handle(ingDto.contents, res => {
                let ret = {}
                ret.id = 'ing_' + this.newIdAssigner()
                ret.contents = res
                this.table.push(ret)
                backToRecipeDummy = ret.id
                if (!error) cb(error, backToRecipeDummy)
                else cb(error, false)
            })
        } else {
            for (let i in this.table) {
                if (this.table[i].id == ingDto.id) {
                    this.ingAssemble_handle(ingDto.contents, res => {
                        backToRecipeDummy = true
                        if (!error) cb(error, backToRecipeDummy)
                        else cb(error, false)
                        // break;
                    })
                }
            }
        }
        // if (!error) cb(error, backToRecipeDummy)
        // else cb(error, false)
    }

    deleteById = (id, cb) => {
        let error = null
        this.table = this.table.filter(e => {
            if (e.id == id) {
                this.ingAssemble_delete(e.contents, (err, res) => {
                    if (err) throw new Error(err)
                    if (!res) throw new Error('4가지 삭제 중 에러발생')
                    return false;
                })
            } else return true;
        })
        this.idQueue.push(id)
        cb(error, true)
    }
    checkStorage = cb => {
        this.ingAssemble_storage((err, res) => {
            if (err) throw new Error(err)
            cb(err, res)
        })
    }
}
