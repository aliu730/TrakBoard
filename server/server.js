const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static(path.join(__dirname, '../dist/public')));

app.listen('3000', () =>{
  console.log("Listening to 3000");
});

app.get('/pullData', () => {

});