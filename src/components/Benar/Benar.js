import React from 'react';
import './Baner.css';
import Header from '../Header/Header';


const Benar = () => {
    return (
            <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
        <Header></Header>
          <div className=" header-title">
            <h1 className="title">BEST EDUCATION <br />MAKES A BETTER LIFE</h1>
            <p className="text-white fw-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="mt-3 about-btn fw-bold">About Us</button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
    );
};

export default Benar;