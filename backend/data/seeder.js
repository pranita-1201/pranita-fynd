const mongoose = require('mongoose');
const dotenv = require('dotenv');
const products = require('./products');
const Product = require('../models/Product');
const FeaturedProduct = require('../models/FeaturedProduct');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected for seeding'))
  .catch((err) => console.log('MongoDB Connection Error:', err));

const importData = async () => {
  try {
    // Clear existing data
    await Product.deleteMany();
    await FeaturedProduct.deleteMany();

    // Import products
    const createdProducts = await Product.insertMany(products);

    // Create featured products for some items
    const featuredProducts = [
      {
        product: createdProducts[0]._id, // Diamond Ring
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        discountPercentage: 15,
        priority: 1
      },
      {
        product: createdProducts[2]._id, // Sapphire Earrings
        endDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
        discountPercentage: 20,
        priority: 2
      },
      {
        product: createdProducts[4]._id, // Luxury Watch
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
        discountPercentage: 10,
        priority: 3
      }
    ];

    await FeaturedProduct.insertMany(featuredProducts);

    console.log('Data imported successfully');
    process.exit();
  } catch (error) {
    console.error('Error importing data:', error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    await FeaturedProduct.deleteMany();

    console.log('Data destroyed successfully');
    process.exit();
  } catch (error) {
    console.error('Error destroying data:', error);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}