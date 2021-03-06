import React from 'react';
import {NavLink} from 'react-router-dom';
import {PropTypes} from 'prop-types';

class Header extends React.Component {
    render() {
        const loginButton = (<li>
            <NavLink to ="/login">
                <i className="material-icons">vpn_key</i>
            </NavLink>
        </li>);

        const logoutButton = (<li>
            <NavLink to ="/logout">
            <i className="material-icons">lock_open</i>
            </NavLink>
        </li>);
        
        return (
            <nav>
                <div className="nav-wrapper blue darken-1">
                    <NavLink to = "/" className="brand-logo center">MEMOPAD</NavLink>

                    <ul>
                        <li><a><i className="material-icons">search</i></a></li>
                    </ul>

                    <div className="right">
                        <ul>
                           {this.props.isLoggedIn ? logoutButton : loginButton}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

Header.propTypes = {
    isLoggedIn:PropTypes.bool,
    onLogout:PropTypes.func
}

Header.defaultProps = {
    isLoggedIn : false,
    onLogout: () => {console.error("logout function n ot defined");}
};

export default Header;