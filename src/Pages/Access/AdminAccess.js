import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const AdminAccess = ({children}) => {
    const {isAdmin, logOut, loading,setLoading} = useContext(AuthContext);

    const navigate = useNavigate();

    if(loading){
        return <div>Loading....</div>
    }

    if(!isAdmin){
        logOut()
            .then(() => { 
              setLoading(false);
              navigate('/login')
             })
            .catch(error => console.error(error))
        
    }
    return children;
};

export default AdminAccess;