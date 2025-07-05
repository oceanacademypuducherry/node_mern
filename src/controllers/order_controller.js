const { OrderModel } = require("../models/order.model");
const { ShippingAddressModel } = require("../models/shippingAddress.model");

const createOrder = async (req, res) => {
  try {
    const { _id, body } = req;
    if (!_id || body == undefined) {
      return res
        .status(400)
        .send({ message: "something went wrong", success: false });
    }

    const address = await ShippingAddressModel.findOne({ userId: _id });
    if (!address) {
      return res
        .status(400)
        .send({ message: "Please provide the address", success: false });
    }
    console.log(address);

    const shippmentId = address._id;
    const { carts } = body;
    if (!carts) {
      return res
        .status(400)
        .send({ message: "Please select any product", success: false });
    }
    const products = carts.map((d) => {
      return { productId: d._id, quantity: d.quantity, price: d.price };
    });

    const data = await OrderModel.create({
      userId: _id,
      shippmentId,
      products,
    });

    res.status(200).send({ message: _id, success: true, data });
  } catch (err) {
    res.status(400).send({ message: err.toString(), success: false });
  }
};

module.exports = {
  createOrder,
};
