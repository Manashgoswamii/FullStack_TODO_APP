import React, { useEffect, useState } from 'react'
import TodoCards from './TodoCards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
// import { MdDelete } from "react-icons/md";
// import { MdChangeCircle } from "react-icons/md";
let id = sessionStorage.getItem('id');

function Todo() {
    const [Inputs, setInputs] = useState({title: '', body: ''});
    const [Array, setArray] = useState([]);
    const change =(e) => {
        const { name, value}= e.target;
        setInputs({...Inputs, [name]: value});
    };
 
    const submit =async() =>{
        if(Inputs.title===" "||Inputs.body===""){
          toast.error('Title and body should not be empty!');
        }
        else{
          if(id){
            await axios.post("http://localhost:1001/api/v2/addTask",{
              title: Inputs.title,
              body: Inputs.body,
              id: id,
            }).then( (response)=>{

              console.log(response);
            });
            // setArray([...Array,Inputs]);
        setInputs({ title: "",body: '' });
        toast.success('Task added successfully');

          }
        else{
          setArray([...Array,Inputs]);
        setInputs({ title: "",body: '' });
        toast.success('Task added successfully');
        toast.error('Your task is not saved! please signup.')
        }
        }
    };
    const del= async(cardid) =>{
        if(id){
          await axios
           .delete(`http://localhost:1001/api/v2/deleteTask/${cardid}`,{data:
             {id:id}},)
          .then((response)=>{
            toast.success('Task is deleted!');
          })
        }
        else{
          toast.error('Please signup first');
        }
      

        // Array.splice(id,'1');
        // setArray([...Array]);
      
    };
    useEffect( () =>{
      if(id){const fetch = async() =>{
        await axios.get(`http://localhost:1001/api/v2/getTasks/${id}`)
       .then((response) => {
           setArray(response.data.list);
        });

    }
    fetch();}
      else{
        toast.error('Please signup first');
      }
    },[submit]);

  return (
    <div className='w-[100%] justify-center'>
      <ToastContainer />
      <div className=' flex  justify-center mt-6'>
        <div  className=' w-96 mt-6 justify-center flex-col space-y-2 border rounded-md shadow-lg'>
            <span className=' p-2 text-xl font-semibold '>Title</span>
            <br/>
            <input type='text' placeholder='Enter the Title' className=' flex w-80  p-2 rounded-md outline-none'
                 name="title"
                 value={Inputs.title}
                 onChange={change}
            />
            <span className=' p-2 text-xl font-semibold '>Body</span>
            <br/>
            <textarea type='text' placeholder=' Enter Body' className='  flex w-80  rounded-md p-2 outline-none'
                 name="body"
                 value={Inputs.body}
                 onChange={change}
            />
            <br/>
            <div className='mb-4'>
            <button className=' w-full mb-2 h-10 text-white font-semibold rounded-md bg-pink-500 hover:bg-pink-700' onClick={submit}>Add Todo</button>
         </div>

        </div>
         
      </div>
      {/* showing cards */}
      <div className=' ml-4 mt-28'>
          <div className=' flex-col  grid grid-cols-3 gap-4 '>
            
            {
                Array && Array.map((item,index) =>{
                    return(
                      <>
                    <div className='w-96 h-64 shadow-lg overflow-scroll bg-amber-50'>
                        <TodoCards title={item.title} body={item.body} id={item._id} delid={ del }/>
                    </div>
                    {/* <div className='  bottom-0 flex items-center justify-around'>
                    <div className=' flex justify-center items-center text-red-600'><MdDelete  className='size-8'/> Delete</div>
                    <div className='flex'><MdChangeCircle /> Update</div>
                 </div> */}
                 </>
                )
                })
            }
           
          </div>
      </div>
    </div>
  )
}

export default Todo
