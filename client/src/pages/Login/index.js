import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Row, Col } from 'antd';
import { EyeTwoTone, MailTwoTone } from '@ant-design/icons';

import './Login.less';

const Login = (props) => {
  const onFinish = async (values) => {};

  return (
    <>
      <div className="main-container">
        <Row justify="center" align="middle">
          <Col>
            <Row
              type="flex"
              align="middle"
              justify="center"
              className="px-3 bg-white mh-page"
              style={{ minHeight: '100vh' }}
            >
              <div
                style={{
                  maxWidth: '500px',
                  zIndex: 2,
                  minWidth: '300px',
                  backgroundColor: 'white',
                  padding: '2rem',
                  boxShadow: '2px 3px 5px 0px rgba(38,7,4,0.39)',
                }}
              >
                <div className="text-center mb-5">
                  <Link to="/signin">
                    {/*  eslint-disable-next-line */}
                    <Row>
                      <Col className="text-center">
                        <img className="gnp_logo" src="/images/text-logo.png" alt="Logo" style={{ width: '60px' }} />
                      </Col>
                    </Row>
                  </Link>

                  <h2 className="mb-0 mt-3">Sign in</h2>

                  <p className="text-muted">Login to Dashboard</p>
                </div>

                <Form layout="vertical" onFinish={onFinish}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!',
                      },
                    ]}
                  >
                    <Input prefix={<MailTwoTone style={{ fontSize: '16px' }} />} type="email" placeholder="Email" />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Password!',
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<EyeTwoTone style={{ fontSize: '16px' }} />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>

                  <Form.Item name="remember" valuePropName="checked" initialValue={true}>
                    <Button type="primary" htmlType="submit" block style={{ marginTop: '1rem' }}>
                      Log in
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
