import React from 'react';
import reactDom from 'react-dom';
import { VictoryBar, VictoryChart } from 'victory';

export default function BarChart() {
  return (
    <div>
      <VictoryChart domainPadding={30}>
        <VictoryBar
          width={300}
          data={[
            { quarter: 1, earnings: 800 },
            { quarter: 2, earnings: 900 },
            { quarter: 3, earnings: 100 },
            { quarter: 4, earnings: 222 },
          ]}
          x="quarter"
          y="earnings"
        ></VictoryBar>
      </VictoryChart>
    </div>
  );
}
