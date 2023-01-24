import '../styles/index.scss';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import LogIn from './LogIn';
import ErrorPage from './ErrorPage';
import ProfileSettings from './ProfileSettings';
import PrivateRoutes from './PrivateRoutes';
import ForgotPassword from './ForgotPassword';

function App() {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route exact path='/' element={<Dashboard />} />
              <Route path='/update-profile' element={<ProfileSettings />} />
            </Route>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </AuthProvider>
      </Router>    
    </div>
  );
}

export default App;
