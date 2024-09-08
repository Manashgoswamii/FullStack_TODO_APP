import React, { useState } from 'react'
import axios from 'axios';

function Signup() {
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
        .post("http://localhost:1001/api/v1/register",Inputs)
        .then((response) =>{
          if(response.data.message==="User already exists"){
            alert(response.data.message);
          }
          else{
            alert(response.data.message);
          }
        setInputs({
          email: '',
          userName: '',
          password: '',
        });

       });
     
    }
    return (
 
    <div >
    <dialog id="my_modal_4" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Signup</h3>
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
        <span>Username</span>
        <br />
        <input type="text"  placeholder='Enter your name' className='w-80 px-3 py-1 border rounded-md outline-none' 
         name='userName'
        onChange={change}
         value={Inputs.userName}
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
        <button className='btn w-24 bg-pink-500' onClick={submit}>Signup</button>
    </div>
  </div>
   </dialog>

    </div>

  )
}

export default Signup
