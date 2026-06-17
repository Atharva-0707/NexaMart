const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); 

dotenv.config();
connectDB();

const app = express();
app.use(cors());

app.use(express.json()); // Parse JSON request bodies 
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

app.get("/", (req, res) => {
    res.send("Server is running properly!");
});

app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
