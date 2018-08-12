const React = require('react');
import GameSelect from './gameSelect.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      displayStats: true,
      date: "",
      game: "",
    };
    this.enterEntry = this.enterEntry.bind(this);
    this.getDate = this.getDate.bind(this);
    this.getGame = this.getGame.bind(this);
  }

  enterEntry() {
    const { displayStats } = this.state;
    this.setState({
      displayStats: !displayStats,
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

  render() {
    const { displayStats } = this.state;
    if (displayStats) {
      return (
        <div>
          <button onClick={this.enterEntry} id="addSess">Add Entry</button>
        </div>
      );
    } else if (!displayStats) {
      return (
        <div>
          <input onChange={this.getDate} type="date" />
          <GameSelect getGame={this.getGame} />
          <button id="submit">Submit</button>
          <button onClick={this.enterEntry} id="showStats">Cancel</button>
        </div>
      )
    }
  }
}

module.exports = App;