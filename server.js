
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const nodemailer = require('nodemailer');

const mongoose = require('mongoose');
const cakesRoute = require('./routes/cakesRoute');
const cakeModel = require('./models/cakeModel');
const orderModel = require('./models/orderModel');
// const orderRoute = require('./routes/orderRoute'); 
const userModel = require('./models/userModel');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URI || 'your-mongodb-uri-here', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check the MongoDB connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
// Define a route to creating a product
app.use('/api/cakes/', cakesRoute);

// app.use('api/orders', orderRoute);
// Create a route to fetch all products
app.get('/api/cakes/getallcakes', async (req, res) => {
  cakeModel.find()
  .then(cakes => res.json(cakes))
  .catch(err => res.json(err))
});
// Define a route to fetch all orders
app.get('/api/orders/getallorders', async (req, res) =>{
  orderModel.find()
  .then(orders => res.json(orders))
  .catch(err => res.json(err))
});
// Define a route to handle order statuses
app.put('/api/orders/updatestatus/:id', async (req, res) => {
  const orderId = req.params.id;

  try {
    // Find the order by ID and update the status
    const order = await orderModel.findById(orderId);

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    // Toggle the status
    order.status = req.body.status;

    // Save the updated order
    await order.save();

    // Send an email to the user
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'gladyskyambadde0@gmail.com',
        pass: 'Hansong@123',
      },
    });

    const mailOptions = {
      from: 'Gladys Kyambadde',
      to: order.userEmail, // Get the user's email from the order data
      subject: 'Order Status Update',
      text: `Your order (Order ID: ${order._id}) status has been updated to ${order.status}.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.status(200).json({ success: true, message: 'Status updated successfully' });
  } catch (error) {
    console.error('Error updating status:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Modify the route to get orders by user's email
app.get('/api/orders/getordersbyemail/:email', async (req, res) => {
  try {
    const userEmail = req.params.email;
    // Fetch orders for the specific user by email
    const orders = await orderModel.find({ userEmail });
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders by email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// Define a route to fetch users
app.get('/api/users', async (req, res) => {
     userModel.find() // Fetch all users from your database
    .then(users => res.json(users))
    .catch(err=> res.json(err))
});

// Define a route to delete a user by ID
app.delete('/api/users/:id', async (req, res) => {
  const userId = req.params.id; // Get the user ID from the URL parameter

  try {
    // Find the user by ID and delete it
    const deletedUser = await userModel.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Define a route to view a specific user by ID
app.get('/api/users/:id', async (req, res) => {
  const userId = req.params.id; // Get the user ID from the URL parameter

  try {
    // Find the user by ID
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



app.get('/', (req, res) => {
  res.send('Server is working');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
