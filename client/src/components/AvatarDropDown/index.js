import React from 'react';
import PropTypes from 'prop-types';

import { Menu, Dropdown, Modal } from 'antd';
import { Link } from 'react-router-dom';

import { BiKey } from 'react-icons/bi';
import { AiOutlineLogout } from 'react-icons/ai';

import { ExclamationCircleOutlined } from '@ant-design/icons';

import Avatar from '@Components/Avatar';

import './AvatarDropDown.less';

const propTypes = {
  style: PropTypes.object,
};

const defaultProps = {
  style: {},
};

const AvatarDropDown = (props) => {
  const { style } = props;

  const auth = {
    fullName: 'Justin Woller',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  };

  const handleLogout = React.useCallback(async () => {
    Modal.confirm({
      title: 'Are you sure?',
      icon: <ExclamationCircleOutlined />,
      // content: 'Are you sure?',
      onOk: async () => {
        //logout will be here
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }, []);

  const menu = (
    <Menu className="menuDropdown">
      <div className="name">
        <Avatar size={50} src={auth.avatar} fullName="Justin Woller" />
        <div className="fullName">
          <strong>Justin Woller</strong>
          <div className="text-small">haider@gmail.com</div>
        </div>
      </div>
      <Menu.Divider />
      <Menu.Item key="change">
        <Link to="/change-password">
          <a className="item">
            <BiKey />
            <span>Change password</span>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="profile">
        <Link to="/profile">
          <a className="item">
            <AiOutlineLogout />
            <span>Profile</span>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="logout">
        <a className="item" onClick={handleLogout}>
          <AiOutlineLogout />
          <span>Logout</span>
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown style={style} overlay={menu} trigger={['click']}>
      <div style={{ lineHeight: '50px' }}>
        <Avatar
          size={30}
          src={auth.avatar}
          fullName={auth.fullName}
          style={{
            cursor: 'pointer',
          }}
        />
      </div>
    </Dropdown>
  );
};

AvatarDropDown.propTypes = propTypes;
AvatarDropDown.defaultProps = defaultProps;

export default AvatarDropDown;
