import React from 'react';
import './Contact.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import images from '../../images/Get in touch-amico.png';

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <div className="container costom-contact mb-5">
                <h1 className="fw-bold text-center m-5 main-title">Contact Us</h1>
                <div className="row">
                    <div className="col-md-6">
                        <img src={images} className="card-img-top w-75  d-flex justify-content-center" alt="..." />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <a target_blank href="https://www.facebook.com/"><i className="fab fa-facebook-square fa-2x m-2 color-fo"></i></a>
                        <a href="https://www.twitter.com/"><i className="fab fa-twitter-square fa-2x m-2 color-fo" ></i></a>
                        <a href="https://www.linkedin.com/"><i className="fab fa-pinterest-square fa-2x m-2 color-fo" ></i></a>
                        <a href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-2x m-2 color-fo" ></i></a>
                        <a href="https://www.youtube.com/"><i className="fab fa-youtube-square fa-2x m-2 color-fo" ></i></a>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;