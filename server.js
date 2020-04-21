const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

// setup for handlebars
app.engine('hbs', hbs());
app.set('view engine', 'hbs');

// middleware providing correct paths for all endpoints
// using method res.show
app.use((req, res, next) => {
  res.show = name => {
    res.sendFile(path.join(__dirname + `/views/${name}`));
  };
  next();
});

// middleware express.static for serving external files
// like style.css, images
app.use(express.static(path.join(__dirname + '/public')));

// homepage endpoint
app.get('/', (req, res) => {
  res.show('index.html');
});

// about endpoint
app.get('/about', (req, res) => {
  res.show('about.html');
});

// contact endpoint
app.get('/contact', (req, res) => {
  res.show('contact.html');
});

// info endpoint
app.get('/info', (req, res) => {
  res.show('info.html');
});

// history endpoint
app.get('/history', (req, res) => {
  res.show('history.html');
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