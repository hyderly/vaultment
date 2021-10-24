import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Row, Col, DatePicker, Upload, message } from 'antd';
import { EyeTwoTone, MailTwoTone, SmileTwoTone, UploadOutlined, PhoneTwoTone } from '@ant-design/icons';

import './Signup.less';

const Signup = (props) => {
  const onFinish = async (values) => {
    props.history.push('/');
  };

  const onChange = (info) => {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

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
                  width: '350px',
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

                  <h2 className="mb-0 mt-3">Sign up</h2>

                  <p className="text-muted">Signup to Vaultment </p>
                </div>

                <Form layout="vertical" onFinish={onFinish}>
                  <Form.Item
                    label="Profile Image"
                    name="profileImage"
                    rules={[
                      {
                        required: true,
                        message: 'Please add your profie Image!',
                      },
                    ]}
                  >
                    <Upload {...props}>
                      <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                  </Form.Item>

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
                    label="First Name"
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your First Name!',
                      },
                    ]}
                  >
                    <Input
                      prefix={<SmileTwoTone style={{ fontSize: '16px' }} />}
                      type="text"
                      placeholder="First Name"
                    />
                  </Form.Item>

                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Last Name!',
                      },
                    ]}
                  >
                    <Input prefix={<SmileTwoTone style={{ fontSize: '16px' }} />} type="text" placeholder="Last Name" />
                  </Form.Item>

                  <Form.Item
                    label="Date Of Birth"
                    name="dob"
                    rules={[
                      {
                        required: true,
                        message: 'Please select you date of birth!',
                      },
                    ]}
                  >
                    <DatePicker />
                  </Form.Item>

                  <Form.Item
                    label="Phone Number"
                    name="phoneNumber"
                    rules={[
                      {
                        required: false,
                        message: 'Please select you date of birth!',
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<PhoneTwoTone style={{ fontSize: '16px' }} />}
                      type="text"
                      placeholder="Phone Number"
                    />
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

                  <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your confirm password!',
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<EyeTwoTone style={{ fontSize: '16px' }} />}
                      type="confirmPassword"
                      placeholder="Confirm Password"
                    />
                  </Form.Item>

                  <Form.Item name="remember" valuePropName="checked" initialValue={true}>
                    <Button type="primary" htmlType="submit" block style={{ marginTop: '1rem' }}>
                      Sign up
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

export default Signup;
