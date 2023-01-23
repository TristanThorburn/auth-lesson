import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function DashBoard() {
  const [error, setError] = useState('')
  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();

  async function handleLogOut() {
    setError('')

    try { 
      await logOut()
      navigate('/login')
    } catch {
      setError('Failed to log out')
    }
  }

  return (
    <div className='dashBoard'>
      <div className='profile'>
        <h2>Profile</h2>

        {currentUser
                  ? <div className='profileEmail'>Email: {currentUser.email}</div>
                  : null
        }

        {error
                ? <div className='authError'>{error}</div>
                : null
            }

        <div className='updateProfile'><Link to='/update-profile'>Update Profile</Link></div>
      </div>

      <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}
