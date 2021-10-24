import React from 'react';

import Layout from '@Components/Layout/MainLayout';
import TNRTable from '@Components/TNRTable';

const Deposit = () => {
  return (
    <div>
      <Layout>
        <h1 className="page-title">Recent File</h1>
        <TNRTable />
      </Layout>
    </div>
  );
};

export default Deposit;
