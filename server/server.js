const express = require('express');
const path = require('path');
const app = express();
const postData = require('../database/db.js');

app.use('/', express.static(path.join(__dirname, '../client/src')));
app.use('/bundle', express.static(path.join(__dirname, '../public/trakBundle.js')));
app.use('/styles', express.static(path.join(__dirname, '../styles')));
app.listen('3000', () => {
  console.log("Listening to 3000");
});

app.post('/log', (req, res) => {
  console.log(postData);
  postData.postData();
  res.send('Recieved');
});