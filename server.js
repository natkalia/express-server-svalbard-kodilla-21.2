const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>My first server!</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About</h1>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact</h1>');
});

app.get('/info', (req, res) => {
  res.send('<h1>Info</h1>');
});

app.get('/history', (req, res) => {
  res.send('<h1>History</h1>');
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});