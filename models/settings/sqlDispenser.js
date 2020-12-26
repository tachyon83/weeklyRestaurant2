const dbSetting = require('./dbConnectionSettings')

// '%' vs 'localhost'

let sql_createUser =
    `create user if not exists ${dbSetting.user}@'%' 
    identified by '${dbSetting.password}';`;
let sql_grantPrivileges =
    `grant all privileges on ${dbSetting.database}.* 
    to '${dbSetting.user}'@'%' with grant option;`;
let sql_flush =
    `flush privileges;`;
let sql_alterUser =
    `alter user ${dbSetting.user} 
    identified with mysql_native_password 
    by '${dbSetting.password}';`;
let sqls1 = sql_createUser + sql_grantPrivileges + sql_flush + sql_alterUser;

let sql_createDB =
    `create database if not exists ${dbSetting.database};`;

let sql_createTable_member =
    `create table if not exists 
    ${dbSetting.table_member}(
        id int not null auto_increment, 
        username varchar(50) not null unique,
        password varchar(200) not null,
        servings int not null,
        primary key(id)
    );`

let sql_createTable_semester =
    `create table if not exists
    ${dbSetting.table_semester}(
        id int not null auto_increment,
        userid int not null,
        year int not null,
        season int not null,
        primary key(id),
        foreign key(userid)
        references ${dbSetting.table_user}(id)
        on update cascade
        on delete cascade
    );`

let sql_createTable_course =
    `create table if not exists
    ${dbSetting.table_course}(
        id int not null auto_increment,
        semesterid int not null,
        name varchar(30) not null,
        units decimal(5,2),
        grade varchar(5),
        include tinyint(1),
        primary key(id),
        foreign key(semesterid)
        references ${dbSetting.table_semester}(id)
        on update cascade
        on delete cascade
    );`

let sqls2 = sql_createTable_member

let sql_register =
    `insert into ${dbSetting.table_member}
    (username,password,servings) 
    values(?,?,?);`

let sql_getMemberByUsername =
    `select username,password 
    from ${dbSetting.table_member} 
    where username=?;`

module.exports = {
    initialSetup: sqls1,
    newDB: sql_createDB,
    createDummy: sqls2,

    sql_register,
    sql_getMemberByUsername,

}