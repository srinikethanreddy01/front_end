// import logo from './logo.svg';
// import './App.css';

import axios from 'axios'
import Login from './Login.js';
import Home from './Home.js';
import SignUp from './SignUp.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import  {Toaster} from 'react-hot-toast'


axios.defaults.baseURL='https://backend-ou2k.onrender.com'
axios.defaults.withCredentials=true
function App() {
  return (
    <div>

      <Router>
      <nav style={navStyle}>
          <Link to="/home" style={linkStyle}>Home</Link>
          <Link to='/' style={linkStyle}>Login</Link>
          <Link to='/signup' style={linkStyle}>SignUp</Link>
      </nav>
      <Toaster position='bottom-right' toastOptions={{duration:2000}}></Toaster>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
      
      
    </div>
  );
}
const navStyle = {
  background: '#333',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '10px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '8px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  textAlign: 'center',
  transition: 'background-color 0.3s ease',
  textTransform: 'uppercase',
};

export default App;
