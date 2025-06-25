const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a product name'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a product description']
  },
  price: {
    type: Number,
    required: [true, 'Please add a product price'],
    min: 0
  },
  category: {
    type: String,
    required: [true, 'Please add a product category'],
    enum: ['rings', 'necklaces', 'earrings', 'bracelets', 'watches']
  },
  imageUrl: {
    type: String,
    required: [true, 'Please add a product image']
  },
  inStock: {
    type: Boolean,
    default: true
  },
  quantity: {
    type: Number,
    required: [true, 'Please add product quantity'],
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);