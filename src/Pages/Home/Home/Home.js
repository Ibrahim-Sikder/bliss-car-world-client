import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories/Categories';
import DreamCar from '../DreamCar/DreamCar';
import SpecialSection from '../SpecialSection/SpecialSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <SpecialSection></SpecialSection>
            <DreamCar></DreamCar>
        </div>
    );
};

export default Home;