// Importing modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// initialize app, and get port to listen on
const app = express();
const PORT = process.env.PORT || 3000;

// connect to mongo database
mongoose.connect(process.env.DATABASE_URL);

// paths for the home page
const homePage = path.join(__dirname, 'views', 'index.html');

// Note model
const Note = mongoose.model('Note', mongoose.Schema({
  content: String
}));

// Use body parsing middleware, for parsing forms
app.use(bodyParser.urlencoded({ extended: true }));

// GET /
// Home page with notes and form
app.get('/', (req, res) => {
  res.sendFile(homePage);
});

// GET /notes
// Get the JSON list of notes
app.get('/notes', (req, res) => {
  Note.find()
    .then((notes) => {
      return res.send(notes);
    });
});

// POST /notes
// Post a note to the notes file
app.post('/notes', (req, res) => {
  Note.create(req.body)
    .then(() => {
      return res.redirect('/');
    });
});

app.listen(PORT, () => `This app is now running on port ${PORT}`);
