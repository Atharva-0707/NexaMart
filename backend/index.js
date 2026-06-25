const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); 

dotenv.config();
connectDB();

const app = express();
app.use(cors(
    {
        origin: ['http://localhost:5173', 'http://127.0.0.1:5173', process.env.FRONTEND_URL],
        credentials: true
    }
));

app.use(express.json()); // Parse JSON request bodies 
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

app.get("/", (req, res) => {
    res.send("Server is running properly!");
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/payment', require('./routes/paymentRoutes'));
app.use('/api/analytics', require('./routes/analyticsRoutes'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
