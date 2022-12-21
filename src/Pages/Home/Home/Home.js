import React from 'react';
import AdvertizeSection from '../AdvertizeSection/AdvertizeSection';

import Category from '../Category/Category';
import HeroArea from '../HeroArea/HeroArea';
import UsedMobiles from '../UsedMobiles/UsedMobiles';
import WhyLove from '../WhyLove/WhyLove';
import Work from '../Work/Work';
// import UsedMobiles from '../UsedMobiles/UsedMobiles';

const Home = () => {
    return (
        <div>
            <div>

            </div>
            <div>
                <HeroArea></HeroArea>
                <Category></Category>
                <AdvertizeSection></AdvertizeSection>
                <Work></Work>
                <WhyLove></WhyLove>
            </div>
        </div>
    );
};

export default Home;