const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from token
      req.user = decoded;

      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

const admin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);
    
    if (user && user.role === 'admin') {
      next();
    } else {
      res.status(401).json({ message: 'Not authorized as admin' });
    }
  } catch (error) {
    res.status(401).json({ message: 'Not authorized as admin' });
  }
};

module.exports = { protect, admin };