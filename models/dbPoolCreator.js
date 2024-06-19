const pg = require("pg");
const config = {
  host: process.env.DATABASE_URL || "",
  user: process.env.PG_USER || "user",
  password: process.env.PG_PASSWORD || "1234",
  database: process.env.PG_DATABASE || "fooddb",
  port: process.env.PG_PORT || "5432",
  max: process.env.PG_MAX_CONN || 5,
  idleTimeoutMillis: 30000,
};

module.exports = new pg.Pool(config);
