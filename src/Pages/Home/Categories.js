import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import asus from '../../assets/asus.png';
import { Link } from 'react-router-dom';


const Categories = () => {
    return (
        <section className='mb-10'>
            <div className='w-full text-start px-20 mb-20'>
                <div className="divider"><h1 className='text-4xl font-semibold font-serif text-blue-700'>Categories</h1></div>
            </div>
        <div className='grid lg:grid-cols-3 gap-7 place-items-center px-10'>

            
            <div className="shadow-xl relative rounded-lg hover:scale-105 duration-500  ">
                <img className='w-full rounded-lg' src={asus} alt="Shoes" />
                <div className="rounded-lg absolute top-0  bg-opacity-70 bg-gray-800 w-full h-full flex flex-col gap-3 justify-center items-center">
                    <h2 className="text-5xl text-white font-serif font-semibold">Asus Laptop</h2>
                    <p className='text-xl font-serif text-white'>Choose your best Asus laptop from here.</p>
                    <div className="flex justify-end w-full px-5">
                        <Link to={'/category/asus'}><button className="btn-sm rounded btn-primary">View <FaArrowRight style={{display: "inline"}}></FaArrowRight></button></Link>
                    </div>
                </div>
            </div>



            <div className="shadow-xl relative rounded-lg hover:scale-105 duration-500  ">
                <img className='w-full rounded-lg' src={asus} alt="Shoes" />
                <div className="rounded-lg absolute top-0  bg-opacity-70 bg-gray-800 w-full h-full flex flex-col gap-3 justify-center items-center">
                    <h2 className="text-5xl text-white font-serif font-semibold">HP Laptop</h2>
                    <p className='text-xl font-serif text-white'>Choose your best HP laptop from here.</p>
                    <div className="flex justify-end w-full px-5">
                        <Link to={'/category/hp'}><button className="btn-sm rounded btn-primary">View <FaArrowRight style={{display: "inline"}}></FaArrowRight></button></Link>
                    </div>
                </div>
            </div>



            <div className="shadow-xl relative rounded-lg hover:scale-105 duration-500  ">
                <img className='w-full rounded-lg' src={asus} alt="Shoes" />
                <div className="rounded-lg absolute top-0  bg-opacity-70 bg-gray-800 w-full h-full flex flex-col gap-3 justify-center items-center">
                    <h2 className="text-5xl text-white font-serif font-semibold">DELL Laptop</h2>
                    <p className='text-xl font-serif text-white'>Choose your best DELL laptop from here.</p>
                    <div className="flex justify-end w-full px-5">
                        <Link to={'/category/dell'}><button className="btn-sm rounded btn-primary">View <FaArrowRight style={{display: "inline"}}></FaArrowRight></button></Link>
                    </div>
                </div>
            </div>


        </div>
        </section>
    );
};

export default Categories;