import React from 'react';
import img from '../../images/404 Error with a cute animal-pana.png';
import Header from '../Header/Header';

const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <div className="footer-costom p-5 mt-5 mb-5">
                <div className="costom-fimg d-flex justify-content-center">
                    <img className="" src={img} alt="" />
                </div>
                <div className="d-flex justify-content-center mt-2 costom-hobar">
                    <h1>Oops! Page Not Found</h1>
                </div>
            </div>
        </div>
    );
};

export default NotFound;