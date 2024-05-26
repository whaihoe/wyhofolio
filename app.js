const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views/public'));
app.use('/partials', express.static(__dirname + '/views/public/partials'));
app.use('/styles', express.static(__dirname + '/views/public/styles'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.get('/', function(req, res) {
  res.render('public/pages/index');
});

app.get('/contact-me', function(req, res) {
  res.render('public/pages/contact-me');
});

app.get('/projects', function(req, res) {
  res.render('public/pages/projects');
});

app.get('/projects/Dinersclub', function(req, res) {
  res.render('public/pages/projects/dinersclub');
});

app.get('/projects/Locky', function(req, res) {
  res.render('public/pages/projects/locky');
});

app.listen(port, () => {
  console.log(`Wyhofolio app listening on port ${port}`)
})