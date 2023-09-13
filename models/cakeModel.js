const mongoose = require("mongoose");

const cakeSchema = mongoose.Schema({
  name: { type: String, required: true },
  variants: [{ type: Object }], // Define variants as an array of strings
  prices: [{ type: Object }], // Define prices as an array of numbers
  // category: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
}, {
  timestamps: true,
});

const cakeModel = mongoose.model('cakes', cakeSchema);

module.exports = cakeModel;
