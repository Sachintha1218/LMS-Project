require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic routes
app.get('/', (req, res) => {
  res.send('LMS API is running');
});

// Database connection
// We will uncomment this when we set up MongoDB
/*
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
*/

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
