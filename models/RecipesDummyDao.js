module.exports = class RecipesDummyDao {
    constructor() {
        this.ingredients = new (require('./IngredientsDummyDao'))
        this.table = [
            {
                id: 1134,
                contents: {
                    name: '닭볶음탕',
                    category: 'KOR',
                    img: 'https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/26152/pad_thumb_ch15.jpg',
                },
                ingredients_tableId: 'ing_3014',
            },
            {
                id: 2317,
                contents: {
                    name: '멸치국수',
                    category: 'KOR',
                    img: 'https://cdn.pixabay.com/photo/2015/04/06/16/32/if-709614__340.jpg',

                },
                ingredients_tableId: 'ing_156',
            },
            {
                id: 3105,
                contents: {
                    name: '마파두부',
                    category: 'CHN',
                    img: 'https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/1168/pad_thumb_m.png&convert=jpgmin&rt=600',
                },
                ingredients_tableId: 'ing_3752'
            },
            {
                id: 2965,
                contents: {
                    name: '닭칼국수',
                    category: 'KOR',
                    img: 'https://imagescdn.gettyimagesbank.com/500/201708/a10968180.jpg',
                },
                ingredients_tableId: 'ing_3694'
            },
            {
                id: 1376,
                contents: {
                    name: '소고기콩나물비빔밥',
                    category: 'KOR',
                    img: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F143948354FB8FDF6296B73',
                },
                ingredients_tableId: 'ing_8701',
            },
            {
                id: 806,
                contents: {
                    name: '순대국밥',
                    category: 'KOR',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyOmrqbHnyUqJfVUMxY6l_my0eyw_twRPGEw&usqp=CAU',
                },
                ingredients_tableId: 'ing_1737',
            },
            {
                id: 504,
                contents: {
                    name: '짜장면',
                    category: 'CHN',
                    img: 'https://recipe1.ezmember.co.kr/cache/recipe/2016/07/02/40c4f639ca973d9acccecdf7cbe0cbc41.jpg',
                },
                ingredients_tableId: 'ing_1738',
            },
            {
                id: 486,
                contents: {
                    name: '유산슬밥',
                    category: 'CHN',
                    img: 'https://www.sk5.co.kr/img_src/s600/a897/a8970355.jpg',
                },
                ingredients_tableId: 'ing_1739',
            },
            {
                id: 321,
                contents: {
                    name: '돈까스',
                    category: 'WES',
                    img: 'http://cdn.011st.com/11dims/resize/600x600/quality/75/11src/pd/20/1/4/9/3/1/8/yVdYI/2827149318_B.jpg',
                },
                ingredients_tableId: 'ing_1740',
            },
            {
                id: 333,
                contents: {
                    name: '해물파스타',
                    category: 'WES',
                    img: 'https://recipe1.ezmember.co.kr/cache/recipe/2015/06/08/f368e4342174431947ba86ea4ec0fe28.jpg',
                },
                ingredients_tableId: 'ing_1741'
            },
            {
                id: 4238,
                contents: {
                    name: '햄버그스테이크',
                    category: 'WES',
                    img: 'http://image.gsshop.com/image/55/31/55314791_L1.jpg',
                },
                ingredients_tableId: 'ing_1742',
            },
        ]
    }
    idNum = 4239
    idQueue = [2966, 2967]
    newIdAssigner() {
        // this returns only the number
        // the full id name is composed below in handler
        if (this.idQueue.length) return this.idQueue.shift()
        return this.idNum++
    }

    createNewRecipe = cb => {
        this.ingredients.createNewRecipe((err, res) => {
            if (err) throw new Error(err)
            cb(null, res)
        })
    }

    findListByCategory = (category, cb) => {
        let ret = this.table.filter(e => e.contents.category == category)
        cb(null, ret);
    }

    // takes ID, then returns recipeDto.
    findDetailById = (id, cb) => {
        for (let e of this.table) {
            if (e.id == id) {
                let ret = {}
                ret.id = id
                ret.contents = e.contents
                this.ingredients.findDetailById(e.ingredients_tableId, (err, result) => {
                    ret.ingredients = result
                    cb(null, ret)
                })
                // cb(null, ret)
                // break;
            }
        }
    }

    // used for CREATE and UPDATE.
    // if success, return true. 
    // returns false otherwise.
    handleRecipeFromFront = (recipeDto, cb) => {
        let error = null;
        if (!recipeDto.id) {
            let ret = {}
            ret.id = this.newIdAssigner()
            ret.contents = recipeDto.contents
            this.ingredients.handleIngredientsFromFront(recipeDto.ingredients, (err, newId) => {
                if (err) error = err;
                ret.ingredients_tableId = newId
                this.table.push(ret)
            })
        } else {
            for (let i in this.table) {
                if (this.table[i].id == recipeDto.id) {
                    this.table[i].contents = recipeDto.contents
                    this.ingredients.handleIngredientsFromFront(recipeDto.ingredients, (err, id) => {
                        if (err) error = err;
                        // break;
                    })
                }
            }
        }
        if (!error) cb(error, true)
        else cb(error, false)
    }

    deleteById = (id, cb) => {
        let error = null
        this.table = this.table.filter(e => {
            if (e.id == id) {
                this.ingredients.deleteById(e.ingredients_tableId, (err, result) => {
                    if (err) error = err;
                    if (!result) throw new Error("부재료 삭제 실패");
                    return false;
                })
            } else return true;
        })
        this.idQueue.push(id)
        cb(error, true)
    }
}
