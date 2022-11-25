/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner from '../../../images/banner.jpg';
import banner2 from '../../../images/banner2.jpg';
import banner3 from '../../../images/banner3.jpg';
import './Banner.css';
const Banner = () => {
    return (
   <div>
       <Carousel>
                <div className='carouselParent'>
                    <img src={banner} />
                   <div className='carouselChild'>
                   <h2 className=' top-0 left-0 transform- text-white font-bold text-5xl mb-3 text-[#FF4848] uppercase'>Your Dream Car here </h2>
                   <p className='text-white text-xl text-[#FAB637]'>
                   Automobiles are marketed under the brands BMW, Mini and Rolls-Royce, and motorcycles are marketed under the brand BMW Motorrad. In 2017, BMW was the world's fourteenth-largest producer of motor vehicles, with 2,279,503 vehicles produced.[2] The company has significant motor-sport history, especially in touring cars, sports cars, and the Isle of Man TT.
                   </p>
                   </div>
                </div>
                <div className='carouselParent'>
                    <img src={banner2} />
                   <div className='carouselChild'>
                   <h2 className=' top-0 left-0 transform- text-white font-bold text-5xl mb-3 text-[#FF4848] uppercase'>Your Dream Car here </h2>
                   <p className='text-white text-xl text-[#FAB637]'>
                   Automobiles are marketed under the brands BMW, Mini and Rolls-Royce, and motorcycles are marketed under the brand BMW Motorrad. In 2017, BMW was the world's fourteenth-largest producer of motor vehicles, with 2,279,503 vehicles produced.[2] The company has significant motor-sport history, especially in touring cars, sports cars, and the Isle of Man TT.
                   </p>
                   </div>
                </div>
                <div className='carouselParent'>
                    <img src={banner3} />
                   <div className='carouselChild'>
                   <h2 className=' top-0 left-0 transform- text-white font-bold text-5xl mb-3 text-[#FF4848] uppercase'>Your Dream Car here </h2>
                   <p className='text-white text-xl text-[#FAB637]'>
                   Automobiles are marketed under the brands BMW, Mini and Rolls-Royce, and motorcycles are marketed under the brand BMW Motorrad. In 2017, BMW was the world's fourteenth-largest producer of motor vehicles, with 2,279,503 vehicles produced.[2] The company has significant motor-sport history, especially in touring cars, sports cars, and the Isle of Man TT.
                   </p>
                   </div>
                </div>
            </Carousel>
   </div>
    );
};

export default Banner;