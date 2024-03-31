import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function AdminRead() {
    const [restaurant, setRestaurant] = useState({});
    const { Id } = useParams();

    useEffect(() => {
        axios.get('https://localhost:7092/api/Restaurant_Details/'+Id)
            .then(res => setRestaurant(res.data))
            .catch(err => console.log(err));
    }, [Id]);

    return (
        <>
            <h1>Restaurant Details</h1>
            <div className="d-flex flex-column  align-items-center vh-100 backgroundcolorset">
                <div className="w-75 rounded bg-info border shadow p-4 ">
                    <div className="mb-2">
                        <strong>Restaurant Name: {restaurant.restaurant_Name}</strong>
                    </div><br/>
                    <div className="mb-2">
                        <strong>Email: {restaurant.email_Id}</strong>
                    </div><br/>
                    <div className="mb-2">
                        <strong>Contact Number: {restaurant.contactNumber}</strong>
                    </div><br/>
                    <div className="mb-2">
                        <strong>Password: {restaurant.password}</strong>
                    </div><br/>
                    <div className="mb-2">
                        <strong>Location: {restaurant.location}</strong>
                    </div><br/>
                    <div className="mb-2">
                        <strong>Type: {restaurant.type}</strong>
                    </div><br/>
                    <div className="mb-2">
                        <strong>Cuisine: {restaurant.cuisine}</strong>
                    </div><br/>
                    <div className="mb-2">
                        <strong>Total Tables: {restaurant.totalTables}</strong>
                    </div><br/>
                    <div className="mb-2">
                        <strong>Status: {restaurant.status}</strong>
                    </div><br/>
                    <div className="mb-2">
                        <strong>Personal Email: {restaurant.personal_Email}</strong>
                    </div><br/>
                    {/* <Link to={`/adminupdate/${Id}`} className="btn btn-success">Edit</Link> */}
                    <Link to={`/adminview/${Id}`} className="btn btn-primary ms-3">Back</Link>
                </div>
            </div>
        </>
    );
}

export default AdminRead;