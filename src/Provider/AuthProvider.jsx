
import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";
import { auth } from '../Confige/Fairbase';


export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const [userr, setuser] = useState(null)
    const [loding, setloding] = useState(true)

    const Googleprovider = new GoogleAuthProvider()


    const createuser = (email, password) => {
        setloding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Signin = (email, password) => {
        setloding(true)

        return signInWithEmailAndPassword(auth, email, password)

    }
    const logout = () => {
        setloding(true)
        return signOut(auth)

    }

    // Google sector 

    const googlelogin = (value) =>{

        console.log(value);
            setloding(true)
            return   signInWithPopup(auth, Googleprovider)

    } 


  

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log('use this is a auth ')
            setuser(currentuser)
            setloding(false) 


        });
        return () => {
           return unsubscribe();
        };

    }, [])


    const authInfo = {
        userr,
        createuser,
        Signin,
        logout,
        googlelogin,
        loding

        
    }








    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );




};

export default AuthProvider;