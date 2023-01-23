import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword, currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('')

    async function handleSubmit (e) {
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your email inbox for futher instructions')
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false)        
    }

  return (
    <div className="logIn"> 
        <form action="" onSubmit={handleSubmit}>

            <h2>Reset Password</h2>
            
            {currentUser
                ? <div>Logged in as: {currentUser.email}</div>
                : null
            }

            {message
                ? <div>{message}</div>
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

            <button type="submit" disabled={loading || currentUser}>Reset Password</button>

            <div><Link to='/login'>Log In</Link></div> 

        </form>

        <div>
            <p>Need an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    </div>
  )
}