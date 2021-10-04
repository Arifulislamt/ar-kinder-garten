import React from 'react';
import './Header.css';
import logo from '../../images/logo-kinderlab-white.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <div className="MenuBar-container">
      {/* <div className="container"> */}
        <div className="row">
          <div className="col-md-2">
            <div className="logo-img">
              <img className="w-100 m-3" src={logo} alt="" />
            </div>
          </div>
          <div className="col-md-10">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                <Link to="/home" className="items">
                  <li>HOME</li>
                </Link>
                <Link to="/courses" className="items">
                  <li>COURSES </li>
                </Link>
                <Link to="/teachers" className="items">
                  <li>TEACHERS</li>
                </Link>
                <Link to="/about" className="items">
                  <li>ABOUT US</li>
                </Link>
                <Link to="contact" className="items">
                  <li>CONTACT US</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
    );
};

export default Header;