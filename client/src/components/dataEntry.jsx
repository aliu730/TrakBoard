import React from 'react';
import GameSelect from './gameSelect.jsx';
import PlayerSelect from './playerSelect.jsx';

const DataEntry = (props) => {
  let clock = new Date();
  let day = clock.getDate();
  let year = clock.getFullYear();
  let month = clock.getMonth() + 1;
  return (
    <div>
      <img className="background" src="gameBackground.jpg" width="100%" height="100%"></img>
      <div className="register" >
        <div className="leftEntry">
          <div className="headBoard">New Entry</div>
          <input className="dateSelect" onChange={ props.getDate } type="date" defaultValue={`${year}-${month}-${day}`}/>
          <GameSelect getGame={ props.getGame } games={ props.games } />
          <PlayerSelect className="playerSelector" addPlayer={ props.addPlayer } currPlayerToAdd={ props.currPlayerToAdd } getName={ props.getName } displayPlayers={ props.displayPlayers } />
          <div className="currPlayers">
            Current Players:
            {props.players.map((el, i) => {
              return <span className="names" key={ i }>{ el }</span>
            }
          )}
          </div>
          <div className="winner">
            Winner:&nbsp;
            <select onChange={props.getWinner} className="winnerSelect" defaultValue="selectWinner" >
              <option value="selectWinner">
                Pick a Winner
              </option>
              {props.players.map((player, i) => (
                <option value={player} key={ i } >
                  { player }
                </option>
              )
            )}
            </select>
          </div>
          <button onClick={props.submit} className="submit">Submit</button>
          <button onClick={props.enterEntry} className="showStats">Cancel</button>
        </div>
        <div className="rightEntry">
          <div className="headBoard">New Players/Games</div>
          <div className="newPlayer">
            New Player:&nbsp;
            <input onChange={props.newPlayer} className="addForm" type="text"></input>
            <button onClick={props.newPlayerAdd} className="addPlayer">+</button>
          </div>
          <div className="newGame">
            New Game:&nbsp;
            <input  onChange={props.gameChangeAdd} className="addForm" type="text" ></input>
            <button onClick={props.addGame} className="addGame">+</button>
          </div>
          <div className="filler-div">
          </div>
        </div>
      </div>
    </div>
  )
};

module.exports = DataEntry;