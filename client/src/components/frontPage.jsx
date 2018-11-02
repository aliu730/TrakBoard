import React from 'react';

const FrontPage = (props) => {
  const {
    enterEntry,
  } = props;
  return (
    <div>
      <img className="background" src="gameBackground.jpg" width="100%" height="100%" alt="" />
      <div className="overHead">TrakBoard</div>
      <button type="button" onClick={enterEntry} className="addSess">Add Entry</button>
    </div>
  );
};

module.exports = FrontPage;
