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

// isAdmin int not null,
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
        style varchar(5) not null,
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
        쌀 decimal(5,2),
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
        쌀 varchar(5),
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

let sql_insert_meat3 =
    `insert into ${dbSetting.table_meat}(돼지고기) 
    values(1);`

let sql_insert_meat4 =
    `insert into ${dbSetting.table_meat}(소고기) 
    values(1);`

let sql_insert_meat5 =
    `insert into ${dbSetting.table_meat}(순대) 
    values(4);`

let sql_insert_meat6 =
    `insert into ${dbSetting.table_meat}(돼지고기) 
    values(0.2);`

let sql_insert_meat7 =
    `insert into ${dbSetting.table_meat}(돼지고기) 
    values(0.6);`

let sql_insert_meat8 =
    `insert into ${dbSetting.table_meat}(소고기,돼지고기) 
    values(0.3,0.3);`

let sql_insert_fish1 =
    `insert into ${dbSetting.table_fish}(멸치) 
    values(30);`

let sql_insert_fish2 =
    `insert into ${dbSetting.table_fish}(새우,조개,오징어) 
    values(10,80,20);`

let sql_insert_fish3 =
    `insert into ${dbSetting.table_fish}(새우,조개,오징어) 
    values(3,200,0.5);`

let sql_insert_misc1 =
    `insert into ${dbSetting.table_misc}(감자,양파,당근,버섯,대파,마늘,면,국수,청양고추) 
    values (2, 0.5, 0.3, 0.5, 1, 0, 0, 0, 2);`

let sql_insert_misc2 =
    `insert into ${dbSetting.table_misc}(양파,국수,애호박,참깨,김,우유) 
    values(0.5,1,0.5,1,1,0.5);`

let sql_insert_misc3 =
    `insert into ${dbSetting.table_misc}(양파,대파,쌀,두부) 
    values(1,1,300,1);`

let sql_insert_misc4 =
    `insert into ${dbSetting.table_misc}(양파,마늘,면,청양고추,애호박) 
    values(0.6,5,2,1,1);`

let sql_insert_misc5 =
    `insert into ${dbSetting.table_misc}(당근,고추,참깨,쌀) 
    values(0.3,1,1,350);`

let sql_insert_misc6 =
    `insert into ${dbSetting.table_misc}(양파,국수,애호박,참깨,김,우유) 
    values(0.7,1,0.5,1,1,0.5);`

let sql_insert_misc7 =
    `insert into ${dbSetting.table_misc}(대파,청양고추) 
    values(1,2);`

let sql_insert_misc8 =
    `insert into ${dbSetting.table_misc}(양파,대파,면,양배추,오이) 
    values(1, 1.5, 2, 0.2, 0.3);`

let sql_insert_misc9 =
    `insert into ${dbSetting.table_misc}(양파,버섯,대파,참깨,쌀,죽순,파프리카,청경채) 
    values(0.5,2,1,10,200,1,1,4);`

let sql_insert_misc10 =
    `insert into ${dbSetting.table_misc}(양파, 마늘, 달걀, 빵가루, 우유) 
    values(1, 1, 3, 200, 950);`

let sql_insert_misc11 =
    `insert into ${dbSetting.table_misc}(양파,마늘,면) 
    values(1, 5, 1);`

let sql_insert_misc12 =
    `insert into ${dbSetting.table_misc}(양파,버섯,달걀,빵가루) 
    values(1,6,2,200);`

let sql_insert_sauce1 =
    `insert into ${dbSetting.table_sauce}(간장,고추장,고춧가루,설탕,소금,후추,식초,다진마늘) 
    values (1.5, 0, 1, 3, 0, 0, 0, 2);`

let sql_insert_sauce2 =
    `insert into ${dbSetting.table_sauce}(간장,고추장,고춧가루,설탕,소금,후추,식초,다진마늘) 
    values (1.5, 0, 1, 3, 0, 1, 0, 2);`

let sql_insert_sauce3 =
    `insert into ${dbSetting.table_sauce}(간장,소금) 
    values (10, 1.5);`

let sql_insert_sauce4 =
    `insert into ${dbSetting.table_sauce}(간장,고추장,고춧가루,다진마늘,참기름) 
    values (0.3, 0.5, 3, 2, 1);`

let sql_insert_sauce5 =
    `insert into ${dbSetting.table_sauce}(간장,고추장,설탕,소금,후추,식초,다진마늘,청주) 
    values (1, 1.5, 1, 0.3, 1, 1, 0.5, 2);`

let sql_insert_sauce6 =
    `insert into ${dbSetting.table_sauce}(간장,고춧가루,다진마늘,청주,참기름) 
    values (3, 0.5, 0.5, 1, 1);`

let sql_insert_sauce7 =
    `insert into ${dbSetting.table_sauce}(고춧가루,소금,후추,다진마늘,새우젓) 
    values (3, 0.5, 0.5, 1.5, 1.5);`

let sql_insert_sauce8 =
    `insert into ${dbSetting.table_sauce}(설탕,춘장) 
    values (0.2, 0.3);`

let sql_insert_sauce9 =
    `insert into ${dbSetting.table_sauce}(다진마늘,청주,참기름) 
    values (2, 2, 2);`

let sql_insert_sauce10 =
    `insert into ${dbSetting.table_sauce}(소금,후추) 
    values (0.5, 0.3);`

let sql_insert_sauce11 =
    `insert into ${dbSetting.table_sauce}(소금) 
    values (0.2);`

let sql_insert_sauce12 =
    `insert into ${dbSetting.table_sauce}(간장,설탕,소금,후추,다진마늘) 
    values (0.5, 0.5, 0.2, 0.2, 0.5);`




let sql_insert_ingredient1 = process.env.NODE_ENV === 'production' ?
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(1,null,1,1);`
    :
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(1,null,1,1);`

let sql_insert_ingredient2 = process.env.NODE_ENV === 'production' ?
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(null,1,11,21);`
    :
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(null,1,2,3);`

let sql_insert_ingredient3 = process.env.NODE_ENV === 'production' ?
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(31,null,21,31);`
    :
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(4,null,3,4);`

let sql_insert_ingredient4 = process.env.NODE_ENV === 'production' ?
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(1,null,31,41);`
    :
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(1,null,4,5);`

let sql_insert_ingredient5 = process.env.NODE_ENV === 'production' ?
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(31,null,41,51);`
    :
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(4,null,5,6);`

let sql_insert_ingredient6 = process.env.NODE_ENV === 'production' ?
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(41,null,61,61);`
    :
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(5,null,7,7);`

let sql_insert_ingredient7 = process.env.NODE_ENV === 'production' ?
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(51,null,71,71);`
    :
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(6,null,8,8);`

let sql_insert_ingredient8 = process.env.NODE_ENV === 'production' ?
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(null,11,81,81);`
    :
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(null,2,9,9);`

let sql_insert_ingredient9 = process.env.NODE_ENV === 'production' ?
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(61,null,91,91);`
    :
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(7,null,10,10);`

let sql_insert_ingredient10 = process.env.NODE_ENV === 'production' ?
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(null,21,101,101);`
    :
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(null,3,11,11);`

let sql_insert_ingredient11 = process.env.NODE_ENV === 'production' ?
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(71,null,111,111);`
    :
    `insert into ${dbSetting.table_ingredient}(meatId,fishId,miscId,sauceId) 
    values(8,null,12,12);`


// handled in dbSetup_local
// let sql_insert_member1=
//     `insert into ${dbSetting.table_member}
//     (username,password,servings) 
//     values('test','1234',200)`

let sql_createTable_week =
    `create table if not exists ${dbSetting.table_week}
    (
        id int not null auto_increment,
        year int not null,
        week int not null,
        day int not null,
        meal int not null,
        recipeId int,
        primary key(id),
        unique key(year,week,day,meal),
        foreign key(recipeId) 
        references ${dbSetting.table_recipe}(id) 
    );`

let sql_createTable_meat_inventory =
    `create table if not exists ${dbSetting.table_meat_inventory}
    (
        id int not null auto_increment,
        닭고기 int not null default 0,
        소고기 int not null default 0,
        돼지고기 int not null default 0,
        순대 int not null default 0,
        primary key(id)
    );`

let sql_createTable_fish_inventory =
    `create table if not exists ${dbSetting.table_fish_inventory}
    (
        id int not null auto_increment,
        멸치 int not null default 0,
        새우 int not null default 0,
        조개 int not null default 0,
        오징어 int not null default 0,
        primary key(id)
    );`

let sql_createTable_misc_inventory =
    `create table if not exists ${dbSetting.table_misc_inventory}
    (
        id int not null auto_increment,
        감자 int not null default 0,
        양파 int not null default 0,
        당근 int not null default 0,
        버섯 int not null default 0,
        대파 int not null default 0,
        마늘 int not null default 0,
        면 int not null default 0,
        국수 int not null default 0,
        청양고추 int not null default 0,
        고추 int not null default 0,
        애호박 int not null default 0,
        참깨 int not null default 0,
        김 int not null default 0,
        쌀 int not null default 0,
        콩나물 int not null default 0,
        두부 int not null default 0,
        달걀 int not null default 0,
        양배추 int not null default 0,
        오이 int not null default 0,
        죽순 int not null default 0,
        파프리카 int not null default 0,
        청경채 int not null default 0,
        빵가루 int not null default 0,
        우유 int not null default 0,
        primary key(id)
    );`

let sql_createTable_sauce_inventory =
    `create table if not exists ${dbSetting.table_sauce_inventory}
    (
        id int not null auto_increment,
        간장 int not null default 0,
        고추장 int not null default 0,
        고춧가루 int not null default 0,
        설탕 int not null default 0,
        소금 int not null default 0,
        후추 int not null default 0,
        식초 int not null default 0,
        다진마늘 int not null default 0,
        청주 int not null default 0,
        참기름 int not null default 0,
        새우젓 int not null default 0,
        춘장 int not null default 0,
        primary key(id)
    );`

let sql_createTable_inventory =
    `create table if not exists ${dbSetting.table_inventory}
    (
        id int not null auto_increment,
        memberId int not null unique,
        meat int not null,
        fish int not null,
        misc int not null,
        sauce int not null,
        primary key(id),
        foreign key(memberId) 
        references ${dbSetting.table_member}(id) 
        on update cascade 
        on delete cascade,
        foreign key(meat) 
        references ${dbSetting.table_meat_inventory}(id) 
        on update cascade 
        on delete cascade,
        foreign key(fish) 
        references ${dbSetting.table_fish_inventory}(id) 
        on update cascade 
        on delete cascade,
        foreign key(misc) 
        references ${dbSetting.table_misc_inventory}(id) 
        on update cascade 
        on delete cascade,
        foreign key(sauce) 
        references ${dbSetting.table_sauce_inventory}(id) 
        on update cascade 
        on delete cascade
    );`

let sql_insert_meat_inventory =
    `insert into ${dbSetting.table_meat_inventory} 
    values();`
let sql_insert_fish_inventory =
    `insert into ${dbSetting.table_fish_inventory} 
    values();`
let sql_insert_misc_inventory =
    `insert into ${dbSetting.table_misc_inventory} 
    values();`
let sql_insert_sauce_inventory =
    `insert into ${dbSetting.table_sauce_inventory} 
    values();`


let sqls2 = sql_createTable_member
    + sql_createTable_meat + sql_createTable_fish
    + sql_createTable_misc + sql_createTable_sauce
    + sql_createTable_meat_unit + sql_createTable_fish_unit
    + sql_createTable_misc_unit + sql_createTable_sauce_unit
    + sql_insert_meat_unit + sql_insert_fish_unit
    + sql_insert_misc_unit + sql_insert_sauce_unit
    + sql_createTable_ingredient
    + sql_createTable_recipe

    + sql_insert_meat1 + sql_insert_meat2
    + sql_insert_meat3 + sql_insert_meat4
    + sql_insert_meat5 + sql_insert_meat6
    + sql_insert_meat7 + sql_insert_meat8

    + sql_insert_fish1 + sql_insert_fish2 + sql_insert_fish3

    + sql_insert_misc1 + sql_insert_misc2
    + sql_insert_misc3 + sql_insert_misc4
    + sql_insert_misc5 + sql_insert_misc6
    + sql_insert_misc7 + sql_insert_misc8
    + sql_insert_misc9 + sql_insert_misc10
    + sql_insert_misc11 + sql_insert_misc12

    + sql_insert_sauce1 + sql_insert_sauce2
    + sql_insert_sauce3 + sql_insert_sauce4
    + sql_insert_sauce5 + sql_insert_sauce6
    + sql_insert_sauce7 + sql_insert_sauce8
    + sql_insert_sauce9 + sql_insert_sauce10
    + sql_insert_sauce11 + sql_insert_sauce12

    + sql_insert_ingredient1
    + sql_insert_ingredient2
    + sql_insert_ingredient3
    + sql_insert_ingredient4
    + sql_insert_ingredient5
    + sql_insert_ingredient6
    + sql_insert_ingredient7
    + sql_insert_ingredient8
    + sql_insert_ingredient9
    + sql_insert_ingredient10
    + sql_insert_ingredient11

    + sql_createTable_week
    + sql_createTable_meat_inventory
    + sql_createTable_fish_inventory
    + sql_createTable_misc_inventory
    + sql_createTable_sauce_inventory
    + sql_createTable_inventory
    + sql_insert_meat_inventory
    + sql_insert_fish_inventory
    + sql_insert_misc_inventory
    + sql_insert_sauce_inventory


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

let sql_getFromTable =
    `select * from ??;`

let sql_getColumnNames =
    `select column_name from information_schema.columns 
    where table_name=?;`

let sql_getIngredientsById =
    `select meatId,fishId,miscId,sauceId 
    from ${dbSetting.table_ingredient} 
    where id=?;`

let sql_getRecipeById =
    `select id,name,style,img from ${dbSetting.table_recipe} 
    where id=?;`

let sql_getIngIdByRecipeId =
    `select ingredientId from ${dbSetting.table_recipe} 
    where id=?;`

let sql_getRecipeByIds =
    `select id,name,style,img,ingredientId from ${dbSetting.table_recipe} 
    where id=? and memberId=?;`

let sql_getRecipeById2 =
    `select id,name,style,img,ingredientId from ${dbSetting.table_recipe} 
    where id=?;`

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

let sql_updateRecipe =
    `update ${dbSetting.table_recipe} 
    set name=?,style=?,img=?,ingredientId=? where id=?;`

let sql_deleteRecipe =
    `delete from ${dbSetting.table_recipe} 
    where id=?;`

let sql_getStyleList =
    `select id,name,img from ${dbSetting.table_recipe} 
    where style=? order by id asc;`

let sql_getMeal =
    `select id,recipeId from ${dbSetting.table_week} 
    where year=? and week=? and day=? and meal=?;`

let sql_getWeek =
    `select w.day, w.meal, r.id, r.name, r.style,r.img 
    from ${dbSetting.table_week} w left join ${dbSetting.table_recipe} r 
    on w.recipeId=r.id 
    where w.year=? and w.week=? order by w.day,w.meal;`

let sql_insertOrUpdateMeal =
    `insert into ${dbSetting.table_week}(year,week,day,meal,recipeId) 
    values(?,?,?,?,?) on duplicate key update recipeId=?;`

let sql_getInventoryByMemberId =
    `select meat,fish,misc,sauce from 
    ${dbSetting.table_inventory} 
    where memberId=?;`

let sql_getFromTableById =
    `select * from ?? 
    where id=?;`

let sql_insertInventoryColumn =
    `alter table ?? add column ?? int not null default 0;`

let sql_updateInventory =
    `update ?? set ??=? where id=?;`

let sql_getServings =
    `select servings from ${dbSetting.table_member} 
    where id=1;`



module.exports = {
    initialSetup: sqls1,
    newDB: sql_createDB,
    createDummy: sqls2,

    sql_insertMember,
    sql_getMemberByUsername,
    sql_getMemberByUserId,
    sql_getFromTable,
    sql_getColumnNames,
    sql_getIngredientsById,
    sql_getRecipeById,
    sql_getRecipeById2,
    sql_getIngIdByRecipeId,
    sql_getRecipeByIds,
    sql_getRecipeByName,
    sql_insertMaterialUnitColumn,
    sql_insertMaterialColumn,
    sql_insertMaterialUnit,
    sql_findIdByMaterials,
    sql_getIngredientIdUponInsertion,
    sql_insertRecipe,
    sql_updateRecipe,
    sql_deleteRecipe,
    sql_getStyleList,
    sql_getMeal,
    sql_getWeek,
    sql_insertOrUpdateMeal,
    sql_getInventoryByMemberId,
    sql_getFromTableById,
    sql_insertInventoryColumn,
    sql_updateInventory,
    sql_getServings,

}