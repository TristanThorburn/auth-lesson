import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import app from '../firebase';
import { getAuth } from 'firebase/auth';


export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signUp } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = getAuth(app);

    async function handleSubmit (e) {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signUp(auth, emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)        
    }

  return (
    <div className="signUp"> 
        <form action="" onSubmit={handleSubmit}>

            <h2>Sign Up</h2>

            <div className="errorMessage">{error}</div>

            <div>
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    ref={emailRef} 
                    required />
            </div>    
            
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    ref={passwordRef} 
                    required />
            </div>

            <div>
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <input 
                    type="password" 
                    name="passwordConfirm" 
                    id="passwordConfirm" 
                    ref={passwordConfirmRef} 
                    required />
            </div>    

            <button type="submit" disabled={loading}>Create Account</button> 

        </form>

        <div>
            <p>Already have an account? Log In</p>
        </div>
    </div>
  )
}
