import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <h1 className='text-4xl text-yellow-100 font-semibold mb-4'>Ops! An Error Occured!!</h1>
            {error && (

                <h2 className='text-2xl font-semibold'><span className='text-red-700'>{error.status}</span> <span>{error.statusText}</span></h2>

            )}
            <p className='font-semibold text-xl mt-4 text-yellow-50'>To return to the home page <Link className='text-blue-700 underline' to='/'>Click Here</Link></p>
        </div>
    );
};

export default ErrorPage;