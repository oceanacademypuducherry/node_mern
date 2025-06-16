const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const ProductModel = mongoose.model("product", schema);

module.exports = {
  ProductModel,
};
