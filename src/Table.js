import React from 'react';
import { customerData } from './data.js';
import MaterialTable from 'material-table';

export default function Table() {
  return (
    <div style={{ maxWidth: '90%' }}>
      <MaterialTable
        columns={[
          { title: 'Id', field: 'id' },
          { title: 'First Name', field: 'first_name' },
          { title: 'Last Name', field: 'last_name' },
          { title: 'Email', field: 'email' },
          { title: 'Gender', field: 'gender' },
          { title: 'IP Address', field: 'ip_address' },
        ]}
        data={customerData}
        title="Customer Data"
        options={{
          headerStyle: {
            background: 'cyan',
          },
          rowStyle: {
            background: 'goldenrod',
          },
        }}
        localization={{
          pagination: {
            nextAriaLabel: 'next',
            previousAriaLabel: 'prev',
          },
        }}
      />
    </div>
  );
}
