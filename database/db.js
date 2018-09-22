const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/trakBoard');

const Schema = mongoose.Schema;

const gameData = new Schema({
  player: { type: String },
  date: { type: String },
  game: { type: String },
  won: { type: Number },
  loss: { type: Number },
});
const logData = mongoose.model('logData', gameData);
const postData = (data) => {
  console.log(data);
  logData.save();

}

module.exports = {
  postData,
};

