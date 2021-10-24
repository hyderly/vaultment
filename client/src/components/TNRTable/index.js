import React from 'react';

import { Table } from 'antd';

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     filters: [
//       {
//         text: 'Joe',
//         value: 'Joe',
//       },
//       {
//         text: 'Jim',
//         value: 'Jim',
//       },
//       {
//         text: 'John',
//         value: 'John',
//       },
//     ],
//     // specify the condition of filtering result
//     // here is that finding the name started with `value`
//     onFilter: (value, record) => record.name.indexOf(value) === 0,
//     sorter: (a, b) => a.name.length - b.name.length,
//     sortDirections: ['descend'],
//   },
//   {
//     title: 'Despoit Date',
//     dataIndex: 'date',
//     sorter: {
//       compare: (a, b) => a.date - b.date,
//       multiple: 3,
//     },
//   },
//   {
//     title: 'Deposit Amount',
//     dataIndex: 'amount',
//     sorter: {
//       compare: (a, b) => a.amount - b.amount,
//       multiple: 2,
//     },
//   },
//   {
//     title: 'Status',
//     dataIndex: 'status',
//     sorter: {
//       compare: (a, b) => a.status - b.status,
//       multiple: 1,
//     },
//   },
// ];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'John',
        value: 'John',
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
    width: 200,
  },
  {
    title: 'Deposit Date',
    dataIndex: 'date',
    sorter: {
      compare: (a, b) => a.date - b.date,
      multiple: 1,
    },
    width: 200,
  },

  {
    title: 'Deposit Amount',
    dataIndex: 'amount',
    sorter: {
      compare: (a, b) => a.amount - b.amount,
      multiple: 1,
    },
    width: 200,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    sorter: {
      compare: (a, b) => a.status - b.status,
      multiple: 1,
    },
    filters: [
      {
        text: 'Approved',
        value: 'Approved',
      },
      {
        text: 'Pending',
        value: 'Pending',
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.status.indexOf(value) === 0,
    sorter: (a, b) => a.status.length - b.status.length,
    sortDirections: ['descend'],
    width: 200,
  },
];

const data = [];
const userName = ['John', 'Joe', 'Jim'];
const dispositAmounts = ['100.00', '300.00', '150.00', '120.00', '200.00'];
const statusCode = ['Approved', 'Pending'];
for (let i = 0; i < 30; i++) {
  data.push({
    key: i,
    name: userName[Math.floor(Math.random() * userName.length)],
    date: '10 Sept 2021 23:12:00',
    amount: '$' + dispositAmounts[Math.floor(Math.random() * dispositAmounts.length)],
    status: statusCode[Math.floor(Math.random() * statusCode.length)],
  });
}

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

const TNRTable = () => {
  return <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ y: 240 }} />;
};

export default TNRTable;
