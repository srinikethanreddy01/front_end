import React from 'react'
import "./login.css"
import Home from './Home'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate=useNavigate()
  const [data,setData]=useState({
    email:'',
    password:'',
    
  })
  const loginUser=async(e)=>{
   
    e.preventDefault();
   
    const {email,password}=data;
    console.log(email)
    

    try{
      console.log("hello");
      const {data}=await axios.post('/Login',{email,password});
      console.log(data)
      
      if(data.error){
        
        toast.error(data.error);
      }
      else{
        toast.success("successful")
        navigate("/home")

        
        
        setData=({
          email:'',
          password:''
        })
        console.log(data)
       
        
      }

    }
    catch(error){


    }
    
  }
  return (
  //   <div className="login-container">
    

  //   <form onSubmit={loginUser}>
  //   <h1>LOGIN</h1>
  //     <label htmlFor="email">Email</label>
  //     <input
  //       id="email"
  //       type="email"
  //       placeholder="Username"
  //       value={data.email}
  //       onChange={(e) => setData({ ...data, email: e.target.value })}
  //     />

  //     <label htmlFor="password">Password</label>
  //     <input
  //       id="password"
  //       type="password"
  //       placeholder="password"
  //       value={data.password}
  //       onChange={(e) => setData({ ...data, password: e.target.value })}
  //     />

  //     <button type="submit">Submit</button>
  //     <Link to="/signup">
  //       <button>SignUp</button>
  //     </Link>
  //   </form>
  // </div>
     
    <div className="login-container">
      <h1 style={{marginTop:"5%", textAlign:  "center"}}>LOGIN</h1>
    
      
    
    <form onSubmit={loginUser}>
        

      <label htmlFor="email">Email</label>
      <input id="email" type="email" placeholder="Username" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} />
      
      
  
  
      <label htmlFor="password" >Password</label>
      <input id="password" type="password" placeholder="password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
  
      <button type="submit">Submit</button>
      <Link to="/signup"><button>SignUp</button></Link>
  
        

    </form>
    </div>
  )
} 


export default Login
