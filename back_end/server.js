const express = require('express');
const port = 11022;

var app = express();

const path = '../front_end';

app.use(express.static(path));

app.listen(port,() => {
  console.log('Listening on port:',port);
});




