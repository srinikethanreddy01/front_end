import React from 'react'

import Login from './Login'
import { useState } from 'react'
import Home from './Home'
import './login.css'
import {
    Link
} from "react-router-dom"
import axios from 'axios'
import toast, { Toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
  const navigate=useNavigate()
  const [data,setData]=useState({
    name:'',
    email:'',
    password:'',
  })
  const register=async(e)=>{
    e.preventDefault();

    const {name,email,password}=data
    try{
      const {data}=await axios.post('/SignUp',{name,email,password})
      if(data.error){
        toast.error(data.error)
      }
      else{
        toast.success('Login Successfull.Welcome')
        navigate("/")
        setData({
          name:'',
          email:'',
          password:''
        })
        

        
      }
    }
    catch(error){
      console.log(error)

    }

  }
  return (
    <div class="login-container">
      <h1 style={{marginTop:"10%", textAlign:  "center"}}>SignUp</h1>
    
      
    
    <form onSubmit={register}>
      
          
        

          <label htmlFor="name">Username</label>
          <input id="name" type="text" placeholder="Username" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
          
          <label htmlFor="email">Email</label>
          <input id="email" type='email' placeholder="example.gmail.com" value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}}></input>
        
            
        
        
          <label htmlFor="password" >Password</label>
          <input id="password" type="password" placeholder="password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
        
        
          <button type="submit">Submit</button>

        
        

    </form>
    </div>
  )
}

export default SignUp
