const router = require('express').Router();
const passport = require('../passport');
const userController = require('../controllers/userController');
const recipeController = require('../controllers/recipeController');

router.route('/api/user')
    .post(userController.signupUser);

router.route('/api/user/login', passport.authenticate('local'))
    .post(userController.userLogin);

router.post("/api/user/logout", (req, res) => {
    if (req.user) {
        req.logout();
        res.send({ msg: "logging out" });
    } else {
        res.send({ msg: "no user to log out" });
    }
});

router.route('/api/order')
    .post(recipeController.createOrder)
    .get(recipeController.getOrder);

router.route('/api/order/:id')
    .delete(recipeController.deleteOrder);


// .get(recipeController.createRecipe)
// router.route('api/recipe/:id')
// .get(recipeController.updateRecipe)
// .get(recipeController.deleteRecipe)
// router.route('api/recipe/:id')
// .get(recipeController.getUser)
// .get(recipeController.updateUser)
module.exports = router;