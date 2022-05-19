import React from 'react';
import { VictoryPie } from 'victory';

export default function PieChart() {
  return (
    <div>
      <VictoryPie
        colorScale={['red', 'blue', 'green', 'yellow']}
        data={[
          { quarter: 'December', earnings: 800 },
          { quarter: 'January', earnings: 900 },
          { quarter: 'February', earnings: 100 },
          { quarter: 'March', earnings: 222 },
        ]}
        x="quarter"
        y="earnings"
      />
    </div>
  );
}
