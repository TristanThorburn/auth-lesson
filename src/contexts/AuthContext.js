import React, { useContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase';
import { getAuth } from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);

    async function signUp (email, password) {
        return await createUserWithEmailAndPassword(auth, email, password);
    }

    async function logIn (email, password) {
        return await signInWithEmailAndPassword(auth, email, password);
    }

    async function logOut(){
        signOut(auth)
    }

    async function resetPassword(email){
        return await sendPasswordResetEmail(auth, email)
    }

    useEffect( () => {
        
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            setLoading(false)
        });
        return unsubscribe
    }, [])
    
    const value = {
        currentUser,
        signUp,
        logIn,
        logOut,
        resetPassword,
    }

  return (
    <div>
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>  
    </div>
  )
}
