const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
    user_id: {
        type: String,
        require: true
    },
    product: {
        type: Object,
        require: true
    },
    count: {
        type: Number,
        require: true
    }
});

const Cart = mongoose.model("Carts", cartSchema);
module.exports = Cart;