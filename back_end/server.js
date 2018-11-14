const express = require('express');
const port = 11022;

var app = express();

const path = '../front_end';

// about us website
app.use(express.static(path + '/aboutUs'));
app.use(express.static(path + '/accessFile'));
app.use(express.static(path + '/WebChatBotLayout'));
app.listen(port,() => {
  console.log('Listening on port:',port);
});




