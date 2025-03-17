const mongoose = require('mongoose');

const DishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String, // base64 encoded image
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Veg', 'Non-Veg'],
    default: 'Veg',
  },
  isSpeciality: {
    type: String,
    required: true,
    enum: ['Yes', 'No'],
    default: 'No',
  },
});

module.exports = mongoose.model('Dish', DishSchema);
