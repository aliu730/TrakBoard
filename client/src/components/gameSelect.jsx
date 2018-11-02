import React from 'react';

const GameSelect = (props) => {
  const {
    games,
    getGame,

  } = props;
  return (
    <div className="gameSelector">
    Select Game:&nbsp;
      <select onChange={getGame} className="gameSelect" defaultValue="notselected">
        <option value="notselected">Select Game</option>
        { games.map((game, i) => (
          <option value={game} key={i}>
            { game }
          </option>
        ))
      }
      </select>
    </div>
  );
};

module.exports = GameSelect;
