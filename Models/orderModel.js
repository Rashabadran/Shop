const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const producttables = require("./balloonsModel");

const OrderModel = new Schema(
  {
    cart: [
      {
        productID: {
          type: Schema.Types.ObjectId,
          ref: "producttables",
          required: [true, "Please include a productTable"],
        },
        quantity: Number,
        price: Number,
        color:String,
      },
    ],
    payment_type: {
      type: String,
    },
    total_price: {
      type: Number,
    },
    phone_number: {
      type: Number,
    },
    address: {
      type: String,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "OrderModel",
  }
);

module.exports = mongoose.model("OrderModel", OrderModel);
