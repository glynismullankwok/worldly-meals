const mongoose = require('mongoose')
const Schema = mongoose.Schema
const OrderSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    catagory: {
        type: String,
        required: true
    },
    calory: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
})
const Order = mongoose.model('order', OrderSchema)

module.exports = Order