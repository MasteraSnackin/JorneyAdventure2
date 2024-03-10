const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/socialNetwork';

app.use(bodyParser.json());

// Define a schema for the 'users' collection
const UserSchema = new mongoose.Schema({
  user_id: String,
  nickname: String,
  password: String,
  email: String,
  country: String,
  age: Number,
  phone_number: String
});

// Create a model based on the schema
const User = mongoose.model('User', UserSchema);

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connection established'))
  .catch(err => console.error('MongoDB connection error:', err));

// POST route to add a new user
app.post('/M00870488', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send('Data added successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});