import React, { useContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import app from '../firebase';
import { getAuth } from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const auth = getAuth(app);

    async function signUp (email, password) {
        return await createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect( () => {
        
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            console.log(user)
        });
        return unsubscribe
    }, [])
    
    const value = {
        currentUser,
        signUp,
    }

  return (
    <div>
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>  
    </div>
  )
}
