import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '.././store';


function Signin() {

  const dispatch = useDispatch();
  const history = useNavigate();
  const[ Inputs,setInputs]= useState({
    email: '',
    userName: '',
    password: '',
  })
  const change=(e) =>{
    const { name, value}= e.target;
    setInputs({...Inputs, [name]: value});
  
  } 
  const submit=async (e) =>{
     e.preventDefault();
      await axios
      .post("http://localhost:1001/api/v1/signin",Inputs)
      .then((response) =>{
         sessionStorage.setItem("id", response.data.others._id);
         dispatch(authActions.login());
         history("/todo");

      setInputs({
        email: '',
        password: '',
      });

     });
   
  }
  return (

    <div >
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Signin</h3>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type="email"  placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'
         name='email'
         onChange={change}
         value={Inputs.email}
        />
    </div>
    
    
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input type="text"  placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none' 
         name='password'
         onChange={change}
         value={Inputs.password}
        />
    </div>
    <div className='mt-4 space-y-2'>
        <button className='btn w-24 bg-pink-500'onClick={submit}>Signin</button>
    </div>
  </div>
   </dialog>

    </div>

  )
}

export default Signin
