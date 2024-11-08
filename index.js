const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
