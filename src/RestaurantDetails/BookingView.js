import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import Layout from "../components/Layout/Layout";

import { Card, Button } from 'react-bootstrap';


function BookingView() {
    const [customerID, setCustomerID] = useState('');
    const [restaurants, setRestaurants] = useState([]);
    const customerIDFromCookie = Cookies.get('CustomerID');
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch the customer's ID from cookies
                const customerIDFromCookie = Cookies.get('CustomerID');
                setCustomerID(customerIDFromCookie);

                const response = await axios.get(`https://localhost:7092/api/Reservation`, {
                    params: {
                        customer_Id: customerIDFromCookie
                    }
                });
                setRestaurants(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [customerIDFromCookie]);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Would you like to delete?");
        if (confirmDelete) {
            try {
                await axios.delete(`https://localhost:7092/api/Reservation/${id}`);
                const updatedRestaurants = restaurants.filter(restaurant => restaurant.reqId !== id);
                setRestaurants(updatedRestaurants);
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
    
           
                <Layout>
                    <h1>Booking Cart</h1>
                    <Link to="/home" className="btn btn-primary m-1">Back</Link>
                    <div className="cart-container">
                        {restaurants.map((restaurant, index) => (
                            <Card key={index} className="m-2" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Reservation ID: {restaurant.reqId}</Card.Title>
                                    <Card.Text>Customer Id: {restaurant.customer_Id}</Card.Text>
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
        };
        
    
export default BookingView;