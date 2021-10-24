import React from 'react';

import Layout from '@Components/Layout/MainLayout';
import TNRTable from '@Components/TNRTable';

const Banks = () => {
  return (
    <div>
      <Layout>
        <h1 className="page-title">Banks</h1>
        <TNRTable />
      </Layout>
    </div>
  );
};

export default Banks;
