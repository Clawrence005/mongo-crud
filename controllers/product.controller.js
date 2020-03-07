const Product = require('../models/product.model');


//simple test
exports.test = function (req, res) {
  res.send('greetings from the test controller')
}

exports.product_create = function (req, res) {
  let product = new Product(
    {
      itemName: req.body.itemName,
      brandName: req.body.brandName,
      price: req.body.price,
      qty: req.body.qty,
    }
  );

  product.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Product Created successfully')
  })
};