import React from 'react'
import { Link } from "react-router-dom";
import Banner from "../images/HomeImage.jpg";
function Homepage() {
  return (
   
      
            <div className="d-flex flex-column  align-items-center  vh-100" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="w-100 rounded bg-dark border shadow p-4">
                    <div className="d-flex justify-content-end">
                        <Link to="/login" className='text-white m-2'>LogIn</Link>
                        <Link to="/signup"className='text-white m-2'>SignUp</Link>
                        {/* <Link to="/restaurantmenu" className="btn btn-sm btn-success">Add +</Link> */}
                        {/* <Link to="/adminhome" className="btn btn-primary ">Back</Link> */}
                    </div>
                
                </div>

   </div>
  )
}

export default Homepage
