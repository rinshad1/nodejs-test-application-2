// index.js
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Friends.o...!')
})
app.listen(3000, () => console.log('Server is up and running'));
