const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  itemName: { type: String, required: true, max: 100 },
  brandName: { type: String, required: false, max: 100 },
  price: { type: Number, required: true },
  qty: { type: Number, required: true }
});

// export
module.exports = mongoose.model('Product', ProductSchema);