import React from 'react'

function Update() {
  return (
    <div >
    <dialog id="my_modal_5" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Update Task</h3>
    <div className='mt-4 space-y-2'>
        <span>Title</span>
        <br />
        <input type="text"  placeholder='Enter your new title' className='w-80 px-3 py-1 border rounded-md outline-none' />
    </div>
    
    
    <div className='mt-4 space-y-2'>
        <span>Body</span>
        <br />
        <textarea type="text"  placeholder='Enter your new body' className='w-80 px-3 py-1 border rounded-md outline-none' />
    </div>
    <div className='mt-4 space-y-2'>
        <button className='btn w-24 bg-pink-500'>Update</button>
    </div>
  </div>
   </dialog>

    </div>

  )
}

export default Update
