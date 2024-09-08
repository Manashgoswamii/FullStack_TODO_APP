import React from 'react'
import { MdDelete } from "react-icons/md";
import { MdChangeCircle } from "react-icons/md";
import Update from './Update';


function TodoCards( {title,body,id,delid}) {
  return (
    <>
    <div className=' relative h-56 m-2'>
      <div className='p-2'>
        <span className='text-2xl font-semibold'>{title}</span>
        <br />
        <p> {body} </p>
      </div>
      <div className=' absoute bottom-0 flex items-center justify-around'>
         <div className=' mt-24 flex justify-center items-center text-red-600 hover:shadow-2xl  hover:bg-white p-2 duration-200 cursor-pointer' onClick={() => delid(id)}><MdDelete  className='size-8'/> Delete</div>
         <div className=' mt-24 flex justify-center items-center  hover:shadow-2xl hover:bg-white p-2 duration-200 cursor-pointer' onClick={ () =>
       document.getElementById("my_modal_5").showModal()}><MdChangeCircle className='size-8'/> Update</div>
       <Update/>
      </div>
    </div>
    </>
  )
}

export default TodoCards
