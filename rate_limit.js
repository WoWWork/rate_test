const express = require('express');
const rateLimit = require("express-rate-limit");

const app = express();

const limiter = rateLimit({
  windowMs: 60 * 1000, 
  max: 60,
  message: "You exceeded 60 requests in minute!",
});

app.listen(3000, function(){ console.log('Example app listening on port 3000!')});

app.use('/', limiter);

app.get('/', (req, res) => {
  return res.send('Hello World');
});
