const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') { // Check if the user is authenticated and has the 'admin' role
    next();
  } else {
    res.status(401).json({ message: 'Not authorized as an admin' });
  }
};

module.exports = { admin };
