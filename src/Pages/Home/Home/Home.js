import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories/Categories';
import ElectricCars from '../Categories/ElectricCar/ElectricCars';
import MicrobusCars from '../Categories/MicrobusCar/MicrobusCars';
import DreamCar from '../DreamCar/DreamCar';
import SpecialSection from '../SpecialSection/SpecialSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <MicrobusCars></MicrobusCars>
            <ElectricCars></ElectricCars>
            <SpecialSection></SpecialSection>
            <DreamCar></DreamCar>
        </div>
    );
};

export default Home;