import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { Menu } from 'antd';
import {
  DashboardOutlined,
  UnorderedListOutlined,
  FolderAddOutlined,
  UploadOutlined,
  PlusCircleOutlined,
  MailOutlined,
} from '@ant-design/icons';

import './SideBar.less';

const propTypes = {
  // children: PropTypes.node,
};

const defaultProps = {};

const Sidebar = (props) => {
  console.log('🚀 ~ file: index.js ~ line 23 ~ Sidebar ~ props', props);
  const location = useLocation();
  const [key, setKey] = useState('Home');

  const menuList = [
    {
      key: 'myDrive',
      name: 'My Drive',
      icon: <DashboardOutlined />,
      path: ['/'],
    },
    {
      key: 'recent',
      name: 'Recent',
      icon: <UnorderedListOutlined />,
      path: ['/'],
    },

    {
      key: 'create-folder',
      name: 'Create Folder',
      icon: <FolderAddOutlined />,
      path: ['/'],
    },
    {
      key: 'upload-files',
      name: 'Upload File',
      icon: <UploadOutlined />,
      path: ['/'],
    },
    {
      key: 'create-document',
      name: 'Create Document',
      icon: <PlusCircleOutlined />,
      path: ['/'],
    },
    {
      key: 'mail-box',
      name: 'Mail Box',
      icon: <MailOutlined />,
      path: ['/'],
    },
  ];

  const menuItemHighlight = (listItem) => {
    for (const item of listItem.path) {
      let condition = location.pathname.startsWith(item);
      if (condition) {
        setKey(listItem.key);
      }
    }
  };

  useEffect(() => {
    for (const item of menuList) {
      menuItemHighlight(item);
    }
  }, [location]);

  return (
    <Menu
      id="SideMenu"
      mode={'inline'}
      theme={'dark'}
      inlineCollapsed={false}
      defaultSelectedKeys={[`${key}`]}
      selectedKeys={[`.$${key}`]}
      style={{
        padding: '25px 0',
      }}
    >
      {React.Children.toArray(
        menuList.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <NavLink to={item.path[0]}>{item.name}</NavLink>
          </Menu.Item>
        ))
      )}
    </Menu>
  );
};

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
