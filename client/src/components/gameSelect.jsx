import React from 'react';

class GameSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="gameSelector">
      Select Game:&nbsp;
        <select onChange={this.props.getGame} className="gameSelect" defaultValue="notselected">
          <option value="Monopoly">Monopoly</option>
          <option value="Sorry">Sorry</option>
          <option value="Life">Life</option>
          <option value="notselected">Select Game</option>
        </select>
      </div>
    )
  }
}

module.exports = GameSelect;
