const Order = require('../models/Order')
module.exports = {
    createOrder: async (req, res) => {
        const myOrder = {
            id: req.body.id,
            title: req.body.title,
            image: req.body.image,
            price: req.body.price,
        };
        Order.create(myOrder)
            .then((orderData) => {
                res.json(orderData);
                // console.log("==> ", orderData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send();
            });
    },

    getOrder: async (req, res) => {
        Order.find({}).then((orderData) => {
            res.send(orderData);
        });
    },
    deleteOrder: (req, res) => {
        const id   = req.params
        console.log(id)
        Order.findByIdAndDelete(id)
            .then(orderData => {
                res.json(orderData)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send()
            })
    },
}