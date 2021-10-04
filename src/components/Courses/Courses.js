// import React, { useState } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import AllCard from '../AllCard/AllCard';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const Courses = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('./corses.JSON')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div>
            <Header></Header>
          <div className="container">
          <h1 className="fw-bold text-center m-5 main-title">Our Courses</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    cards.map(card => <AllCard 
                        key={card.id}
                        card={card}
                        ></AllCard>)
                }
            </div>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default Courses;