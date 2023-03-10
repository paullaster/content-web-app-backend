//dependencies
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

//Internal dependencies
const db = require("../../utils/database.connection");

const login = (req, res) => {
  const { password, email } = req.body;
  if (!email || !password) {
    res.status(400).json({
      status: "error",
      error: "Both password and email are required"
    });
    return;
  }
  const query = `SELECT email, firstname, 
  lastname, phonenumber, password FROM users WHERE email='${email}'`;
  db
    .query(query)
    .then((rows) => {
      if (rows[0].length < 1) {
        res.status(400).json({
          status: "error",
          error: "Account not found"
        });
        return;
      };
      const {password : passwordHash, ...userData} = rows[0][0];
      bcrypt
        .compare(password, passwordHash)
        .then(resp => {
          if (!resp) {
            res.status(404).json({
              status: "error",
              error: "Invalid password"
            });
            return;
          }
          let payload = userData;
          JWT.sign(
            payload,
            process.env.TOKEN_SECRET,
            {
              algorithm: "HS512",
              expiresIn: 5400
            },
            (err, token) => {
              if (err) {
                res.status(500).json({
                  status: "error",
                  error: "Error creating token"
                });
                return;
              };
              res
                .status(200)
                .header({
                  Authorization: "Bearer " + token
                })
                .json({
                  status: "success",
                  token: token,
                });
            }
          );
        })
        .catch(err => {
          res.status(500).json({
            code: "error",
            error: err.message
          });
        });
    })
    .catch(err => {
      res.status(500).json({
        status: "error",
        error: err.message
      });
    });
};
module.exports = login;
