module.exports = {
    // please enter your mysql local username and its password below
    yourLocalMySQLUsername: 'root2',
    yourLocalMySQLPassword: '1234',

    host: process.env.CLEARDB_HOST || 'localhost',
    port: 3306,
    user: process.env.CLEARDB_USER || 'foodmanager',
    password: process.env.CLEARDB_PASSWORD || '1234',
    database: process.env.CLEARDB_DATABASE || 'fooddb',
    table_member: 'member',
    table_recipe: 'recipe',
    table_ingredient: 'ingredient',
    table_meat: 'meat',
    table_fish: 'fish',
    table_misc: 'misc',
    table_sauce: 'sauce',
    table_meat_unit: 'meat_unit',
    table_fish_unit: 'fish_unit',
    table_misc_unit: 'misc_unit',
    table_sauce_unit: 'sauce_unit',

    connectionLimit: 100,
}