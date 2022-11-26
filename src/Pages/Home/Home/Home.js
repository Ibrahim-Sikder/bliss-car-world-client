import React from 'react';
import Banner from '../Banner/Banner';
import DreamCar from '../DreamCar/DreamCar';
import SpecialSection from '../SpecialSection/SpecialSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SpecialSection></SpecialSection>
            <DreamCar></DreamCar>
        </div>
    );
};

export default Home;