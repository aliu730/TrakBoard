import React from 'react';

const GameSelect = (props) => {
  const { games } = props;
  return (
    <div className="gameSelector">
    Select Game:&nbsp;
      <select onChange={ props.getGame } className="gameSelect" defaultValue="notselected">
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

module.exports = GameSelect;
