import React from 'react';

import Layout from '@Components/Layout/MainLayout';
import TNRTable from '@Components/TNRTable';

import { useGetAllUsers } from '@RcQuery/userHooks';

const Home = () => {
  return (
    <Layout>
      <h1 className="page-title">Dashboard</h1>
      {/* <TNRTable /> */}
    </Layout>
  );
};

export default Home;
