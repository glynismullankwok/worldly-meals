const Order = require('../models/Order')
const User = require('../models/user')
module.exports = {
    createUser: (req, res) => {
        // console.log(req.body)
        const { username, email, password } = req.body;
        User.findOne({ email: email }, async (err, user) => {
            if (err) console.log('user: ', err)
            else if (user) res.json({ error: `${user} user exists` })
            else {
                const newUser = await new User({ username: username, email: email, password: password })
                newUser.save((err, savedUser) => {
                    if (err) return res.json(err)
                    res.json({ id: savedUser._id, username: savedUser.username, email: savedUser.email })
                })
            }
        })
    },
    userLogin: async (req, res) => {
        // console.log(req.body)
        const { email } = req.body
        if (email) {
            const result = await User.find({ email: email })
            res.json({ id: result[0]._id, email: result[0].email })
            console.log(result)
        } else {
            res.json({ user: null })
        }
    },

    createOrder: async (req, res) => {
        console.log('newOrder')
        Order.create(req.body)
            .then(orderData => {
                res.json(orderData)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send()
            })
        // const newOrder = await { title: req.body.title, catagory: req.body.catagory, calory: req.body.calory, image: req.body.image }
        // newOrder.save((err, savedOrder) => {
        //     if (err) return res.json(err)
        //     res.json(savedOrder)
        // })

    },


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