const express = require('express');
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controller/productController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');
const multer = require('multer'); // multer is a middleware for handling file uploads
const upload = multer({ dest: 'uploads/' }); // configure multer to store uploaded files in the 'uploads' directory

const router = express.Router();

// all products
router.route('/').get(getProducts).post(protect, admin, upload.single('image'), createProduct); // Combined routes of getProducts and createProduct. upload.single('image') is middleware for handling file uploads
// specific product
router.route('/:id').get(getProductById).put(protect, admin, upload.single('image'), updateProduct).delete(protect, admin, deleteProduct);  // Combined routes of getProductById, updateProduct, and deleteProduct

module.exports = router;