import '../styles/index.scss';
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import DashBoard from './DashBoard';
import LogIn from './LogIn';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<DashBoard />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<LogIn />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </AuthProvider>
      </Router>    
    </div>
  );
}

export default App;
