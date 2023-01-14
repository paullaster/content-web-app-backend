const mysql = require ('mysql2');
const dotenv = require ('dotenv');
dotenv.config();

//DB connection:
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  
});

//TEST connection
db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("database connection established");
});

module.exports = db;