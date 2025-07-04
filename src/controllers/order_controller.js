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
    res.status(200).send({ message: _id, success: true });
  } catch (err) {
    res.status(400).send({ message: err.toString(), success: false });
  }
};

module.exports = {
  createOrder,
};
