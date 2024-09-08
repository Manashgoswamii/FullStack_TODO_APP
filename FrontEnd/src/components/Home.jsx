import React from 'react'
import banner from "../../public/banner3.jpg"

function Home() {
  return (
    <>
    <div className=' p-6  flex'>
         <div className='w-[50%] mt-48 justify-center'>
         <h1 className='text-4xl font-bold'>Organise your <br/> work and life,finally .</h1>
         {/* <br/> */}
         <p  className='text-xl font-normal'>become focused ,organise, and calm with <br/>todo App. Worlds No1 task manager app.</p>
        <button className='bg-pink-500 text-white w-48 mt-4 p-2 rounded-2xl'>Get Started</button>
         </div>
         <div className='w-[50%]  justify-center'>
                <img src={ banner} alt='todo-app' className='w-[400px]' />
         </div>
    </div>
    </>
  )
}

export default Home
