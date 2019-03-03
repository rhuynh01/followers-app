const express = require('express');
const app = express();

app.use(express.statis(__dirname + '/dist'));

app.all('*', (req, res) => {
  res.status(200).sendFild(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 8080);
