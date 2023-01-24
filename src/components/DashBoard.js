import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
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
    <div className='dashboard'>
      <div className='profile'>
        <h2>User Dashboard</h2>

        {currentUser
            ? <div>Email: {currentUser.email}</div>
            : null
        }

        {error
            ? <div className='authError'>{error}</div>
            : null
        }

        <div><Link to='/update-profile'>Update Profile</Link></div>

        <div><Link to='*'>Error Page Test Link</Link></div>

        <button onClick={handleLogOut}>Log Out</button>
      </div>
    </div>
  )
}
