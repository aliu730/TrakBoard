const React = require('react');
const axios = require('axios');
import DataEntry from './dataEntry.jsx';
import FrontPage from './frontpage.jsx';
import GameSelect from './gameSelect.jsx';
import PlayerSelect from './playerSelect.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currPlayerToAdd: "",
      currNewPlayer: "",
      displayPlayers: [],
      displayStats: true,
      date: "",
      game: "",
      gameToAdd: "",
      games: ['Monopoly', 'Sorry', 'Lords of Waterdeep', '7 Wonders'],
      players: [],
      winner: "",
    };

    this.addGame = this.addGame.bind(this);
    this.enterEntry = this.enterEntry.bind(this);
    this.getDate = this.getDate.bind(this);
    this.getGame = this.getGame.bind(this);
    this.getName = this.getName.bind(this);
    this.gameChangeAdd = this.gameChangeAdd.bind(this);
    this.getWinner = this.getWinner.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.newPlayer = this.newPlayer.bind(this);
    this.newPlayerAdd = this.newPlayerAdd.bind(this);
    this.submit = this.submit.bind(this);
  }
  addPlayer() {
    const { players, currPlayerToAdd } = this.state;
    const newPlayerList = players;
    if (!players.includes(currPlayerToAdd) && currPlayerToAdd !== "" && currPlayerToAdd !== "notselected") {
      newPlayerList.push(currPlayerToAdd);
      this.setState({
        players: newPlayerList,
      });
    }
  }
  addGame() {
    const { gameToAdd, games } = this.state;
    const newGameList = games;
    if (!newGameList.includes(gameToAdd)) {
      newGameList.push(gameToAdd);
      this.setState({
        games: newGameList,
      });
      alert(`${ gameToAdd } added to Game List`);
    }
  }
  componentDidMount() {
    axios.get('/log')
    .then((res) => {
      let gameList = res.data.map((el) => el.game).filter((v,i,a) => a.indexOf(v) === i);
      let playerList = res.data.map((el) => el.player).filter((v,i,a) => a.indexOf(v) === i);
      this.setState({
        displayPlayers: playerList,
        games: gameList,
      });
    });
  }
  enterEntry() {
    const { displayStats } = this.state;
    this.setState({
      displayStats: !displayStats,
      date: "",
      game: "",
      players: [],
      currNewPlayer: "",
      currPlayerToAdd: "",
      winner: "",
      gameToAdd: "",
    });
  }

  getDate(event) {
    this.setState({
      date: event.target.value,
    });
  }

  getGame(event) {
    this.setState({
      game: event.target.value,
    });
  }

  gameChangeAdd(event) {
    this.setState({
      gameToAdd: event.target.value,
    });
  }

  getName(event) {
    this.setState({
      currPlayerToAdd: event.target.value,
    });
  }
  getWinner(event) {
    this.setState({
      winner: event.target.value,
    });
  }

  newPlayer(event) {
    this.setState({
      currNewPlayer: event.target.value,
    });
  }

  newPlayerAdd() {
    const { currNewPlayer, displayPlayers } = this.state;
    const newList = displayPlayers;
      if (!newList.includes(currNewPlayer)) {
      newList.push(currNewPlayer);
      this.setState({
        displayPlayers: newList,
      });
      alert(`${ currNewPlayer } added to select players list`);
    }
  }

  submit() {
    const {
      players,
      game,
      date,
      winner,
    } = this.state;
    if (winner !== "" && date !== "" && game !== "") {
      axios.post('/log', this.state)
      .then(() => {
        alert('Saved Successfully');
      });
    } else {
      alert(`Fill out fields first!`);
    }
  }

  render() {
    const { 
      displayStats,
      players,
      displayPlayers,
      games,
      gameToAdd,
    } = this.state;
    
    if (displayStats) {
      return (
        <div>
          <FrontPage enterEntry={this.enterEntry} />
        </div>
      );
    } else if (!displayStats) {
      return (
        <div>
          <DataEntry 
            addGame={this.addGame}
            addPlayer={this.addPlayer} 
            displayPlayers={displayPlayers} 
            enterEntry={this.enterEntry}
            gameChangeAdd={this.gameChangeAdd}
            getDate={this.getDate} 
            getGame={this.getGame} 
            games={games} 
            newPlayer={this.newPlayer}
            newPlayerAdd={this.newPlayerAdd}
            players={players}
            submit={this.submit}
          />
        </div>
      )
    }
  }
}

module.exports = App;
