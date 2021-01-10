const mysql = require('mysql');
const dbSetting = require('./models/settings/dbConnectionSettings')
const sqls = require('./models/settings/sqlDispenser')
const encode = require('./utils/encode')

let rootSettingObj = {
    host: dbSetting.host,
    port: dbSetting.port,
    user: dbSetting.yourLocalMySQLUsername,
    password: dbSetting.yourLocalMySQLPassword,
    multipleStatements: true,
}
let settingObj = {
    host: dbSetting.host,
    port: dbSetting.port,
    user: dbSetting.user,
    password: dbSetting.password,
    multipleStatements: true,
}

let testMember = [
    'test',
    process.env.dummyId_password || 'abcd1234',
    200,
]

const sql_addMember =
    `insert into ${dbSetting.table_member}
    (username,password,servings) 
    values(?,?,?);`

const sql_addRecipe =
    `insert into ${dbSetting.table_recipe}
    (name,style,img,memberId,ingredientId) 
    values ('닭볶음탕','KOR','https',1,1);`


function db_initSetting() {
    return new Promise((resolve, reject) => {
        const conn_init1 = mysql.createConnection(rootSettingObj)
        conn_init1.connect();
        conn_init1.query(sqls.initialSetup, (err) => {
            conn_init1.destroy();
            if (err) reject(err);
            const conn_init2 = mysql.createConnection(settingObj)
            conn_init2.connect()
            conn_init2.query(sqls.newDB, (err) => {
                conn_init2.destroy();
                if (err) reject(err);
                settingObj.database = dbSetting.database
                const conn_init3 = mysql.createConnection(settingObj)
                conn_init3.connect()
                conn_init3.query(sqls.createDummy, err => {
                    if (err) {
                        conn_init3.destroy()
                        reject(err)
                    }
                    encode(testMember[1])
                        .then(hash => {
                            testMember[1] = hash
                            conn_init3.query(sql_addMember, testMember, err => {
                                if (err) {
                                    conn_init3.destroy();
                                    reject(err);
                                }
                                conn_init3.query(sql_addRecipe, err => {
                                    conn_init3.destroy()
                                    if (err) reject(err)
                                    resolve()
                                })
                            })
                        })
                        .catch(err => reject(err))
                })
            })
        })
    })
}

async function dbSetup() {
    await db_initSetting().then(
        console.log('DB setup complete!')
    ).catch(err => console.log(err))
}
dbSetup()
