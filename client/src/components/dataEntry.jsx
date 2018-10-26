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
          <PlayerSelect className="playerSelector" addPlayer={ this.addPlayer } getName={ this.getName } displayPlayers={ displayPlayers } />
          <div className="currPlayers">
            Current Players:
            {players.map((el, i) => {
              return <span className="names" key={ i }>{ el }</span>
            }
          )}
          </div>
      </div>
    </div>
    </div>
  )
};

module.exports = DataEntry;