import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import Layout from "../components/Layout/Layout";

import { Card, Button } from 'react-bootstrap';


function BookingView() {
   const[orderhistory,setorderhistory]=useState([]);
    useEffect(()=>{
        axios.post('https://localhost:7092/api/Reservation/Findorderhistory',{
         customer_Id:Cookies.get('Customerid')
      })
      .then(res => {
        setorderhistory(res.data)
       console.log(res.data);
  })    
  .catch(err => console.log(err));
      },[])
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Would you like to delete?");
        if (confirmDelete) {
            try {
                await axios.delete(`https://localhost:7092/api/Reservation/DeleteReservation/${id}`);
                const updatedRestaurants = orderhistory.filter(restaurant => restaurant.reqId !== id);
                setorderhistory(updatedRestaurants);
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        
        //    <>
        //    <h1>order</h1>
        //    </>

                <Layout>
                    <h1>Booking Cart</h1>
                    <Link to="/home" className="btn btn-primary m-1">Back</Link>
                    <div className="cart-container">
                        {orderhistory.map((restaurant, index) => (
                            <Card key={index} className="m-2" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Reservation ID: {restaurant.reqId}</Card.Title>
            
                                    <Card.Text>Date: {restaurant.date}</Card.Text>
                                    <Card.Text>Time: {restaurant.time}</Card.Text>
                                    <Card.Text>No Of Tables: {restaurant.noOfTables}</Card.Text>
                                    <Button onClick={() => handleDelete(restaurant.reqId)} variant="danger" className="m-1">Cancel booking</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Layout>
                
            );
        }
        
    
export default BookingView;