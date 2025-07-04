const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  shippmentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "shippingAddress",
  },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  productId: {
    type: Array,
      required: true,
      validate: (this) => {
        console.log(this)
    }
  },
    }, { timestamps: true });

const OrderModel = mongoose.model("order", orderSchema);

module.exports = {
    OrderModel
}
