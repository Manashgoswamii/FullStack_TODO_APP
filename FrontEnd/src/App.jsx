import About from "./components/About"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Todo from "./components/Todo"
import { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { authActions } from './store';
function App() {
  const dispatch = useDispatch();
   useEffect(() =>{
    const id= sessionStorage.getItem('id');
    if(id){
      dispatch(authActions.login());
    }
   
   },[])
  return(
    <>
    <Navbar/>
    <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/todo" element={<Todo/>} />
        {/* <Route path="/signin" element={<Signin/>} /> */}
        <Route path="/signup" element={<Signup/>} />

    </Routes>
    <Footer/>
  
    
    </>
  )
    
}

export default App
