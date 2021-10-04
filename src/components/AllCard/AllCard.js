import React from 'react';

const AllCard = (props) => {
    const {images, courses, price, details}=props.card;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={images} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{courses}</h5>
                    <p className="card-text">Cours Price: ${price}</p>
                    <p className="card-text">{details}</p>
                </div>
                <div className="card-footer text-center fw-bold">
                    <small className="text-muted ">View Details</small>
                </div>
            </div>
        </div>
    );
};

export default AllCard;