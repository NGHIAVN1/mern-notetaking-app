const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDb = require('./config/db');

const app = express();

connectDb;
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/', (req, res) => {
  res.send('Welcome to the Note Taking App');
} );  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
