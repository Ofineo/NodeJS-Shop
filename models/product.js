const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  //also valid if you dont want to enforce the schema
  // title: String,
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  userId:{
      type:Schema.Types.ObjectId,
      //ref tells mongoose which model is related with that field.
      ref:'User',
      required: true
  }
});

module.exports = mongoose.model('Product',productSchema);