// Import necessary packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// MongoDB connection string
const uri = "MONGO CONNECT";

// Initialize the express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB using Mongoose
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB...", err));

// Define a User schema and model
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  // Add other user fields as required
});

const User = mongoose.model("User", UserSchema);

// Routes
app.get('/M00870488', (req, res) => {
  res.send('Hello M00870488!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
