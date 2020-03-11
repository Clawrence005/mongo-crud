express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');
//test
router.get('/test', user_controller.test);
// create
router.post('/create', user_controller.user_create);
// read all
router.get('/all', user_controller.user_get_all);

module.exports = router;