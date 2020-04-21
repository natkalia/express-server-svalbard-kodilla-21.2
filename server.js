const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

// setup for handlebars
app.engine('hbs', hbs());
app.set('view engine', 'hbs');

// middleware express.static for serving external files
// like style.css, images
app.use(express.static(path.join(__dirname + '/public')));

// homepage endpoint
app.get('/', (req, res) => {
  res.render('index', { layout: false });
});

// about endpoint
app.get('/about', (req, res) => {
  res.render('about', { layout: false });
});

// contact endpoint
app.get('/contact', (req, res) => {
  res.render('contact', { layout: false });
});

// info endpoint
app.get('/info', (req, res) => {
  res.render('info', { layout: false });
});

// history endpoint
app.get('/history', (req, res) => {
  res.render('history', { layout: false });
});

// use name from params to render using hbs
app.get('/hello/:name', (req, res) => {
  res.render('hello', { layout: false, name: req.params.name });
});

// catch incorrect requests
app.use((req, res) => {
  res.status(404).send('404 not found...');
})

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});