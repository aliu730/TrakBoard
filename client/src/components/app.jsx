const React = require('react');
const axios = require('axios');
import GameSelect from './gameSelect.jsx';
import PlayerSelect from './playerSelect.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currPlayerToAdd: "",
      currNewPlayer: "",
      displayPlayers: ['Andrew Liu', 'Sandro Yu', 'Eric Chung', 'Lam Hoang', 'yticixoT', 'player1'],
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

  enterEntry() {
    const { displayStats } = this.state;
    this.setState({
      displayStats: !displayStats,
      date: "",
      game: "",
      players: [],
      currPlayerToAdd: "",
      winner: "",
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
      alert('New Game Added to Game List');
    }
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
      alert('Added to Select players list');
    }
  }

  submit() {
    const {
      players,
      game,
      date,
      winner,
    } = this.state;
    axios.post('/log', this.state)
    .then((response) => {
      console.log('Saved Successfully');
    })
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
          <img className="background" src="gameBackground.jpg" width="100%" height="100%"></img>
          <div className="overHead" >TrakBoard</div>
          <button onClick={this.enterEntry} className="addSess">Add Entry</button>
        </div>
      );
    } else if (!displayStats) {
      return (
        <div>
          <img className="background" src="gameBackground.jpg" width="100%" height="100%"></img>
          <div className="register" >
            <div className="leftEntry">
              <div className="headBoard">New Entry</div>
              <input className="dateSelect" onChange={ this.getDate } type="date" />
              <GameSelect getGame={ this.getGame } games={ games } />
              <PlayerSelect className="playerSelector" addPlayer={ this.addPlayer } getName={ this.getName } displayPlayers={ displayPlayers } />
              <div className="currPlayers">
                Current Players:
                {players.map((el, i) => {
                  return <span className="names" key={ i }>{ el }</span>
                }
              )}
              </div>
              <div className="winner">
                Winner:&nbsp;
                <select onChange={this.getWinner} className="winnerSelect" defaultValue="selectWinner" >
                  <option value="selectWinner">
                    Pick a Winner
                  </option>
                  {players.map((player, i) => (
                    <option value={player} key={ i } >
                      { player }
                    </option>
                  )
                )}
                </select>
              </div>
              <button onClick={this.submit} className="submit">Submit</button>
              <button onClick={this.enterEntry} className="showStats">Cancel</button>
            </div>
            <div className="rightEntry">
              <div className="headBoard">New Players/Games</div>
              <div className="newPlayer">
                New Player:&nbsp;
                <input onChange={this.newPlayer} className="addForm" type="text"></input>
                <button onClick={this.newPlayerAdd} className="addPlayer">+</button>
              </div>
              <div className="newGame">
                New Game:&nbsp;
                <input  onChange={this.gameChangeAdd} className="addForm" type="text" ></input>
                <button onClick={this.addGame} className="addGame" >+</button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

module.exports = App;
