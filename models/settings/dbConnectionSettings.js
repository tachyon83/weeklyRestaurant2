require("dotenv").config();

module.exports = {
  // please enter your mysql local username and its password below
  yourLocalMySQLUsername: "root2",
  yourLocalMySQLPassword: "1234",

  host: process.env.PG_DATABASE_URL || "",
  user: process.env.PG_USER || "user",
  password: process.env.PG_PASSWORD || "1234",
  database: process.env.PG_DATABASE || "fooddb",
  port: process.env.PG_PORT || "5432",
  max: process.env.PG_MAX_CONN || 5,
  ssl: {
    rejectUnauthorized: false,
  },

  table_member: "member",
  table_recipe: "recipe",
  table_ingredient: "ingredient",
  table_meat: "meat",
  table_fish: "fish",
  table_misc: "misc",
  table_sauce: "sauce",
  table_meat_unit: "meat_unit",
  table_fish_unit: "fish_unit",
  table_misc_unit: "misc_unit",
  table_sauce_unit: "sauce_unit",
  table_week: "week",
  table_meat_inventory: "meat_inventory",
  table_fish_inventory: "fish_inventory",
  table_misc_inventory: "misc_inventory",
  table_sauce_inventory: "sauce_inventory",
  table_inventory: "inventory",
};
