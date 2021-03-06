const Product = require('../models/product.model');

//simple test
exports.test = function (req, res) {
  res.send('greetings from the Product test controller')
}

// gets all Products
exports.product_get_all = function (req, res) {

  Product.find({}, function (err, product) {
    if (err) return err;
    console.log("get all Products:\n", product)
    res.json(product)
  })
};

//creates new Product
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
    // res.send('Product Created successfully');
    res.json(product)
  })
};

// find Product by id
exports.product_details = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (err) return err;
    res.send(product)
  })
};

// update Product by id
exports.product_update = function (req, res) {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
    if (err) return err;
    res.send(`Product ${product} updated`)
  })
};

// delete Product by id
exports.product_delete = function (req, res) {
  Product.findByIdAndRemove(req.params.id, function (err) {
    if (err) return err;
    res.send(`Successfully deleted item`)
  })
};