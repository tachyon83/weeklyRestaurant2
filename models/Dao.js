const mysql = require('mysql');
const db = require('./dbPoolCreator')
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

    customSqlHandler = async (sql, opt = null) => {
        const dbPool = await db.getPool()

        return new Promise(async (resolve, reject) => {
            dbPool.getConnection((err, conn) => {
                if (err) {
                    console.log('err in getconn', err)
                    if (conn) conn.release();
                    return reject(err)
                }
                conn.query(sql, (err, rows, fields) => {
                    conn.release();
                    if (err) {
                        // console.log('err in query', err)
                        return reject(err)
                    }
                    // console.log('db process result', rows)
                    console.log('[DAO]: Query processed. resolving rows...')
                    if (opt) resolve(rows[0])
                    else resolve(rows)
                })
            })
        })
    }

    sqlHandler = async (sql, q, opt = null) => {
        if (q === false) {
            console.log('[DAO]: FALSE q, resolving false')
            return Promise.resolve(false)
        }
        const dbPool = await db.getPool()

        return new Promise(async (resolve, reject) => {
            if (q) sql = mysql.format(sql, q)
            dbPool.getConnection((err, conn) => {
                if (err) {
                    console.log('err in getconn', err)
                    if (conn) conn.release();
                    return reject(err)
                }
                conn.query(sql, (err, rows, fields) => {
                    conn.release();
                    if (err) {
                        // console.log('err in query', err)
                        return reject(err)
                    }
                    // console.log('db process result', rows)
                    console.log('[DAO]: Query processed. resolving rows...')
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

    register = q => {
        let info = [
            q.username,
            q.password,
            q.servings,
        ]
        return this.sqlHandler(sqls.sql_register, info)
    }
    getMemberByUsername = username => {
        return this.sqlHandler(sqls.sql_getMemberByUsername, username, 1)
    }
    getMemberByUserId = id => {
        return this.sqlHandler(sqls.sql_getMemberByUserId, id, 1)
    }
    getRecipeByIds = (id, memberId) => {
        let info = [
            id, memberId
        ]
        return this.sqlHandler(sqls.sql_getRecipeByIds, info, 1)
    }
    getIngredientById = id => {
        return this.sqlHandler(sqls.sql_getIngredientById, id, 1)
    }

    getMaterialById = (tableName, id) => {
        let info = [
            tableName, id
        ]
        return this.sqlHandler(sqls.sql_getMaterialById, info, 1)
    }
    getUnit = unitTableName => {
        return this.sqlHandler(sqls.sql_getUnit, unitTableName, 1)
    }
    getColumnNames = unitTableName => {
        return this.sqlHandler(sqls.sql_getColumnNames, unitTableName)
    }

    getRecipeByName = (name, memberId) => {
        let info = [
            name, memberId
        ]
        return this.sqlHandler(sqls.sql_getRecipeByName, info, 1)
    }

    addNewMaterial = (tableName, columnName) => {
        let info = [
            tableName, columnName
        ]
        return this.sqlHandler(sqls.sql_addNewMaterial, info)
    }

    insertUnit = (tableName, columnName, unit) => {
        let info = [
            tableName, columnName, unit
        ]
        return this.sqlHandler(sqls.sql_insertUnit, info)
    }

}

module.exports = new Dao()