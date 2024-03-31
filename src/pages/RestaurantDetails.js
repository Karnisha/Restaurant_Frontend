import React from 'react'
import Layout from '../components/Layout/Layout';
import { Link } from "react-router-dom";


function RestaurantDetails() {
  return (
    <>
    <Layout>
    <Link to="/booking">
    <div className="col-12">
     <button  className="btn btn-primary button-set" type="submit">Booking</button>
    </div>
          </Link>
   
</Layout>
</>
  )
}

export default RestaurantDetails
