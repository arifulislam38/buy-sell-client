import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import './spin.css'

const PrivateAccess = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return  <div className='w-full h-screen grid place-items-center'><span class="loader"></span></div>
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace={true} />
    }

    return children;
};

export default PrivateAccess;