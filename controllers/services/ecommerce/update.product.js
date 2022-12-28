//FETCH ALL PRODUCTS
const db = require ("../../../utils/database.connection");

const updateProduct = (req, res) => {
  const { productid } = req.params;
  const {
    title,
    description,
    price,
    variation: { color, size, quantity }
  } = req.body;

  const {filename, path} = req.file;

  let query = `UPDATE products SET title = '${title}', 
    description = '${description}',
    price = '${price}' WHERE productid = '${productid}'`;

  db.query(query, (err, result) => {
    if (err) {
      res.status(404).json({
        status: "error",
        error: err.message
      });
      return;
    }
    let query = `UPDATE attributes SET color = '${color}', 
    size = '${size}', quantity = '${quantity}'
    WHERE productid = '${productid}'`;
    db.query(query, (err, rows) => {
      if (err) {
        res.status(404).json({
          status: "error",
          error: err.message
        });
        return;
      }
      const sql = `UPDATE images SET imageid = '${filename}' 
      path = '${path}', product = '${productid}' WHERE product = '${productid}'`;
      db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({
                status: "error",
                error: err.message
            });
            return;
        };
        res.status(200).json({
            status: "success",
            message: "Product  with id " +productid + " updated successfully"
        });
      });
    });
  });
};
module.exports = updateProduct;
