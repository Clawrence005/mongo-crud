express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');
//test
router.get('/test', user_controller.test);
// create
router.post('/create', user_controller.user_create);
// read all
router.get('/all', user_controller.user_get_all);
// router.route('/contacts')
//     .get(contactController.index)
//     .post(contactController.new);
// router.route('/contacts/:contact_id')
//     .get(contactController.view)
//     .patch(contactController.update)
//     .put(contactController.update)
//     .delete(contactController.delete);
module.exports = router;
