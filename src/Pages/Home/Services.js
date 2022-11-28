import React from 'react';
import service from '../../assets/service.jpg';
import './service.css';

const Services = () => {
    return (
        <section className='w-[92%] mx-auto'>
            
            <div className='w-full text-start px-10 mb-20'>
                <div className="divider"><h1 className='text-4xl font-semibold font-serif text-blue-700'>Services</h1></div>
            </div>
            <div className='flex flex-col gap-5 p-4 service bg-opacity-30 rounded-md'>
                
                <div className='grid lg:grid-cols-3 gap-5'>
                    <div className='border rounded-md grid place-items-center h-40 '><h1 className='text-3xl font-serif font-semibold'>Replace</h1>
                    </div>

                    <div className='border rounded-md grid place-items-center h-40 '><h1 className='text-3xl font-serif font-semibold'>Return</h1>
                    </div>

                    <div className='border rounded-md grid place-items-center h-40 '><h1 className='text-3xl font-serif font-semibold'>Review</h1>
                    </div>
                </div>


                <div className='grid lg:grid-cols-2 gap-5'>
                    <div className='border rounded-md grid place-items-center h-40 '><h1 className='text-3xl font-serif font-semibold'>Replace</h1>
                    </div>
                    <div className='border rounded-md grid place-items-center h-40 '><h1 className='text-3xl font-serif font-semibold'>Replace</h1>
                    </div>
                </div>

                 <div className='grid lg:grid-cols-3 gap-5'>
                    <div className='border rounded-md grid place-items-center h-40 '><h1 className='text-3xl font-serif font-semibold'>Replace</h1>
                    </div>

                    <div className='border rounded-md grid place-items-center h-40 '><h1 className='text-3xl font-serif font-semibold'>Return</h1>
                    </div>

                    <div className='border rounded-md grid place-items-center h-40 '><h1 className='text-3xl font-serif font-semibold'>Review</h1>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Services;