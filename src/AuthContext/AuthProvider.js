
import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);// must use app
const Googleprovider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [accType, setAccType] = useState('');
    const [isAdmin, setIsAdmin] = useState(true);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

     const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, Googleprovider);
    };

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe =onAuthStateChanged(auth, currentUser =>{
            
            fetch(`${process.env.REACT_APP_API}/admin?email=${currentUser?.email}`)
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    setAccType(data?.data?.type)
                    if(data?.data?.role ==='admin'){
                        setIsAdmin(true)
                    }else{
                        setIsAdmin(false)
                    }
                    
                }
            } );
            setUser(currentUser);
            setLoading(false);
            console.log('user observing',currentUser);
            console.log('admin current',isAdmin,accType)
        });

        return () => unsubscribe();
    }, [isAdmin,accType]);

    const authInfo = {
        createUser,
        signIn,
        googleLogin,
        updateUser,
        logOut,
        user,
        loading,
        setLoading,
        isAdmin,
        setIsAdmin,
        accType
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;