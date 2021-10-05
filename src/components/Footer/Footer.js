import React from 'react';
import './Footer.css';
import logo from '../../images/logo-kinderlab-white.png';

const Footer = () => {
    return (
        <div className="footer-costom p-5 mt-5 mb-3">
            <div className="costom-fimg d-flex justify-content-center">
                <img className="" src={logo} alt="" />
            </div>
            <div className="d-flex justify-content-center mt-2 costom-hobar">
            <a href="!#"><i className="fab fa-facebook-square fa-2x m-2 costom-hobar"></i></a>
            <a href="!#"><i className="fab fa-twitter-square fa-2x m-2 costom-hobar" ></i></a>
            <a href="!#"><i className="fab fa-pinterest-square fa-2x m-2 costom-hobar" ></i></a>
            <a href="!#"><i className="fab fa-linkedin fa-2x m-2 costom-hobar" ></i></a>
            <a href="!#"><i className="fab fa-youtube-square fa-2x m-2 costom-hobar"></i></a>
            </div>
            <div className="footer mt-5">
                <p className="text-white text-center"><small>© Copyright 2021 All Rights Reserved- Kindergarten</small></p>
            </div>
            </div>
    )};

export default Footer;