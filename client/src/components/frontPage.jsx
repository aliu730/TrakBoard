import React from 'react';

const FrontPage = (props) => {
  return (
    <div>
      <img className="background" src="gameBackground.jpg" width="100%" height="100%"></img>
      <div className="overHead" >TrakBoard</div>
      <button onClick={props.enterEntry} className="addSess">Add Entry</button>
    </div>
  );
}

module.exports = FrontPage;
