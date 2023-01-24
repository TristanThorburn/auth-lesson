import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function LogIn() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { logIn } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit (e) {
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await logIn(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch {
            setError('Failed to log in')
        }
        setLoading(false)        
    }

  return (
    <div className='logIn'> 
        <form action='' onSubmit={handleSubmit}>

            <h2>Log In</h2>

            {error
                ? <div className='authError'>{error}</div>
                : null
            }

            <div>
                <label htmlFor='email'>Email</label>
                <input 
                    type='text' 
                    name='email'
                    id='email' 
                    ref={emailRef} 
                    required />
            </div>    
            
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type='password'
                    name='password' 
                    id='password' 
                    ref={passwordRef} 
                    required />
            </div>

            <button type='submit' disabled={loading}>Log In</button>

            <div className='forgotPassword'><Link to='/forgot-password'>Forgot Password?</Link></div> 

        </form>

        <div>
            <p>Need an account? <Link to='/signup'>Sign Up</Link></p>
        </div>
    </div>
  )
}