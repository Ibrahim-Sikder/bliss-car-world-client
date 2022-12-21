import React from 'react';
import img from '../../images/heroImg/hero.png';
const About = () => {
    return (
        <div className='py-32 bg-[#333787] text-white'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl mb-5 font-bold">Find your dream mobile !</h1>
                        <p>
                        obil is a petroleum brand owned and operated by American oil and gas corporation ExxonMobil. The brand was formerly owned and operated by an oil and gas corporation of the same name, which itself merged with Exxon to form ExxonMobil in 1999.

A direct descendant of Standard Oil, Mobil was originally known as the Standard Oil Company of New York (shortened to Socony) after Standard Oil was split into 34 different entities in a 1911 Supreme Court decision. Socony merged with Vacuum Oil Company, from which the Mobil name first originated, in 1931 and subsequently renamed itself to Socony-Vacuum Oil Company. Over time, Mobil became the company's primary identity, which incited another renaming in 1963, this time to Mobil Corporation. Mobil credits itself with being the first company to introduce paying at the pump at its gas stations, the first company to produce jet aviation fuel, as well as the first company to introduce a mobile payment device, today known as Speedpass.[2][3]


                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;