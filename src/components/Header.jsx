import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" >{props.name}</a>
        </nav>
    )
};

Header.propTypes = {
    name: PropTypes.string.isRequired,
};

 Header.defaultProps = {
     name: "Annon"
 };
export default Header;