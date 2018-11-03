import React from 'react';
import Chart from './chartList.jsx';

const Statistics = (props) => {
  const { chartData } = props;
  return (
    <div className="stats">
      <div className="headBoard">
        Statistics
      </div>
      <div className="chartContain">
        <Chart chartData={chartData} />
      </div>
    </div>
  );
};

module.exports = Statistics;
