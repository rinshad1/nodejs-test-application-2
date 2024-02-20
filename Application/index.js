const express = require('express');
const chalk = require('chalk'); // Import chalk
const app = express();

app.get('/app', (req, res) => {
  // Use chalk to add color
  const message = chalk.green('Hello Friends...!!!');
  res.send(message);
});

app.listen(3000, () => {
  console.log(chalk.blue('Server is up and running')); // Colorful console output
});
