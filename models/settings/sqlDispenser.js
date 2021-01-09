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

let sql_createTable_ingredient =
    `create table if not exists 
    ${dbSetting.table_ingredient}(
        id int not null auto_increment,
        meatId int,
        fishId int,
        miscId int,
        sauceId int,
        primary key(id),
        foreign key(meatId) 
        references ${dbSetting.table_meat}(id) 
        on update cascade 
        on delete cascade,
        foreign key(fishId) 
        references ${dbSetting.table_fish}(id) 
        on update cascade 
        on delete cascade,
        foreign key(miscId) 
        references ${dbSetting.table_misc}(id) 
        on update cascade 
        on delete cascade,
        foreign key(sauceId) 
        references ${dbSetting.table_sauce}(id) 
        on update cascade 
        on delete cascade
    );`

let sql_createTable_recipe =
    `create table if not exists 
    ${dbSetting.table_recipe}(
        id int not null auto_increment,
        name varchar(20) not null unique,
        style varchar(5),
        img varchar(400),
        memberId int not null,
        ingredientId int not null,
        primary key(id),
        unique key(name,memberId),
        foreign key(ingredientId) 
        references ${dbSetting.table_ingredient}(id),
        

        foreign key(memberId) 
        references ${dbSetting.table_member}(id) 
        on update cascade 
        on delete cascade
    );`

let sql_createTable_meat =
    `create table if not exists 
    ${dbSetting.table_meat}(
        id int not null auto_increment,
        name varchar(20),
        닭고기 decimal(5,2),
        소고기 decimal(5,2),
        돼지고기 decimal(5,2),
        순대 decimal(5,2),
        primary key(id)
    );`

let sql_createTable_fish =
    `create table if not exists 
    ${dbSetting.table_fish}(
        id int not null auto_increment,
        name varchar(20),
        멸치 decimal(5,2),
        새우 decimal(5,2),
        조개 decimal(5,2),
        오징어 decimal(5,2),
        primary key(id)
    );`

let sql_createTable_misc =
    `create table if not exists 
    ${dbSetting.table_misc}(
        id int not null auto_increment,
        name varchar(20),
        감자 decimal(5,2),
        양파 decimal(5,2),
        당근 decimal(5,2),
        버섯 decimal(5,2),
        대파 decimal(5,2),
        마늘 decimal(5,2),
        면 decimal(5,2),
        국수 decimal(5,2),
        청양고추 decimal(5,2),
        고추 decimal(5,2),
        애호박 decimal(5,2),
        참깨 decimal(5,2),
        김 decimal(5,2),
        밥 decimal(5,2),
        콩나물 decimal(5,2),
        두부 decimal(5,2),
        달걀 decimal(5,2),
        양배추 decimal(5,2),
        오이 decimal(5,2),
        죽순 decimal(5,2),
        파프리카 decimal(5,2),
        청경채 decimal(5,2),
        빵가루 decimal(5,2),
        우유 decimal(5,2),
        primary key(id)
    );`

let sql_createTable_sauce =
    `create table if not exists 
    ${dbSetting.table_sauce}(
        id int not null auto_increment,
        name varchar(20),
        간장 decimal(5,2),
        고추장 decimal(5,2),
        고춧가루 decimal(5,2),
        설탕 decimal(5,2),
        소금 decimal(5,2),
        후추 decimal(5,2),
        식초 decimal(5,2),
        다진마늘 decimal(5,2),
        청주 decimal(5,2),
        참기름 decimal(5,2),
        새우젓 decimal(5,2),
        춘장 decimal(5,2),
        primary key(id)
    );`

let sql_createTable_meat_unit =
    `create table if not exists 
    ${dbSetting.table_meat_unit}(
        닭고기 varchar(5),
        소고기 varchar(5),
        돼지고기 varchar(5),
        순대 varchar(5)
    );`

let sql_createTable_fish_unit =
    `create table if not exists 
    ${dbSetting.table_fish_unit}(
        멸치 varchar(5),
        새우 varchar(5),
        조개 varchar(5),
        오징어 varchar(5)
    );`

let sql_createTable_misc_unit =
    `create table if not exists 
    ${dbSetting.table_misc_unit}(
        감자 varchar(5),
        양파 varchar(5),
        당근 varchar(5),
        버섯 varchar(5),
        대파 varchar(5),
        마늘 varchar(5),
        면 varchar(5),
        국수 varchar(5),
        청양고추 varchar(5),
        고추 varchar(5),
        애호박 varchar(5),
        참깨 varchar(5),
        김 varchar(5),
        밥 varchar(5),
        콩나물 varchar(5),
        두부 varchar(5),
        달걀 varchar(5),
        양배추 varchar(5),
        오이 varchar(5),
        죽순 varchar(5),
        파프리카 varchar(5),
        청경채 varchar(5),
        빵가루 varchar(5),
        우유 varchar(5)
    );`

let sql_createTable_sauce_unit =
    `create table if not exists 
    ${dbSetting.table_sauce_unit}(
        간장 varchar(5),
        고추장 varchar(5),
        고춧가루 varchar(5),
        설탕 varchar(5),
        소금 varchar(5),
        후추 varchar(5),
        식초 varchar(5),
        다진마늘 varchar(5),
        청주 varchar(5),
        참기름 varchar(5),
        새우젓 varchar(5),
        춘장 varchar(5)
    );`

let sql_insert_meat_unit =
    `insert into ${dbSetting.table_meat_unit} 
    values ('마리','kg','kg','컵');`

let sql_insert_fish_unit =
    `insert into ${dbSetting.table_fish_unit} 
    values ('마리','마리','g','마리');`

let sql_insert_misc_unit =
    `insert into ${dbSetting.table_misc_unit} 
    values('개','개','개','개','단','개','인분','인분','개','개','개',
    'g','g','g','g','g','개','개','개','뿌리','개','개','g','ml');`

let sql_insert_sauce_unit =
    `insert into ${dbSetting.table_sauce_unit} 
    values('스푼','스푼','스푼','스푼','스푼','스푼','스푼','스푼',
    '스푼','스푼','스푼','컵');`



// dummy data insertion

let sql_insert_meat1 =
    `insert into ${dbSetting.table_meat}(닭고기) 
    values (1);`

let sql_insert_meat2 =
    `insert into ${dbSetting.table_meat}(닭고기) 
    values(1.5);`

let sql_insert_misc1 =
    `insert into ${dbSetting.table_misc}(감자,양파,당근,버섯,대파,마늘,면,국수,청양고추) 
    values (2, 0.5, 0.3, 0.5, 1, 0, 0, 0, 2);`

let sql_insert_sauce1 =
    `insert into ${dbSetting.table_sauce}(간장,고추장,고춧가루,설탕,소금,후추,식초,다진마늘) 
    values (1.5, 0, 1, 3, 0, 0, 0, 2);`

let sql_insert_ingredient1 =
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(1,null,1,1);`

// handled in dbSetup_local
// let sql_insert_member1=
//     `insert into ${dbSetting.table_member}
//     (username,password,servings) 
//     values('test','1234',200)`

// let sql_insert_recipe1 =
//     `insert into ${dbSetting.table_recipe}(name,style,img,memberId,ingredientId) 
//     values ('닭볶음탕','kor','https',1,1);`


let sqls2 = sql_createTable_member + sql_createTable_meat
    + sql_createTable_fish + sql_createTable_misc
    + sql_createTable_sauce + sql_createTable_meat_unit
    + sql_createTable_fish_unit + sql_createTable_misc_unit
    + sql_createTable_sauce_unit + sql_insert_meat_unit
    + sql_insert_fish_unit + sql_insert_misc_unit
    + sql_insert_sauce_unit + sql_createTable_ingredient
    + sql_createTable_recipe + sql_insert_meat1
    + sql_insert_meat2 + sql_insert_misc1
    + sql_insert_sauce1 + sql_insert_ingredient1
// + sql_insert_recipe1


let sql_insertMember =
    `insert into ${dbSetting.table_member}
    (username,password,servings) 
    values(?,?,?);`

let sql_getMemberByUsername =
    `select id,username,password 
    from ${dbSetting.table_member} 
    where username=?;`

let sql_getMemberByUserId =
    `select id,username,password 
    from ${dbSetting.table_member} 
    where id=?;`

let sql_getUnit =
    `select * from ??;`

let sql_getSubIngredientById =
    `select * from ?? where id=?;`

let sql_getColumnNames =
    `select column_name from information_schema.columns 
    where table_name=?;`

let sql_getIngredientsById =
    `select meatId,fishId,miscId,sauceId 
    from ${dbSetting.table_ingredient} 
    where id=?;`

let sql_getRecipeByIds =
    `select id,name,style,img,ingredientId from ${dbSetting.table_recipe} 
    where id=? and memberId=?;`

let sql_getRecipeByName =
    `select id,name,style,img from 
    ${dbSetting.table_recipe} where name=? and memberid=?;`

let sql_insertMaterialUnitColumn =
    `alter table ?? add column ?? varchar(5);`

let sql_insertMaterialColumn =
    `alter table ?? add column ?? decimal(5,2);`

let sql_insertMaterialUnit =
    `update ?? set ??=?;`

let sql_findIdByMaterials =
    `select id from ?? 
    where ?;`

let sql_insertSubIngredientIds =
    `insert into ${dbSetting.table_ingredient}
    (meatId,fishId,miscId,sauceId) values(?,?,?,?);`

let sql_selectLastInsertId =
    `select last_insert_id() as id;`

let sql_getIngredientIdUponInsertion = sql_insertSubIngredientIds + sql_selectLastInsertId

let sql_insertRecipe =
    `insert into ${dbSetting.table_recipe}
    (name,style,img,memberId,ingredientId) 
    values(?,?,?,?,?);`




module.exports = {
    initialSetup: sqls1,
    newDB: sql_createDB,
    createDummy: sqls2,

    sql_insertMember,
    sql_getMemberByUsername,
    sql_getMemberByUserId,
    sql_getUnit,
    sql_getSubIngredientById,
    sql_getColumnNames,
    sql_getIngredientsById,
    sql_getRecipeByIds,
    sql_getRecipeByName,
    sql_insertMaterialUnitColumn,
    sql_insertMaterialColumn,
    sql_insertMaterialUnit,
    sql_findIdByMaterials,
    sql_getIngredientIdUponInsertion,
    sql_insertRecipe,


}