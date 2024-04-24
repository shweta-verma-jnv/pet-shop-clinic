import React from 'react'
import { useState } from 'react';
import './Signin.css'
import {FaPaperPlane} from 'react-icons/fa/';
const Signin = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
 
  return (
    <div className='signin'>
      <form>
        <label for="email">Email Address:</label>
        <input type="email" placeholder='Your Email Address' id="email" onChange={(event)=>{setEmail(event.target.value)}} required/><br/>
        <label for="pswd">Password:</label>
        <input type="password" placeholder='Enter Your Password' id="pswd" onChange={(event)=>{setPassword(event.target.value)}} required/><br/>
        <button type="submit">Sign in <FaPaperPlane/></button>
      </form>
    </div>
  )
}

export default Signin;