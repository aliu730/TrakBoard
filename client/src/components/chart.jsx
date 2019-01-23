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
            let won = chartEntry[game].won;
            let loss = chartEntry[game].loss;
            let winRate = (won / (won + loss)) * 100;
            if (game !== 'name') {
              return <div>{game}: Won: {won} Loss: {loss} WinRate: {winRate}%</div>
            }
          }
        )}
      </div>
    </div>
  );
};

module.exports = Chart;
