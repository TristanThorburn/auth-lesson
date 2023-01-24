import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
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
        } catch(error) {
            setError(error.message)
        }
        setLoading(false)        
    }

  return (
    <div className='forgotPassword'> 
        <form action='' onSubmit={handleSubmit}>

            <h2>Reset Password</h2>

            {message
                ? <div>{message}</div>
                : null
            }

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

            <button type='submit' disabled={loading}>Reset Password</button>

            <div><Link to='/login'>Log In</Link></div> 

        </form>

        <div>
            <p>Need an account? <Link to='/signup'>Sign Up</Link></p>
        </div>
    </div>
  )
}