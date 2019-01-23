import React from 'react';
import Chart from './chart.jsx';

const Statistics = (props) => {
  const { chartData, displayPlayers } = props;
  let chartArray = [];
  for (let i = 0; i < displayPlayers.length; i++) {
    let chartObj = {};
    chartObj.name = displayPlayers[i];
    for (let j = 0; j < chartData.length; j++) {
      if (chartObj.name === chartData[j].player) {
        if (chartObj[chartData[j].game] === undefined) {
          chartObj[chartData[j].game] = {
            won: 0,
            loss: 0,
          };
        }
        chartObj[chartData[j].game].won += chartData[j].won;
        chartObj[chartData[j].game].loss += chartData[j].loss;
      }
    }
    chartArray.push(chartObj);
  }
  return (
    <div className="stats">
      <div className="headBoard">
        Statistics
      </div>
      <div className="chartContain">
        {chartArray.map((el) => (
            <Chart chartEntry={el} />
          ))
        }
      </div>
    </div>
  );
};

module.exports = Statistics;
