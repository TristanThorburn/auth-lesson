import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signUp, currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit (e) {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)        
    }

  return (
    <div className="signUp"> 
        <form action="" onSubmit={handleSubmit}>

            <h2>Sign Up</h2>
            
            {currentUser
                ? <div>Logged in as: {currentUser.email}</div>
                : null
            }

            {error
                ? <div className='authError'>{error}</div>
                : null
            }

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

            <button type="submit" disabled={loading || currentUser}>Create Account</button> 

        </form>

        <div>
            <p>Already have an account? <Link to="/login">Log In</Link></p>
        </div>
    </div>
  )
}
