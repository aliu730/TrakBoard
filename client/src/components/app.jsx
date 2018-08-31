const React = require('react');
import GameSelect from './gameSelect.jsx';
import PlayerSelect from './playerSelect.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      displayStats: true,
      date: "",
      game: "",
      currPlayerToAdd: "",
      currNewPlayer: "",
      players: [],
    };
    this.enterEntry = this.enterEntry.bind(this);
    this.getDate = this.getDate.bind(this);
    this.getGame = this.getGame.bind(this);
    this.getName = this.getName.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.newPlayer = this.newPlayer.bind(this);
    this.newPlayerAdd = this.newPlayerAdd.bind(this);
  }

  enterEntry() {
    const { displayStats } = this.state;
    this.setState({
      displayStats: !displayStats,
      date: "",
      game: "",
      players: [],
      currPlayerToAdd: "",
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

  getName(event) {
    this.setState({
      currPlayerToAdd: event.target.value,
    });
  }

  addPlayer() {
    const { players, currPlayerToAdd } = this.state;
    const newList = players;
    if (!players.includes(currPlayerToAdd) && currPlayerToAdd !== "" && currPlayerToAdd !== "notselected") {
      newList.push(currPlayerToAdd);
      this.setState({
        players: newList,
      });
    }
  }

  newPlayer(event) {
    this.setState({
      currNewPlayer: event.target.value,
    });
  }

  newPlayerAdd() {
    const { currNewPlayer, players } = this.state;
    const newList = players;
    newList.push(currNewPlayer);
    this.setState({
      players: newList,
    });
  }

  render() {
    const { displayStats, players } = this.state;
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
              <GameSelect getGame={ this.getGame } />
              <PlayerSelect className="playerSelector" addPlayer={ this.addPlayer } getName={ this.getName } />
              <div className="currPlayers">
                Current Players:
                {players.map((el, i) => {
                  return <span className="names" key={ i }>{ el }</span>
                }
              )}
              </div>
              <button className="submit">Submit</button>
              <button onClick={this.enterEntry} className="showStats">Cancel</button>
            </div>
            <div className="rightEntry">
              <div className="headBoard">New Games/Players</div>
              <div className="newPlayer">
                New Player:&nbsp;
                <input onChange={this.newPlayer} className="addForm" type="text"></input>
                <button onClick={this.newPlayerAdd} className="addPlayer">+</button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

module.exports = App;
