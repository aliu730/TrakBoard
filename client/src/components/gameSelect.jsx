import React from 'react';

class GameSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const { games } = this.props;
    return (
      <div className="gameSelector">
      Select Game:&nbsp;
        <select onChange={this.props.getGame} className="gameSelect" defaultValue="notselected">
        <option value="notselected">Select Game</option>
          { games.map((game, i) => (
            <option value={ game } key={ i } >
              { game }
            </option>
          )
        )}
        </select>
      </div>
    )
  }
}

module.exports = GameSelect;
