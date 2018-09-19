import React from 'react';

class PlayerSelect extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { displayPlayers } = this.props;
    return (
      <div className="playerSelector">
        Select Players:&nbsp;
        <select onChange={this.props.getName} id="playerSelect" defaultValue="notselected">
        <option value="notselected">Select Player</option>
          {displayPlayers.map((player, i) => {
            return (
              <option value={player} key={ i } >
                { player }
              </option>
            )
          }
        )}
        </select>
        <button onClick={this.props.addPlayer} className="addPlayer">+</button>
      </div>
    );
  };
};

module.exports = PlayerSelect;

