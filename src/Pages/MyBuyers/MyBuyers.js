import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const MyBuyers = () => {
    const {accType} = useContext(AuthContext);
    const navigate = useNavigate();
    
    if(accType !== 'Seller'){
        navigate('/')
    };

    return (
        <div className='flex-1 w-full h-screen flex justify-center items-center'>
            <h1 className='text-5xl text-blue-500 font-serif'>This is my buyers page</h1>
        </div>
    );
};

export default MyBuyers;