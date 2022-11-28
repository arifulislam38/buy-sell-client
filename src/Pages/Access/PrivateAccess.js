import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const PrivateAccess = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return  <div>Loading......</div>
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace={true} />
    }

    return children;
};

export default PrivateAccess;