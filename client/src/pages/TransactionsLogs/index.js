import React from 'react';

import Layout from '@Components/Layout/MainLayout';
import TNRTable from '@Components/TNRTable';

const TransactionsLogs = () => {
  return (
    <div>
      <Layout>
        <h1 className="page-title">Transactions Logs</h1>
        <TNRTable />
      </Layout>
    </div>
  );
};

export default TransactionsLogs;
