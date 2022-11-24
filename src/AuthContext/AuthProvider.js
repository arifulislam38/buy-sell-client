// import React, { createContext, useEffect, useState } from 'react';
// import app from '../Firebase/firebase.config';
// import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';


// export const AuthContext = createContext();

// const auth =getAuth(app);
// const Googleprovider = new GoogleAuthProvider();


// const AuthProvider = ({children}) => {

//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect( () =>{
//         const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            
//             setUser(currentUser);
//             setLoading(false);
//         });

//         return () =>{
//             return unsubscribe();
//         }
//     }, []);

//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
//     };

//     const login = (email, password) =>{
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);
//     };

//     const googleLogin = () =>{
//         setLoading(true)
//         return signInWithPopup(auth, Googleprovider);
//     };

//     const updateUser = (name, image) =>{
//         setLoading(true)
//         return updateProfile(auth.currentUser,{displayName: name, photoURL: image});
//     }

//     const logOut = () =>{
//         localStorage.removeItem('genius-token');
//         return signOut(auth);
//     };

//     const authinfo = {
//         loading,
//         setLoading,
//         user,
//         createUser,
//         login,
//         googleLogin,
//         updateUser,
//         logOut
//     };
//     return (
//         <AuthContext.Provider value={authinfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;









import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);// must use app
const Googleprovider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(null);
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

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            
            fetch(`${process.env.REACT_APP_API}/admin?email=${currentUser?.email}`)
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    setIsAdmin(data?.data?.role)
                }
            } );
            setUser(currentUser);
            setLoading(false);
            console.log('user observing',currentUser);
        });

        return () => unsubscribe();
    }, [isAdmin])

    const authInfo = {
        createUser,
        signIn,
        googleLogin,
        updateUser,
        logOut,
        user,
        loading,
        setLoading,
        isAdmin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;