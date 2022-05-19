import React from 'react';
import { VictoryBar, VictoryChart } from 'victory';

export default function BarChart() {
  return (
    <div>
      <VictoryChart domainPadding={100}>
        <VictoryBar
          className="bar-chart"
          height={50}
          width={50}
          data={[
            { quarter: 'Dec', earnings: 800 },
            { quarter: 'Jan', earnings: 900 },
            { quarter: 'Feb', earnings: 100 },
            { quarter: 'Mar', earnings: 222 },
          ]}
          x="quarter"
          y="earnings"
        ></VictoryBar>
      </VictoryChart>
    </div>
  );
}
