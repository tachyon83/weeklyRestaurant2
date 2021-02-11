const mysql = require('mysql');
const db = require('./dbPoolCreator');
const sqls = require('./settings/sqlDispenser')

class Dao {
    // everytime dao is accessed,
    // dbPool is obtained in sqlHandler, not here.
    // constructor() {
    //     this.dbPool = await db.getPool()
    //     console.log('dbPool is created')
    // }

    // arrow function is needed to have an access to this.dbpool
    // because in class, written in 'strict mode'

    sqlHandler = async (sql, q, opt = null) => {
        if (q === false) {
            console.log('[DAO]: FALSE q, resolving false')
            console.log()
            return Promise.resolve(false)
        }
        const dbPool = await db.getPool()

        return new Promise(async (resolve, reject) => {
            if (q) sql = mysql.format(sql, q)
            dbPool.getConnection((err, conn) => {
                if (err) {
                    console.log('err in getconn', err)
                    console.log()
                    if (conn) conn.release();
                    return reject(err)
                }
                conn.query(sql, (err, rows, fields) => {
                    conn.release();
                    if (err) {
                        // console.log('err in query', err)
                        return reject(err)
                    }
                    console.log('[DAO]: SQL=', sql)
                    console.log('[DAO]: Query processed. resolving rows...')
                    // console.log('db process result', rows)
                    console.log()
                    if (opt) resolve(rows[0])
                    else resolve(rows)
                })
            })

            // below is NOT possible
            // seems that getConnection() does not behave like promise
            // const conn = await dbPool.getConnection().catch(err => {
            //     if (conn) conn.release()
            //     return reject(err)
            // })
            // const rows = await conn.query(sql).catch(err => {
            //     if (conn) conn.release()
            //     return reject(err)
            // })
            // conn.release()
            // if (opt) resolve(rows[0])
            // else resolve(rows)
        })
    }

    insertMember = q => {
        let info = [
            q.username,
            q.password,
            q.servings,
        ]
        return this.sqlHandler(sqls.sql_insertMember, info)
    }
    getMemberByUsername = username => this.sqlHandler(sqls.sql_getMemberByUsername, username, 1)

    getMemberByUserId = id => this.sqlHandler(sqls.sql_getMemberByUserId, id, 1)

    getRecipeById = id => {
        if (!id) return Promise.resolve(null)
        return this.sqlHandler(sqls.sql_getRecipeById, id, 1)
    }
    getRecipeById2 = id => this.sqlHandler(sqls.sql_getRecipeById2, id, 1)

    getIngIdByRecipeId = id => this.sqlHandler(sqls.sql_getIngIdByRecipeId, id, 1)

    getRecipeByIds = (id, memberId) => {
        let info = [
            id, memberId
        ]
        return this.sqlHandler(sqls.sql_getRecipeByIds, info, 1)
    }
    getIngredientsById = id => this.sqlHandler(sqls.sql_getIngredientsById, id, 1)

    getFromTable = unitTableName => this.sqlHandler(sqls.sql_getFromTable, unitTableName, 1)

    getColumnNames = unitTableName => this.sqlHandler(sqls.sql_getColumnNames, unitTableName)

    getRecipeByName = (name, memberId) => {
        let info = [
            name, memberId
        ]
        return this.sqlHandler(sqls.sql_getRecipeByName, info, 1)
    }

    insertMaterialUnitColumn = (tableName, columnName) => {
        let info = [
            tableName, columnName
        ]
        return this.sqlHandler(sqls.sql_insertMaterialUnitColumn, info)
    }

    insertMaterialColumn = (tableName, columnName) => {
        let info = [
            tableName, columnName
        ]
        return this.sqlHandler(sqls.sql_insertMaterialColumn, info)
    }

    insertMaterialUnit = (tableName, columnName, unit) => {
        let info = [
            tableName, columnName, unit
        ]
        return this.sqlHandler(sqls.sql_insertMaterialUnit, info)
    }

    findIdByMaterials = (tableName, condition) => {
        let info = [
            tableName, condition
        ]
        return this.sqlHandler(sqls.sql_findIdByMaterials, info, 1)
    }

    getIngredientIdUponInsertion = q => this.sqlHandler(sqls.sql_getIngredientIdUponInsertion, q)

    insertRecipe = (name, style, img, memberId, ingId) => {
        let info = [
            name, style, img, memberId, ingId
        ]
        return this.sqlHandler(sqls.sql_insertRecipe, info)
    }

    updateRecipe = (name, style, img, ingredientId, id) => {
        let info = [
            name, style, img, ingredientId, id
        ]
        return this.sqlHandler(sqls.sql_updateRecipe, info)
    }

    deleteRecipe = id => this.sqlHandler(sqls.sql_deleteRecipe, id)

    getStyleList = style => this.sqlHandler(sqls.sql_getStyleList, style)

    getDay = id => this.sqlHandler(sqls.sql_getDay, id, 1)

    getWeek = q => this.sqlHandler(sqls.sql_getWeek, q)

    getInventoryByMemberId = id => this.sqlHandler(sqls.sql_getInventoryByMemberId, id, 1)

    getFromTableById = (tableName, id) => {
        let info = [
            tableName, id
        ]
        return this.sqlHandler(sqls.sql_getFromTableById, info, 1)
    }

    inserInventoryColumn = (tableName, colName) => {
        let info = [
            tableName, colName
        ]
        return this.sqlHandler(sqls.sql_insertInventoryColumn, info)
    }

    updateInventory = (tableName, name, amount, id) => {
        let info = [
            tableName, name, amount, id
        ]
        return this.sqlHandler(sqls.sql_updateInventory, info)
    }

    getServings = () => this.sqlHandler(sqls.sql_getServings, null, 1)

    insertOrUpdateMeal = body => {
        let info = [
            body.year, body.week, body.day, body.meal, body.recipeId, body.recipeId
        ]
        return this.sqlHandler(sqls.sql_insertOrUpdateMeal, info)
    }
}

module.exports = new Dao()