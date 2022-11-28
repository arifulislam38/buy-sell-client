import React from 'react';
import banner from '../../assets/banner.jpg';
import { FaArrowDown } from 'react-icons/fa';

const Banner = () => {
    return (
        <section className='w-[93%] h-[80vh] mx-auto relative mb-10 rounded'>
            <img className='w-full h-full rounded' src={banner} alt="" />
            <div className='absolute top-0 w-full h-full bg-gray-600 bg-opacity-20'></div>
            <div className='w-full h-full absolute top-0 grid place-items-center'>
                <h1 className='lg:text-7xl sm:text-5xl font-semibold font-serif w-[70%] leading-[80px]'><span className='text-white'>Swap your laptop with updated one.</span> <br /> <span className='text-black'>No need to <br /> hesitate</span></h1>
                <FaArrowDown className='text-4xl bg-blue-400 rounded-full text-black'></FaArrowDown>
            </div>
            
        </section>
    );
};

export default Banner;