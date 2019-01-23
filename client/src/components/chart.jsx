import React from 'react';

const Chart = (props) => {
  const { chartEntry } = props;
  //displayPlayers : ["Andrew Liu", "Eric Chung", "Lam Hoang", "Sandro Yu", "Tom"]
  //console.log(chartData);
  let gameNames = Object.keys(chartEntry);
  return (
    <div>
      <div className="chart">
        <div className="namePlate">
          {chartEntry.name}
        </div>
        {gameNames.map((game) => {
            if (game !== 'name') {
              return <div>{game}: Won: {chartEntry[game].won} Loss: {chartEntry[game].loss} </div>
            }
          }
        )}
      </div>
    </div>
  );
};

module.exports = Chart;
