import React from 'react';

class PlayerSelect extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="playerSelector">
        Select Players:&nbsp;
        <select onChange={this.props.getName} id="playerSelect" defaultValue="notselected">
          <option value="notselected">Select Player</option>
          <option>Andrew Liu</option>
          <option>Sandro Yu</option>
          <option>Eric Chung</option>
          <option>Lam Hoang</option>
          <option>yticixoT</option>
          <option>player1</option>
        </select>
        <button onClick={this.props.addPlayer} className="addPlayer">+</button>
      </div>
    );
  };
};

module.exports = PlayerSelect;

