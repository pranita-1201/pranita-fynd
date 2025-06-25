const express = require('express');
const router = express.Router();
const FeaturedProduct = require('../models/FeaturedProduct');
const { protect, admin } = require('../middleware/auth');

// Get all featured products (public)
router.get('/', async (req, res) => {
  try {
    const featuredProducts = await FeaturedProduct.find({ isActive: true })
      .populate('product')
      .sort({ priority: -1 });
    res.json(featuredProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a product to featured (admin only)
router.post('/', protect, admin, async (req, res) => {
  try {
    const { product, endDate, discountPercentage, priority } = req.body;

    const featuredProduct = new FeaturedProduct({
      product,
      endDate,
      discountPercentage,
      priority
    });

    const newFeaturedProduct = await featuredProduct.save();
    await newFeaturedProduct.populate('product');
    
    res.status(201).json(newFeaturedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update featured product (admin only)
router.put('/:id', protect, admin, async (req, res) => {
  try {
    const featuredProduct = await FeaturedProduct.findById(req.params.id);
    if (!featuredProduct) {
      return res.status(404).json({ message: 'Featured product not found' });
    }

    Object.assign(featuredProduct, req.body);
    const updatedFeaturedProduct = await featuredProduct.save();
    await updatedFeaturedProduct.populate('product');

    res.json(updatedFeaturedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Remove from featured (admin only)
router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const featuredProduct = await FeaturedProduct.findById(req.params.id);
    if (!featuredProduct) {
      return res.status(404).json({ message: 'Featured product not found' });
    }

    await featuredProduct.deleteOne();
    res.json({ message: 'Product removed from featured' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get active featured products count
router.get('/count', async (req, res) => {
  try {
    const count = await FeaturedProduct.countDocuments({ isActive: true });
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;