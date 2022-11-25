import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/car1.jpg';
import img2 from '../../../images/car2.jpg';
import img3 from '../../../images/car3.jpg';
import img4 from '../../../images/car4.jpg';
import './Footer.css';
// import { BsFacebook } from "react-icons/fa/BsFacebook";
const Footer = () => {
    return (
       <div>
         <footer className="footer p-10 text-white bg-[#232628]">
        <div className=''>
            <h2 className='uppercase'> <strong className='text-[#6C96DB]'>Motors </strong> dealership</h2>
            <p>As the leading dealer in Chicago, we are <br /> confident that we will save you time and <br /> money. Motors is ultimate Automotive, <br /> Car Dealer WordPress theme.</p>
        </div> 
        <div className=''>
            <span className="text-white uppercase">Photo gallery </span> 
            <div className=' flex'>
                <img className='w-16' src={img} alt="" />
                <img className='w-16' src={img2} alt="" />
                <img className='w-16' src={img3} alt="" />
                <img className='w-16' src={img4} alt="" />
            </div>
        </div> 
        <div className=''>
            <span className="text-white uppercase">LATEST BLOG POSTS</span> 
            <p>The Tesla Model S isn t the first truly <br /> autonomous car on the road... <br />
            </p>
            <Link>Comment here</Link>
            
        </div> 
        <div className=''>
            <span className="text-white uppercase">Legal</span> 
            <Link>Facebook</Link>
            <Link>Instragram</Link>
            <Link>Twitter</Link>
            <Link>LinkedIn</Link>
            

        </div>
        </footer>
        <footer className="footer p-10 footerBorder text-white bg-[#232628]">
        
        <div className=''>
            <h2 className='uppercase'> Subscribe </h2>
          <input type="text" className='p-3' placeholder="Enter your email" />
          <p>Get latest updates and offers</p>
        </div> 
        <div className=''>
            <span className="text-white uppercase">SALES HOURS</span> 
            <p>Monday - Friday: 09.00am-09.00pm</p>
            <p>Monday - Friday: 09.00am-09.00pm</p>
            <p>Monday - Friday: 09.00am-09.00pm</p>
            
        </div> 
        <div className=''>
            <span className="text-white uppercase">SERVICE HOURS</span> 
            <p>Monday - Friday: 09.00am-09.00pm</p>
            <p>Monday - Friday: 09.00am-09.00pm</p>
            <p>Monday - Friday: 09.00am-09.00pm</p>
            
        </div> 
        <div className=''>
            <span className="text-white uppercase">PARTS HOURS</span> 
             <p>Monday - Friday: 09.00am-09.00pm</p>
            <p>Monday - Friday: 09.00am-09.00pm</p>
            <p>Monday - Friday: 09.00am-09.00pm</p>
            

        </div>
        
        </footer>
       
       </div>
    );
};

export default Footer;