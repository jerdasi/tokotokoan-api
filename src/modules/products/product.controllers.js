const Product = require("./product.model");

exports.products = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: res.statusCode,
      message: "Get All Products Success",
      data: {
        products,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      message: error.message,
    });
  }
};

exports.add = async (req, res) => {
  try {
    const { name, price, stock, category, description } = req.body;
    const newProduct = new Product({
      name,
      price,
      stock,
      category,
      description,
    });
    await newProduct.save();
    res.status(201).json({
      status: res.statusCode,
      message: "Add Product Success",
      data: {
        product: {
          name,
          price,
          stock,
          category,
          description,
        },
      },
    });
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      message: error.message,
    });
  }
};
