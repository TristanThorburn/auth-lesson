import React, { useContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    

    async function signUp (auth, email, password) {
        return await createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect( () => {
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
