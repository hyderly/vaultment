import React from 'react';

import Layout from '@Components/Layout/MainLayout';
import TNRTable from '@Components/TNRTable';

const UserQueries = () => {
  return (
    <div>
      <Layout>
        <h1 className="page-title">User Queries</h1>
        <TNRTable />
      </Layout>
    </div>
  );
};

export default UserQueries;
