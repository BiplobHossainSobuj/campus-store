import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCartShopping, faCoffee, faMagnifyingGlass, faShop, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <div className="navbar-container">
                <div>
                    <h3><FontAwesomeIcon icon={faShop} /> Campus Store</h3>
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
                    <a href=""><FontAwesomeIcon icon={faCartShopping} /></a>
                    <a href=""><FontAwesomeIcon icon={faUser} /></a>
                </div>
            </div>
            <div className="banner">
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Header;