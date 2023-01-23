import '../styles/index.scss';
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import DashBoard from './DashBoard';
import LogIn from './LogIn';
import ErrorPage from './ErrorPage';
import UpdateProfile from './UpdateProfile';
import PrivateRoutes from './PrivateRoutes';
import ForgotPassword from './ForgotPassword';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route exact path="/" element={<DashBoard />} />
              <Route path="/update-profile" element={<UpdateProfile />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AuthProvider>
      </Router>    
    </div>
  );
}

export default App;
