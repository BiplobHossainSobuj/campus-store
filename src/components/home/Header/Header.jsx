import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <div className="navbar-container">
                <div>
                    <h3>Campus Store</h3>
                </div>
                <div className='nav-items'>
                    <a href="">Home</a>
                    <a href="">Category</a>
                    <a href="">Service</a>
                    <a href="">Contact</a>
                    <a href="">About Us</a>
                </div>
                <div>
                    <a href=""><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                    <a href=""><FontAwesomeIcon icon={faCoffee} /></a>
                    <a href=""><FontAwesomeIcon icon={faUser} /></a>
                </div>
            </div>
        </div>
    );
};

export default Header;