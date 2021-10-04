import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TeCard from '../TeCard/TeCard';

const Teachers = () => {
    const [cardes, setCardes] = useState([])
    useEffect(() => {
        fetch('./teachers.JSON')
            .then(res => res.json())
            .then(data => setCardes(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="container">
                <h1 className="fw-bold text-center m-5 main-title">Our Teachers</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        cardes.map(card => <TeCard
                            key={card.id}
                            card={card}></TeCard>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Teachers;


