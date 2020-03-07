const Product = require('../models/product.model');


//simple test
exports.test = function (req, res) {
  res.send('greetings from the test controller')
}



exports.product_get_all = function (req, res) {

  Product.find({}, function (err, product) {
    if (err) return err;
    console.log("alll")
    res.json(product)
  })
};

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
      return err;
    }
    res.send('Product Created successfully')
  })
};

exports.product_details = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (err) return err;
    res.send(product)
  })
};