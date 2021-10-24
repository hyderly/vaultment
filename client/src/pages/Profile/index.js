import React from 'react';

import { Descriptions, Badge, Avatar, Image, Button, Row, Col, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';

import Layout from '@Components/Layout/MainLayout';

import StripeBtn from '@Components/StripeButton';

const Profile = () => {
  return (
    <div>
      <Layout>
        <Avatar
          src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{ width: 32 }} />}
        />
        <Link to="/edit-profile">Edit Profile</Link>
        <Descriptions title="Profile Details" layout="vertical" bordered>
          <Descriptions.Item label="First Name">Haider </Descriptions.Item>
          <Descriptions.Item label="Last Name">Ali</Descriptions.Item>
          <Descriptions.Item label="Email">haider@gmail.com</Descriptions.Item>

          <Descriptions.Item label="Phone No">+1 234 1234 000</Descriptions.Item>
          <Descriptions.Item label="Date Of Birth" span={2}>
            2019-04-24 18:00:00
          </Descriptions.Item>
          <Descriptions.Item label="Status" span={3}>
            <Badge status="processing" text="Active" />
          </Descriptions.Item>
          <Descriptions.Item label="Package Detail">Plan 1</Descriptions.Item>
          <Descriptions.Item label="Monthly Charges">$1.99</Descriptions.Item>
          <Descriptions.Item label="Storage">250 GB</Descriptions.Item>
          <Descriptions.Item label="Billing Info">
            Payment Type: Debit/Credit Card
            <br />
            Card Number: 4242 4242 4242
            <br />
            Storage space: 250 GB
            <br />
            Region: US
            <br />
          </Descriptions.Item>
        </Descriptions>

        <Row gutter={16}>
          <Col span={8}>
            <Card title="Free Plan" bordered={false}>
              5GB
              <br />
              0.00
              <br />
              <StripeBtn amount={0} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Plan 1" bordered={false}>
              250GB
              <br />
              $1.99
              <br />
              <StripeBtn amount={1099} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Plan 2" bordered={false}>
              1TB
              <br />
              $3.99
              <br />
              <StripeBtn amount={3099} />
            </Card>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default Profile;
