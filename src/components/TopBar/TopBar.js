import React from 'react';

import './TopBar.css';
import logo from '../../Images/B2CSlogo.png';
const TopBar = props => {
    return (
        <div className="topBar">
            <div className="topBar_left">
                <img 
                    className="topBar_logo"
                    src={logo}
                    alt=""
                />
            </div>
            <div className="topBar_center">
                <ul className="topBar_list">
                    <li className="topBar_listItems">HOME</li>
                    <li className="topBar_listItems">ABOUT</li>
                    <li className="topBar_listItems">PROGRAMS</li>
                    <li className="topBar_listItems">CONTACT US</li>
                </ul>
            </div>
            <div className="topBar_right">
                <i className="topBar_icon fa-brands fa-facebook"></i>
                <i className="topBar_icon fa-brands fa-instagram-square"></i>
                <i className="topBar_icon fa-brands fa-twitter-square"></i>
            </div>
        </div>
    );
};

export default TopBar;