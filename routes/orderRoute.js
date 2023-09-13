// orderRoutes.js
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Configure nodemailer (same as before)
const transporter = nodemailer.createTransport({
  service: 'Gmail', // e.g., 'Gmail'
  auth: {
    user: 'gladyskyambadde0@gmail.com',
    pass: 'HanSong@123',
  },
});

// Route for updating order status and sending email
router.post('/update-order-status', async (req, res) => {
  console.log('Route accessed'); // Add this line
  try {
    // Simulate updating order status in your database
    const { orderId, newStatus, customerEmail } = req.body;
    // Update order status logic here...

    // Send email notification
    const mailOptions = {
      from: 'gladyskyambadde0@gmail.com',
      to: customerEmail,
      subject: 'Order Status Update',
      text: `Your order status has been updated to: ${newStatus}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Order status updated and email sent successfully' });
  } catch (error) {
    console.error('Error updating order status and sending email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

