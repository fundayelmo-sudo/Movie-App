// index.js
const express = require('express');
const app = express();
const movies = require('./data')

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is working!');
});

app.get('/movies', (req, res) => {
  res.json(movies);
});

// Dynamic port for deployment
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at port ${PORT}`);
});
