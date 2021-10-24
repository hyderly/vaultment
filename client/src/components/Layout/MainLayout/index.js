import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Image, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import { Layout, BackTop } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import Sidebar from '@Components/Layout/Sidebar';
import Header from '@Components/Layout/Header';
import Footer from '@Components/Layout/Footer';
import AvatarDropDown from '@Components/AvatarDropDown';

import './MainLayout.less';

const { Content, Sider } = Layout;

const propTypes = {
  children: PropTypes.any,
};

const defaultProps = {
  children: null,
};

const MainLayout = (props) => {
  const { children } = props;

  const [collapsed, setCollapsed] = useState(false);
  const [mobiShow, setMobiShow] = useState(false);
  const [broken, setBroken] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url) => {
      setMobiShow(false);
    };
  }, []);

  const handleToggle = () => {
    if (broken) {
      setMobiShow(!mobiShow);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <>
      <Layout
        style={{
          minHeight: '100vh',
        }}
        className="root"
      >
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed && !broken}
          className="sidebar"
          breakpoint="lg"
          onBreakpoint={(val) => {
            setBroken(val);
            if (val) {
              setCollapsed(false);
              setMobiShow(false);
            }
          }}
          style={{
            left: broken && !mobiShow ? -200 : 0,
          }}
        >
          <Link to="/">
            <div className="logo">
              <img src="/images/logo.png" alt="Logo" width={35} height={35} />
              {!collapsed && <span>Vaultment</span>}
            </div>
          </Link>
          <Sidebar />
        </Sider>
        <Layout
          className={'siteLayout'}
          style={{
            paddingLeft: broken ? 0 : collapsed ? 80 : 200,
          }}
        >
          <Header
            style={{
              left: broken ? 0 : collapsed ? 80 : 200,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: handleToggle,
            })}
            {broken && (
              <Link to="/">
                <div className={'logoCenter'}>
                  <Image src="/images/logo.png" alt="Logo" width={35} height={35} />
                  <span>Vaultment</span>
                </div>
              </Link>
            )}
            <div className="avatar-box">
              <AvatarDropDown />
              <div className="avatar-box-text">
                <span>John Deo</span>
                <span>User</span>
              </div>
            </div>
          </Header>
          {mobiShow && broken && <div className={'overlay'} onClick={() => setMobiShow(false)} />}
          <Content
            style={{
              margin: 20,
            }}
          >
            {children}
          </Content>
          <Footer />
        </Layout>
      </Layout>
      <BackTop />
    </>
  );
};

MainLayout.propTypes = propTypes;
MainLayout.defaultProps = defaultProps;

export default MainLayout;
