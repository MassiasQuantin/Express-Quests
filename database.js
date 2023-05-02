const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const query = async (sql, params = []) => {
  try {
    const [rows] = await pool.query(sql, params);
    return [rows];
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = {
  query,
};