import React from 'react';

const PlayerSelect = (props) => {
  const { displayPlayers } = props;
  return (
    <div className="playerSelector">
      Select Players:&nbsp;
      <select onChange={props.getName} id="playerSelect" defaultValue="notselected">
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
      <button onClick={props.addPlayer} className="addPlayer">+</button>
    </div>
  );
};

module.exports = PlayerSelect;
