import SignUp from "./SignUp";
import '../styles/index.scss';
import { AuthProvider } from "../contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <h1>Hello World</h1>
        <SignUp />
      </AuthProvider>  
    </div>
  );
}

export default App;
