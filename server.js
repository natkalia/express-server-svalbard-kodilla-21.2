const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

// setup for handlebars, define path for layout(s), set default layout
app.engine('hbs', hbs({ extname: 'hbs', layoutsDir: './layouts', defaultLayout: 'main' }));
app.set('view engine', 'hbs');

// middleware express.static for serving external files
// like style.css, images
app.use(express.static(path.join(__dirname + '/public')));

// homepage endpoint
app.get('/', (req, res) => {
  res.render('index');
});

// about endpoint
app.get('/about', (req, res) => {
  res.render('about');
});

// contact endpoint
app.get('/contact', (req, res) => {
  res.render('contact');
});

// info endpoint
app.get('/info', (req, res) => {
  res.render('info');
});

// history endpoint
app.get('/history', (req, res) => {
  res.render('history');
});

// use name from params to render using hbs
app.get('/hello/:name', (req, res) => {
  res.render('hello', { name: req.params.name });
});

// catch incorrect requests
app.use((req, res) => {
  res.status(404).send('404 not found...');
})

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});