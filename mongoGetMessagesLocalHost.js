const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000; // The port on which the server will listen

// MongoDB connection details
const url = 'mongodb://localhost:27017';
const dbName = 'socialNetwork';
const client = new MongoClient(url);

app.get('/M00870488', async (req, res) => {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB server');
    
    const db = client.db(dbName);
    const collection = db.collection('messages');

    // Find documents in the users collection
    const findResult = await collection.find({}).toArray();
    
    // Respond with the found documents
    res.json(findResult);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while fetching data from MongoDB');
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
