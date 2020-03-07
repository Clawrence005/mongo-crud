const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');
// test
router.get('/test', product_controller.test);
// create
router.post('/create', product_controller.product_create);
//read all
router.get('/all', product_controller.product_get_all);
// read by id
router.get('/:id', product_controller.product_details);
//update by id
router.put('/:id/update', product_controller.product_update);

module.exports = router;