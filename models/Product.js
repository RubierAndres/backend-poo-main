const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
      unique: true
   },
   description: {
      type: String,
      required: true,
      maxlength: 2000
   },
   price: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 32
   },
   category: {
      type: ObjectId,
      ref: 'Category',
      required: true
   },
   quantity: {
      type: Number
   },
   sold: {
      type: Number,
      default: 0
   },
   photo: {
      type: String,
      required: true,
   }
   // photo: {
   //    data: Buffer,
   //    contentType: String
   // }
}, {
   timestamps: true
});

module.exports = Product = mongoose.model('Product', ProductSchema)