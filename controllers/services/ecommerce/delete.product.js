//FETCH ALL PRODUCTS
const db = require ("../../../utils/database.connection");
const deleteProduct = (req, res) => {
  const { productid } = req.params;

  let query = `DELETE FROM products WHERE productid = '${productid}'`;
  db.query(query)
  .then((rows) => {
    if (rows[0].affectedRows < 1) {
      res.status(500).json({
        status: "error",
        error: "Product with id '" + productid + "' does not exist",
      });
      return;
    }
    res.status(200).json({
      status: "success",
      message: "Product with id '" + productid + "' was deleted",
    });
  })
  .catch ( (err) => {
    res.status(500).json({
      status: "error",
      error: err.message
    });
  });
};
module.exports = deleteProduct;
