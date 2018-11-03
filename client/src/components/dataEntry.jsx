import PropTypes from 'prop-types';
import React from 'react';
import GameSelect from './gameSelect.jsx';
import PlayerSelect from './playerSelect.jsx';

const DataEntry = (props) => {
  const clock = new Date();
  const day = clock.getDate();
  const year = clock.getFullYear();
  const month = clock.getMonth() + 1;
  const { 
    getDate,
    getGame,
    games,
    addPlayer,
    currPlayerToAdd,
    getName,
    displayPlayers,
    players,
    getWinner,
    submit,
    enterEntry,
    newPlayer,
    newPlayerAdd,
    gameChangeAdd,
    addGame,
  } = props;
  getDate.propTypes = {
    event: PropTypes.string.isRequired,
  };
  return (
    <div>
      <div className="register">
        <div className="leftEntry">
          <div className="headBoard">New Entry</div>
          <input className="dateSelect" onChange={getDate} type="date" defaultValue={`${year}-${month}-${day}`} />
          <GameSelect getGame={getGame} games={games} />
          <PlayerSelect
            className="playerSelector"
            addPlayer={addPlayer}
            currPlayerToAdd={currPlayerToAdd}
            getName={getName}
            displayPlayers={displayPlayers}
          />
          <div className="currPlayers">
            Current Players:
            {players.map(
              (el, i) => {
                return <span className="names" key={i}>{ el }</span>;
              },
            )
          }
          </div>
          <div className="winner">
            Winner:&nbsp;
            <select onChange={getWinner} className="winnerSelect" defaultValue="selectWinner" >
              <option value="selectWinner">
                Pick a Winner
              </option>
              {players.map((player, i) => (
                <option value={player} key={i}>
                  { player }
                </option>
              ))
            }
            </select>
          </div>
          <button type="button" onClick={submit} className="submit">Submit</button>
          <button type="button" onClick={enterEntry} className="showStats">Cancel</button>
        </div>
        <div className="rightEntry">
          <div className="headBoard">New Players/Games</div>
          <div className="newPlayer">
            New Player:&nbsp;
            <input onChange={newPlayer} className="addForm" type="text" />
            <button type="button" onClick={newPlayerAdd} className="addPlayer">+</button>
          </div>
          <div className="newGame">
            New Game:&nbsp;
            <input onChange={gameChangeAdd} className="addForm" type="text" />
            <button type="button" onClick={addGame} className="addGame">+</button>
          </div>
          <div className="actions-div" />
        </div>
      </div>
    </div>
  );
};

module.exports = DataEntry;
