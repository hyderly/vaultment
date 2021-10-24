import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';

import './Header.less';

const propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

const defaultProps = {
  children: null,
  style: {},
};

const Header = (props) => {
  const { children, style } = props;

  return (
    <div className={'headerWrapper'}>
      <Layout.Header className={'header'} style={style}>
        {children}
      </Layout.Header>
    </div>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
