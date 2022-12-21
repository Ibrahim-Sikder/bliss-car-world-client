import React from 'react';
import work from '../../../images/work.jpg';
import work1 from '../../../images/work2.jpg';
import work2 from '../../../images/work3.jpg';
const Work = () => {
    return (
        <div className='bg-[#0E0F20]'>
           <div className=' w-1/2 mx-8 mb-10'>
           <h3 className='text-[#066B45] text-xl'>Works</h3>
           <h1 className='text-white text-3xl font-bold'>Our Works</h1>
           <p className='text-white text-xl mt-5'>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc condimentum risus id. Aquam mattis magna facilisi</p>
           </div>
          <div className='grid md:grid-cols-2 sm:grid-cols-1'>
            <div>
                <img src={work} alt="work" />
            </div>
            <div className='bg-[#333787] p-24'>
            <p className='text-[#2985BF]'>DELIVERY SERVICE - ECOMMERCE</p>
            <h2 className='text-white my-10  text-5xl f-bold'>We have developed an Android app for fast grocery delivery</h2>
            <span className='text-white'>Commodo element sed imperdiet nunc euismod etiam aliquet viverra enim ipiscing nun condimen risus id. Aquam mattis</span> <br />
            <button className="btn btn-outline border-white mt-8 text-white">See case study</button>
           </div>
          </div>
          <div className='grid md:grid-cols-2 sm:grid-cols-1'>
           
            <div className='bg-[#343657] p-24'>
            <p className='text-[#2985BF]'>Ai - DEVELOPMENT</p>
            <h2 className='text-white my-10  text-5xl f-bold'>We have developed an audio platform with smart advertising</h2>
            <span className='text-white'>Commodo element sed imperdiet nunc euismod etiam aliquet viverra enim ipiscing nun condimen risus id. Aquam mattis</span> <br />
            <button className="btn btn-outline border-white mt-8 text-white">See case study</button>
           </div>
           <div>
                <img src={work2} alt="work" />
            </div>
          </div>
          <div className='grid md:grid-cols-2 sm:grid-cols-1'>
            <div>
                <img src={work1} alt="work" />
            </div>
            <div className='bg-[#333787] p-24'>
            <p className='text-[#2985BF]'>DELIVERY SERVICE - ECOMMERCE</p>
            <h2 className='text-white my-10  text-5xl f-bold'>We have developed an Android app for fast grocery delivery</h2>
            <span className='text-white'>Commodo element sed imperdiet nunc euismod etiam aliquet viverra enim ipiscing nun condimen risus id. Aquam mattis</span> <br />
            <button className="btn btn-outline border-white mt-8 text-white">See case study</button>
           </div>
          </div>
        </div>
    );
};

export default Work;