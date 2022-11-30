import React from 'react';
import Lottie from 'react-lottie';
import { Link, useRouteError } from 'react-router-dom';
import * as animationData from './error.json';

const ErrorPage = () => {
    const error = useRouteError();

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      width: 'full'
    //   rendererSettings: {
    //     preserveAspectRatio: 'xMidYMid slice'
    //   }
    };
    
    return (
        <div className='w-full h-screen grid lg:grid-cols-2 items-center justify-center px-10 gap-5'>
            <div><Lottie options={defaultOptions}></Lottie></div>
            <div>
                {error && (

                <h2 className='text-7xl font-semibold font-serif'><span className='text-red-700'>{error.status}</span> <span>{error.statusText}</span></h2>

            )}
            <p className='font-semibold text-xl mt-4'>To return to the home page <Link className='text-blue-700 underline' to='/'>Click Here</Link></p>
            </div>
        </div>
    );
};

export default ErrorPage;