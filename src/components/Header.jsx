import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand">{props.name}</a>
  </nav>
);
Header.propTypes = {
  name: PropTypes.string.isRequired
};
Header.defaultProps = {
  name: 'Annon'
};
export default Header;
