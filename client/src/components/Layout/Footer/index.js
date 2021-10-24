import React from 'react';
// import PropTypes from 'prop-types';

import classes from './style.module.less';

const Footer = (props) => {
  // const { } = props;

  return (
    <footer className={classes.footer}>
      <div>
        <strong className="text-primary">Vaultment</strong>
        <span> 2021 © All Rights Reserved.</span>
      </div>
      <div className="ml-auto">
        <span>Powered by </span>
        <strong className="text-primary">Vaultment</strong>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  // classes: PropTypes.object.isRequired,
};

Footer.defaultProps = {
  // classes: {},
};

export default Footer;
