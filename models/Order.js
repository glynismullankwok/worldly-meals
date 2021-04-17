const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required: false },
  price: { type: String, required: true },
});

const Order = mongoose.model("order", orderSchema);
module.exports = Order;