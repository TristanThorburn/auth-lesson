import React, { useContext, useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    async function signUp (auth, email, password) {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect( () => {
        const monitorAuthState = async () => {
            onAuthStateChanged(user => {
            setCurrentUser(user);
            })
        }

        return monitorAuthState;
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
