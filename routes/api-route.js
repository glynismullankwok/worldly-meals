const router = require('express').Router()
const passport = require('../passport')
const recipeController = require('../controllers/recipeController')

 router.route('/api/user')
    .post(recipeController.createUser)

router.route('/api/user/login', passport.authenticate('local'))
    .post(recipeController.userLogin)

router.route('api/order')
    .post(recipeController.createOrder)


// .get(recipeController.createRecipe)
// router.route('api/recipe/:id')
// .get(recipeController.updateRecipe)
// .get(recipeController.deleteRecipe)
// router.route('api/recipe/:id')
// .get(recipeController.getUser)
// .get(recipeController.updateUser)
module.exports = router