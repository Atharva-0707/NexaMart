const jwt = require('jsonwebtoken');
const User = require('../model/user');

const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) { // Check if the authorization header is present and starts with 'Bearer'
    try {
      token = req.headers.authorization.split(' ')[1]; // Extract the token from the header at position 1 (after 'Bearer')
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token using the secret key
      req.user = await User.findById(decoded.id).select('-password'); // Find the user by ID from the decoded token and exclude the password field
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };
