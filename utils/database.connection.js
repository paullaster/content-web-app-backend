const mysql = require ('mysql2');
const dotenv = require ('dotenv');
dotenv.config();

//DB connection:
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password:"",
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit:0,
  multipleStatements: true
});

const db = pool.promise();

//TEST connection
// db.connect(err => {
//   if (err) {
//     throw err;
//   }
//   console.log("database connection established");
// });

module.exports = db;