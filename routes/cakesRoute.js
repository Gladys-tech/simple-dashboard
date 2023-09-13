const express = require('express');
const router = express.Router();
const cakeModel = require('../models/cakeModel');
const multer = require('multer');

// Define a storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Specify the directory where uploaded files will be stored
    cb(null, 'uploads/'); // You may need to create the 'uploads' directory
  },
  filename: (req, file, cb) => {
    // Generate a unique filename for the uploaded file
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname);
  },
});
// path.extname(
const upload = multer({ storage });

// Handle POST request to create a new cake
router.post('/', upload.single('image'), async (req, res) => {
  try {


    const { name, variants, prices, image, description } = req.body;

    // Transform prices array into an object with variants as keys
    const pricesObject = {};
    variants.forEach((variant, index) => {
      pricesObject[variant] = prices[index];
    });

    const filePath = req.file.path;
    console.log('Image saved at:', filePath);
    // Create a new cake document using the cakeModel
    const newCake = new cakeModel({
      name,
      variants,
      prices: pricesObject,
      image: filePath, // Store the image path (assuming you have this property in your Cake model)
      description,
    });
    console.log(newCake);
    // Save the new cake to the database
    await newCake.save();

    // Respond with a success status code
    res.status(201).json({ message: 'Cake created successfully' });
  } catch (error) {
    console.error('Error creating cake:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
