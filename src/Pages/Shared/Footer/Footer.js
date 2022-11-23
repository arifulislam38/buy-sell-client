import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
<footer className=' mt-5 bg-[#021B29]'>
    <div className= "p-9"> 
        <div className="w-[90%] mx-auto">
            <div className="lg:flex justify-between items-center">
                <div className="">
                    <div className="text-start">
                        <p className="mb-2 text-xl text-gray-200">Click to Join </p>
                        <h2 className='text-5xl text-gray-300 font-serif'>In photography session</h2>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <button className='p-4 text-xl bg-orange-300 rounded'><Link to='/login'>Join Now</Link></button>
                    </div>
                </div>
            </div>
        </div>
        <hr className='mt-16'/>
    </div>
    
        <div className=" text-gray-300 text-start">
            <div className="w-[80%] mx-auto py-8">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 mb-6">


                    <div className="text-xl font-serif">
                        <div className="flex flex-col gap-5">
                           <h1 className='text-5xl text-orange-300'>Marriage photo</h1>
                            <div className="">
                                <h6 className='text-orange-300'>Office Address</h6>
                                <p>London Oxford Street, 012 United Kingdom.</p>
                            </div>
                            <div className="">
                                <h6 className='text-orange-300'>Business Phone</h6>
                                <p>+012 3456 7890</p>
                            </div>
                            <div className="">
                                <h6 className='text-orange-300'>Business Email</h6>
                                <p>Business@photo.com</p>
                            </div>

                           
                        </div>
                    </div>


                    
                        <div className="text-xl font-serif">
                            <h4 className="mb-8 text-orange-300 text-2xl">Footer Menu</h4> 
                            <ul className='flex flex-col gap-3'>
                                <li className='border-b-2 border-gray-600 py-2'><FaAngleRight className='text-orange-500 inline'></FaAngleRight> Case Studies</li>
                                <li className='border-b-2 border-gray-600 py-2'><FaAngleRight className='text-orange-500 inline'></FaAngleRight> About Us</li>
                                <li className='border-b-2 border-gray-600 py-2'><FaAngleRight className='text-orange-500 inline'></FaAngleRight> Our Story</li>
                                <li className='border-b-2 border-gray-600 py-2'><FaAngleRight className='text-orange-500 inline'></FaAngleRight> Blog Post</li>
                                <li className='border-b-2 border-gray-600 py-2'><FaAngleRight className='text-orange-500 inline'></FaAngleRight> Work with Us</li>
                            </ul>
                        </div>
                    


                    
                        <div className="text-xl font-serif flex flex-col gap-3">
                            <h4 className="text-2xl text-orange-300 mb-8">Working Day &amp; time</h4>
                            <p>Architecto beatae vitae dicta sunt ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                            <ul className='flex flex-col gap-3'>
                                <li><span>Mon - Tus : </span>6.00 am - 10.00 pm</li>
                                <li><span>Wed - Tur : </span>8.00 am - 6.00 pm</li>
                                <li><span>Friday : </span>3.00 pm - 8.00 pm</li>
                                <li><span>Sunday : </span>Closed</li>
                            </ul>
                        </div>
                    
                </div>

                <div className="text-center p-5">
                    <p>Copyright © 2019 photography- All Rights Reserved. Made by learnEdu</p>
                </div>
            </div>
        </div>
    </footer>
        
    );
};

export default Footer;