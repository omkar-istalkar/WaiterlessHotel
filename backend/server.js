const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const bcrypt = require('bcryptjs')
const Hotel = require('./models/Hotels')
const Dish = require('./models/Dish')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const app = express()
app.use(cors())
app.use(express.json())  
const port = 5000

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Successfully'))
  .catch((err) => console.log(err))

app.get('/', (req, res) => {
  res.send("Hello World")
})

// Hotel registration endpoint
app.post('/hotel-register', async (req, res) => {
  const { name, mail, pass } = req.body;

  // Validate input
  if (!name || !mail || !pass) {
    return res.status(400).json({ message: "All fields are required" })
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(pass, 10)

    // Create a new hotel document
    const newHotel = new Hotel({
      EName: name,
      EMail: mail,
      EPassword: hashedPassword,  // Store hashed password, not the plain text
    })

    // Save the new hotel (employee) to the database
    await newHotel.save()

    res.json({ message: "Hotel Employee Registered Successfully" })
    console.log("Hotel Employee Registration Completed")
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Error during hotel registration" })
  }
})

app.post('/hotel-login', async (req, res) => {
    const { email, password } = req.body
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' })
    }
  
    try {
      // Check if the user exists in the database
      const hotel = await Hotel.findOne({ EMail: email })
  
      if (!hotel) {
        return res.status(401).json({ message: 'Invalid email or password' })
      }
  
      // Compare the provided password with the hashed password in the database
      const isMatch = await bcrypt.compare(password, hotel.EPassword)
  
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' })
      }
      // Respond with the token
      res.json({ message: 'Login successful' })
    } catch (err) {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong, please try again later' })
    }
})

app.post('/add-dish', upload.single('Image'), async (req, res) => {
  const { name, price, Category, IsSpeciality } = req.body;
  const file = req.file;

  if (!name || !price || !Category || !IsSpeciality || !file) {
    return res.status(400).json({ message: 'Fill all necessary fields' });
  }

  try {
    const base64Image = file.buffer.toString('base64');

    const newDish = new Dish({
      name,
      price,
      category: Category, // Consistent field name for Category
      isSpeciality: IsSpeciality, // Consistent field name for IsSpeciality
      image: base64Image,
    });

    await newDish.save();

    res.status(200).json({ message: 'Dish added successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

app.get('/get-dishes', async (req, res) => {
  try {
    const dishes = await Dish.find(); // Fetch all dishes from MongoDB
    res.status(200).json(dishes); // Send the list of dishes to the frontend
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch dishes' });
  }
});

app.delete('/delete-dish/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const dish = await Dish.findByIdAndDelete(id);  // Delete the dish by its ID
    if (!dish) {
      return res.status(404).json({ message: 'Dish not found!' });
    }
    res.status(200).json({ message: 'Dish deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete dish' });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running at http://localhost:${port}`)
})
