const router = require('express').Router();
const passport = require('../passport');
const userController = require('../controllers/userController');
const recipeController = require('../controllers/recipeController');

router.route('/api/user')
    .post(userController.signupUser);

router.route('/api/user/login', passport.authenticate('local'))
    .post(userController.userLogin);

router.route("/api/user/logout")
    .post(userController.userLogout)

router.route('/api/order')
    .post(recipeController.createOrder)
    .get(recipeController.getOrder);

router.route('/api/order/:id')
    .delete(recipeController.deleteOrder);

module.exports = router;