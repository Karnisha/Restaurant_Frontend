import React from 'react';
import axios from 'axios';
import {
  BiHome,
  BiBookAlt,
  BiMessage,
  BiSolidReport,
  BiStats,
  BiTask,
  BiHelpCircle
} from 'react-icons/bi';
import '../styles/AdminHome.css'
import Layout from '../components/Layout/Layout';
import { NavLink ,useNavigate,Link} from 'react-router-dom';

function AdminHome() {
  const navigate1= useNavigate();
  // const navigate2=useNavigate();
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    
    
      navigate1('/adminview');
      // Handle success, e.g., redirect to dashboard
   
  };
  const navigate2 = useNavigate();
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    
    
      navigate2('/card');
      // Handle success, e.g., redirect to dashboard
   
  };
  const navigate3 = useNavigate();
  const handleSubmit3 = async (e) => {
    e.preventDefault();
    
    
      navigate3('/customerview');
      // Handle success, e.g., redirect to dashboard
   
  };
  return (
    <>
      <div className='row'>
      <div className="d-flex justify-content-end bg-dark p-3">
                    
                    <h3 className="text-white m-2 justify-content-start">RESTAURANTS</h3>
                    <div className="d-flex justify-content-start">
                    <Link to="/login" className="btn btn-primary m-1 justify-content-end">Back</Link>
                    </div>
         </div>
        <div className='col-2 menu'>
        <div className="menu--list">
            <a href="#" className='item'>
                <BiHome className='icon' />
                Dashboard
            </a>
            <a href="#" className='item' onClick={handleSubmit1}>
                <BiTask className='icon'/>
                Restaurant Details
            </a>
            <a href="#" className='item' onClick={handleSubmit3}>
                <BiSolidReport className='icon' />
                Customer Details
            </a>
            <a href="/card" className='item' onClick={handleSubmit2}>
                <BiStats className='icon'/>
                Menu Details
            </a>
            {/* <a href="#" className='item'>
                <BiMessage className='icon'/>
                Logout
            </a>
            <a href="#" className='item'>
                <BiHelpCircle className='icon'/>
                Help
            </a> */}
            
            
        </div>
        </div>
        <div className='col-10'>

        </div>

      </div>
      
    </>
  )
}

export default AdminHome;
