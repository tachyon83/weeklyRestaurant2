const mysql = require('mysql');
const db = require('./dbPoolCreator')
const sqls = require('./settings/sqlDispenser')

class Dao {
    // constructor() {
    //     this.dbPool = await db.getPool()
    //     console.log('dbPool is created')
    // }

    // arrow function is needed to have an access to this.dbpool
    // because in class, written in 'strict mode'

    sqlHandler = async (sql, q, opt = null) => {
        if (q === false) return Promise.resolve(false)
        const dbPool = await db.getPool()
        // console.log('dbPool', dbPool)

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
                        console.log('err in query', err)
                        return reject(err)
                    }
                    // console.log('db process result', rows)
                    if (opt) resolve(rows[0])
                    else resolve(rows)
                })
            })

            // below is not possible
            // seems that getConnection() does not behave like promise?
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

}

module.exports = new Dao()