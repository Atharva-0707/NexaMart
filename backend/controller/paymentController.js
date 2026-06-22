const Razorpay = require('razorpay');
const crypto = require('crypto'); // Node.js built-in crypto module to generate hashes


const createOrder = async (req, res) => {
  try {
    const instance = new Razorpay({         // Create a new Razorpay instance
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    
    // Razorpay accepts amount in paise
    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };
    
    const order = await instance.orders.create(options);  // Create a new order
    if (!order) return res.status(500).send("Some error occured"); 
    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
};

const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body; 
    const sign = razorpay_order_id + "|" + razorpay_payment_id; // Concatenate the order ID and payment ID
    const expectedSign = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET) // Create a hash using the secret key
      .update(sign.toString()) // Update the hash with the concatenated string
      .digest("hex"); // Convert the hash to a hexadecimal string

    if (razorpay_signature === expectedSign) { // Compare the signature sent by Razorpay with the expected signature
      return res.status(200).json({ message: "Payment verified successfully" });
    } else {
      return res.status(400).json({ message: "Invalid signature sent!" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { createOrder, verifyPayment };