const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  stock: {
    type: Number,
    require: true,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Product = mongoose.model("Products", productSchema);
module.exports = Product;
