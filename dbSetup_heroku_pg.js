const { Client } = require("pg");
const dbSetting = require("./models/settings/dbConnectionSettings");
const sqls = require("./models/settings/sqlDispenser");
const encode = require("./utils/encode");

let settingObj = {
  host: dbSetting.host,
  port: dbSetting.port,
  user: dbSetting.user,
  password: dbSetting.password,
  database: dbSetting.database,
  multipleStatements: true,
  ssl: {
    rejectUnauthorized: false,
  },
};

console.log(15, settingObj);

let testMember = [
  process.env.DUMMY_USERNAME || "test",
  process.env.DUMMY_PASSWORD || "abcd1234",
  200,
];

const sql_addMember = `insert into ${dbSetting.table_member}
    (username,password,servings) 
    values(?,?,?);`;

const sql_insertRecipe1 = `insert into ${dbSetting.table_recipe}
    (name,style,img,memberId,ingredientId) 
    values ('닭볶음탕','KOR',
    'https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/26152/pad_thumb_ch15.jpg',
    1,1);`;

const sql_insertRecipe2 = `insert into ${dbSetting.table_recipe}
    (name,style,img,memberId,ingredientId) 
    values ('멸치국수','KOR',
    'https://cdn.pixabay.com/photo/2015/04/06/16/32/if-709614__340.jpg',
    1,11);`;

const sql_insertRecipe3 = `insert into ${dbSetting.table_recipe}
    (name,style,img,memberId,ingredientId) 
    values ('마파두부','CHN',
    'https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/1168/pad_thumb_m.png&convert=jpgmin&rt=600',
    1,21);`;

const sql_insertRecipe4 = `insert into ${dbSetting.table_recipe}
    (name,style,img,memberId,ingredientId) 
    values ('닭칼국수','KOR',
    'https://imagescdn.gettyimagesbank.com/500/201708/a10968180.jpg',
    1,31);`;

const sql_insertRecipe5 = `insert into ${dbSetting.table_recipe}
    (name,style,img,memberId,ingredientId) 
    values ('소고기콩나물비빔밥','KOR',
    'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F143948354FB8FDF6296B73',
    1,41);`;

const sql_insertRecipe6 = `insert into ${dbSetting.table_recipe}
    (name,style,img,memberId,ingredientId) 
    values ('순대국밥','KOR',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyOmrqbHnyUqJfVUMxY6l_my0eyw_twRPGEw&usqp=CAU',
    1,51);`;

const sql_insertRecipe7 = `insert into ${dbSetting.table_recipe}
    (name,style,img,memberId,ingredientId) 
    values ('짜장면','CHN',
    'https://recipe1.ezmember.co.kr/cache/recipe/2016/07/02/40c4f639ca973d9acccecdf7cbe0cbc41.jpg',
    1,61);`;

const sql_insertRecipe8 = `insert into ${dbSetting.table_recipe}
    (name,style,img,memberId,ingredientId) 
    values ('유산슬밥','CHN',
    'https://www.sk5.co.kr/img_src/s600/a897/a8970355.jpg',
    1,71);`;

const sql_insertRecipe9 = `insert into ${dbSetting.table_recipe}
    (name,style,img,memberId,ingredientId) 
    values ('돈까스','WES',
    'http://cdn.011st.com/11dims/resize/600x600/quality/75/11src/pd/20/1/4/9/3/1/8/yVdYI/2827149318_B.jpg',
    1,81);`;

const sql_insertRecipe10 = `insert into ${dbSetting.table_recipe}
    (name,style,img,memberId,ingredientId) 
    values ('해물파스타','WES',
    'https://recipe1.ezmember.co.kr/cache/recipe/2015/06/08/f368e4342174431947ba86ea4ec0fe28.jpg',
    1,91);`;

const sql_insertRecipe11 = `insert into ${dbSetting.table_recipe}
    (name,style,img,memberId,ingredientId) 
    values ('햄버그스테이크','WES',
    'http://image.gsshop.com/image/55/31/55314791_L1.jpg',
    1,101);`;

const sql_insertInventory = `insert into ${dbSetting.table_inventory}
    (memberId,meat,fish,misc,sauce) values(1,1,1,1,1);`;

let additionalSqls =
  sql_insertRecipe1 +
  sql_insertRecipe2 +
  sql_insertRecipe3 +
  sql_insertRecipe4 +
  sql_insertRecipe5 +
  sql_insertRecipe6 +
  sql_insertRecipe7 +
  sql_insertRecipe8 +
  sql_insertRecipe9 +
  sql_insertRecipe10 +
  sql_insertRecipe11 +
  sql_insertInventory;

async function runSQL(sqlStatement) {
  try {
    const conn = new Client(settingObj);
    await conn.connect();
    await conn.query(sqlStatement);
    await conn.end();
  } catch (error) {
    console.error("Error executing SQL statement:", sqlStatement);
    console.error(error);
  }
}

// runSQL(sqls.sql_createTable_member);
// runSQL(sqls.sql_createTable_meat);
// runSQL(sqls.sql_createTable_meat)
//   .then(() => runSQL(sqls.sql_createTable_fish))
//   .then(() => runSQL(sqls.sql_createTable_misc))
//   .then(() => runSQL(sqls.sql_createTable_sauce))
//   .then(() => runSQL(sqls.sql_createTable_meat_unit))
//   .then(() => runSQL(sqls.sql_createTable_fish_unit))
//   .then(() => runSQL(sqls.sql_createTable_misc_unit))
//   .then(() => runSQL(sqls.sql_createTable_sauce_unit));
// runSQL(sqls.sql_insert_meat_unit)
//   .then(() => runSQL(sqls.sql_insert_fish_unit))
//   .then(() => runSQL(sqls.sql_insert_misc_unit))
//   .then(() => runSQL(sqls.sql_insert_sauce_unit));
// runSQL(sqls.sql_createTable_ingredient)
//   .then(() => runSQL(sqls.sql_createTable_recipe))
//   .then(() => runSQL(sqls.sql_insert_meat1))
//   .then(() => runSQL(sqls.sql_insert_meat2))
//   .then(() => runSQL(sqls.sql_insert_meat3))
//   .then(() => runSQL(sqls.sql_insert_meat4))
//   .then(() => runSQL(sqls.sql_insert_meat5))
//   .then(() => runSQL(sqls.sql_insert_meat6))
//   .then(() => runSQL(sqls.sql_insert_meat7))
//   .then(() => runSQL(sqls.sql_insert_meat8));
// runSQL(sqls.sql_insert_fish1)
//   .then(() => runSQL(sqls.sql_insert_fish2))
//   .then(() => runSQL(sqls.sql_insert_fish3))
//   .then(() => runSQL(sqls.sql_insert_misc1))
//   .then(() => runSQL(sqls.sql_insert_misc2))
//   .then(() => runSQL(sqls.sql_insert_misc3))
//   .then(() => runSQL(sqls.sql_insert_misc4))
//   .then(() => runSQL(sqls.sql_insert_misc5))
//   .then(() => runSQL(sqls.sql_insert_misc6))
//   .then(() => runSQL(sqls.sql_insert_misc7))
//   .then(() => runSQL(sqls.sql_insert_misc8))
//   .then(() => runSQL(sqls.sql_insert_misc9))
//   .then(() => runSQL(sqls.sql_insert_misc10))
//   .then(() => runSQL(sqls.sql_insert_misc11))
//   .then(() => runSQL(sqls.sql_insert_misc12))
//   .then(() => runSQL(sqls.sql_insert_sauce1))
//   .then(() => runSQL(sqls.sql_insert_sauce2))
//   .then(() => runSQL(sqls.sql_insert_sauce3))
//   .then(() => runSQL(sqls.sql_insert_sauce4))
//   .then(() => runSQL(sqls.sql_insert_sauce5))
//   .then(() => runSQL(sqls.sql_insert_sauce6))
//   .then(() => runSQL(sqls.sql_insert_sauce7))
//   .then(() => runSQL(sqls.sql_insert_sauce8))
//   .then(() => runSQL(sqls.sql_insert_sauce9))
//   .then(() => runSQL(sqls.sql_insert_sauce10))
//   .then(() => runSQL(sqls.sql_insert_sauce11))
//   .then(() => runSQL(sqls.sql_insert_sauce12))
//   .then(() => runSQL(sqls.sql_insert_ingredient1))
//   .then(() => runSQL(sqls.sql_insert_ingredient2))
//   .then(() => runSQL(sqls.sql_insert_ingredient3))
//   .then(() => runSQL(sqls.sql_insert_ingredient4))
//   .then(() => runSQL(sqls.sql_insert_ingredient5))
//   .then(() => runSQL(sqls.sql_insert_ingredient6))
//   .then(() => runSQL(sqls.sql_insert_ingredient7))
//   .then(() => runSQL(sqls.sql_insert_ingredient8))
//   .then(() => runSQL(sqls.sql_insert_ingredient9))
//   .then(() => runSQL(sqls.sql_insert_ingredient10))
// .then(() => runSQL(sqls.sql_insert_ingredient11));
// runSQL(sqls.sql_createTable_week)
//   .then(() => runSQL(sqls.sql_createTable_meat_inventory))
//   .then(() => runSQL(sqls.sql_createTable_fish_inventory))
//   .then(() => runSQL(sqls.sql_createTable_misc_inventory))
//   .then(() => runSQL(sqls.sql_createTable_sauce_inventory));
// runSQL(sqls.sql_createTable_inventory);

// do not run below 4 in postgre
// runSQL(sqls.sql_insert_meat_inventory);
// .then(() => runSQL(sqls.sql_insert_fish_inventory))
// .then(() => runSQL(sqls.sql_insert_misc_inventory))
// .then(() => runSQL(sqls.sql_insert_sauce_inventory));

function db_initSetting() {
  return new Promise((resolve, reject) => {
    const conn = new Client(settingObj);
    conn.connect();
    conn.query(sqls.createDummy, (err) => {
      if (err) {
        conn.end();
        return reject(err);
      }
      encode(testMember[1])
        .then((hash) => {
          testMember[1] = hash;
          conn.query(sql_addMember, testMember, (err) => {
            if (err) {
              conn.end();
              return reject(err);
            }
            conn.query(additionalSqls, (err) => {
              conn.end();
              if (err) return reject(err);
              resolve();
            });
          });
        })
        .catch((err) => reject(err));
    });
  });
}

async function dbSetup() {
  await db_initSetting()
    .then(console.log("DB setup on heroku complete!"))
    .catch((err) => console.log(err));
}
// dbSetup();
