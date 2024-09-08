import React from 'react'
import { FaBook } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';


function Navbar() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const logout= () =>{
         sessionStorage.clear("id");
         dispatch( authActions.logout());
  };
 
  return (
    <>
    <div>
        <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    {/* <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div> */}
    <a className="btn btn-ghost text-xl text-pink-600"><FaBook /> TODO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-2">
      <li><Link  to='/'>Home</Link></li>
      <li><Link  to='/about'>About US</Link></li>
     
      <li><Link to='/todo'>Todo</Link></li>
    </ul>
  </div>
  {
    !isLoggedIn && <>
      <div className=" space-x-2 ">
      <a className="btn" onClick={ () =>
         document.getElementById("my_modal_3").showModal()
      }>SignIn</a>
      <Signin/>
      {/* <Link className="btn" to='/signup'>SignUp</Link> */}
      <a className="btn" onClick={ () =>
         document.getElementById("my_modal_4").showModal()
      }>SignUp</a>
      <Signup/>
    </div>
    </>
  
  }
  {
    isLoggedIn &&<>
      <div>
      <Link className="btn"
        onClick={logout} 
       to='/' >LogOut</Link>
      </div>
      </>
  }
 
  
</div>
      
    </div>
    </>
  )
}

export default Navbar
