
const express = require('express');
const cors = require('cors');
require('dotenv').config();

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

app.use('/api/cakes/', cakesRoute);

// app.use('api/orders', orderRoute);
// Create a route to fetch all products
app.get('/api/cakes/getallcakes', async (req, res) => {
  cakeModel.find()
  .then(cakes => res.json(cakes))
  .catch(err => res.json(err))
});
app.get('/api/orders/getallorders', async (req, res) =>{
  orderModel.find()
  .then(orders => res.json(orders))
  .catch(err => res.json(err))
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



app.get('/', (req, res) => {
  res.send('Server is working');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
