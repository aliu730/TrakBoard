import React from 'react';

const PlayerSelect = (props) => {
  const {
    addPlayer,
    displayPlayers,
    getName,
  } = props;
  return (
    <div className="playerSelector">
      Select Players:&nbsp;
      <select onChange={getName} id="playerSelect" defaultValue="notselected">
        <option value="notselected">Select Player</option>
        {displayPlayers.map((player, i) => {
          return (
            <option value={player} key={i}>
              { player }
            </option>
          );
        })}
      </select>
      <button type="button" onClick={addPlayer} className="addPlayer">+</button>
    </div>
  );
};

module.exports = PlayerSelect;
