import React from 'react';
import Table from './Table';
import BarChart from './BarChart';
import PieChart from './PieChart';

export default function AdminPage() {
  return (
    <div>
      <Table />
      <BarChart />
      <PieChart />
    </div>
  );
}
