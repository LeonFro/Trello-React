import React from 'react';

function Header(props) {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" >{props.storage.name}</a>
        </nav>
    )
}
export default Header;