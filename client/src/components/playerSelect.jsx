import React from 'react';

class PlayerSelect extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <select onChange={this.props.getName} id="playerSelect">
          <option>Andrew Liu</option>
          <option>Sandro Yu</option>
          <option>Eric Chung</option>
          <option>Lam Hoang</option>
          <option>yticixoT</option>
        </select>
        <button id="addPlayer">+</button>
      </div>
    );
  };
};

module.exports = PlayerSelect;

