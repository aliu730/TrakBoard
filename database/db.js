const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/trakBoard');

const Schema = mongoose.Schema;

const gameData = new Schema({
  player: String,
  date: String,
  game: String,
  won: Number,
  loss: Number,
});
const logData = mongoose.model('logData', gameData);

const grabData = () => {
  
}

const postData = (data) => {
  const players = data.players;
  for (let i = 0; i < players.length; i++) {
    if (players[i] === data.winner) {
      let dataEntry = new logData({ player: players[i], date: data.date, game: data.game, won: 1, loss: 0 });
      dataEntry.save((err) => {
        if (err) throw (err);
      });
    } else {
      let dataEntry = new logData({ player: players[i], date: data.date, game: data.game, won: 0, loss: 1 });
      dataEntry.save((err) => {
        if (err) throw (err);
      });
    }
  }
}

module.exports = {
  postData,
};

