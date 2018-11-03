const express = require('express');
const path = require('path');
const app = express();
const db = require('../database/db.js');
app.use(express.json())

app.use('/', express.static(path.join(__dirname, '../client/src')));
app.use('/bundle', express.static(path.join(__dirname, '../public/trakBundle.js')));
app.use('/styles', express.static(path.join(__dirname, '../styles')));
app.listen('3000', () => {
  console.log("Listening to 3000");
});

app.get('/log', (req, res) => { 
  db.grabData((data) => {
    res.send(data);
  });
});

app.post('/log', (req, res) => {
  db.postData(req.body);
  res.send('Recieved');
});
