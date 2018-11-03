import React from 'react';

const FrontPage = (props) => {
  const {
    enterEntry,
  } = props;
  return (
    <div>
      <div className="overHead">TrakBoard</div>
      <button type="button" onClick={enterEntry} className="addSess">Add Entry</button>
    </div>
  );
};

module.exports = FrontPage;
