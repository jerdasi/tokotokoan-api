const Cart = require("./carts.model");

exports.carts = async (req, res) => {
    try {
        const { user_id } = req.query;
        let carts;
        if(user_id) {
            carts = await Cart.find({
                user_id
            })
        } else {
            carts = await Cart.find();
        }

        res.status(200).json({
            status: res.statusCode,
            message: "Sukses Mengambil Seluruh Cart",
            data: carts
        })
    } catch (err) {
        res.status(400).json({
            status: res.statusCode,
            message: err.message
        })
    }
}

exports.add = async (req, res) => {
    try {
        const { user_id, product, count } = req.body;
        const newCart = new Cart({
            user_id,
            product,
            count
        });
        await newCart.save();

    } catch (err) {
        res.status(400).json({
            status: res.statusCode,
            message: err.message
        })
    }
}