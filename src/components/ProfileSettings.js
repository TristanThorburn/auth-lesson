import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function ProfileSettings() {
  const { currentUser } = useAuth();
  return (
    <div className='profileSettings'>

      {currentUser
          ? <h2>Profile Settings For: {currentUser.email}</h2>
          : null
      }

      <p>Under Construction</p>

      <div><Link to='/'>Return to DashBoard</Link></div>

    </div>
  )
}
