// import logo from './logo.svg';
// import './App.css';

import axios from 'axios'
import Login from './Login.js';
import Home from './Home.js';
import SignUp from './SignUp.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import  {Toaster} from 'react-hot-toast'

axios.defaults.baseURL='https://backend-ou2k.onrender.com'
// axios.defaults.baseURL='http://localhost:8000'
axios.defaults.withCredentials=true
function App() {
  return (
    <div>

      <Router>
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

export default App;
