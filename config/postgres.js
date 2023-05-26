const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "music",
  user: "postgres",
  password: "root123456",
});

pool.connect((err) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  console.log("connected");
});
module.exports = pool;
