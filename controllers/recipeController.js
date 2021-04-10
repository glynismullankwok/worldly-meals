// const db = require('../models')
const User = require('../models/user')
module.exports = {
    createUser: (req, res) => {
        console.log('We are here to post')
        console.log(req.body)
        const { username,  password } = req.body;
         User.findOne({ username: username }, async(err, user) => {
            if (err) console.log('user: ', err)
            else if (user) res.json({ error: `${user} user exists` })
            else {
                const newUser = await new User({ username: username,  password: password })
                newUser.save((err, savedUser) => {
                    if (err) return res.json(err)
                    res.json({id:savedUser._id, username:savedUser.username})
                })
            }
        })
    },
    userLogin: async (req, res) => {
        // console.log(req.body)
        const { username} = req.body
        if (username) {
            const result = await User.find({ username: username })
            res.json({ id: result[0]._id, username: result[0].username })
            console.log(result)
        } else {
            res.json({ user: null })
        }
    },
    // createRecipe: function (req, res) {
    //     db.Recipe.create(req.body)
    //         .then(recipeData => {
    //             res.json(recipeData)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //             res.status(500).send()
    //         })
    // },
    // getRecipes: function (req, res) {
    //     const { id } = req.params
    //     // console.log(id)
    //     db.User.findById(id)
    //         .then(userData => {
    //             // console.log(userData)
    //             res.json(userData)
    //         })
    //         .catch(err => {
    //             // console.log(err)
    //             res.status(500).send()
    //         })
    // },
    // updateRecipe: function (req, res) {
    //     const { id } = req.params
    //     db.User.findByIdAndUpdate(id, req.body, { new: true })
    //         .then(userData => {
    //             // console.log(userData)
    //             res.json(userData)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //             res.status(500).send()
    //         })
    // },
    // deleteRecipe: function (req, res) {
    //     const { id } = req.params
    //     db.Recipe.findByIdAndDelete(id)
    //         .then(recipeData => {
    //             res.json(recipeData)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //             res.status(500).send()
    //         })
    // },
}