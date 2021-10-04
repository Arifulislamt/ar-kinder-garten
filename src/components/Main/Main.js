
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Card from '../Card/Card';
import './Main.css';

const Main = () => {
    const [cards , setCards] = useState([])
    useEffect(()=>{
        fetch("./card.JSON")
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        // title section 
        <div className="container mt-5">
            <div className="main-title">
                <h1 className="fw-bold ">Our Courses The</h1>
                <h4>Best In Our School</h4>
            </div>
            {/* main courses section  */}
            <div>
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">
                      {
                          cards.map(card => <Card 
                            key={card.id}
                            card={card}></Card>)
                      }
                    </div>
                </div>
            </div>
    );
};

export default Main;


