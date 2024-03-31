import axios from "axios";
import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";

function CustomerView() {
    const { id } = useParams();
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7092/api/Reservation`)
            .then(res => setRestaurants(res.data))
            .catch(err => console.log(err));
    }, []);

    // const handleDelete = (id) => {
    //     const confirmDelete = window.confirm("Would you like to delete?");
    //     if (confirmDelete) {
    //         axios.delete(`https://localhost:7092/api/Restaurant_Details/${id}`)
    //             .then(res => {
    //                 setRestaurants(restaurants.filter(restaurant => restaurant.restaurant_Id !== id));
    //             })
    //             .catch(err => console.log(err));
    //     }
    // };

    return (
        <>
            <h1>Customer Details</h1> <Link to="/adminhome" className="btn btn-primary m-1">Back</Link>
            <div className="d-flex flex-column  align-items-center backgroundcolorset vh-100">
                <div className="w-100 rounded bg-dark border shadow p-4">
                    <div className="d-flex justify-content-end">
                        {/* <Link to="/admincreate" className="btn btn-sm btn-success">Add +</Link> */}
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Reservation ID</th>
                                <th>Customer Id</th>
                               
                                <th>Date</th>
                                <th>Time</th>
                                <th>No Of Tables</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                restaurants.map((restaurant, index) => (
                                    <tr key={index}>
                                        <td>{restaurant.reqId}</td>
                                        <td>{restaurant.customer_Id}</td>
                                        
                                        
                                        <td>{restaurant.date}</td>
                                        <td>{restaurant.time}</td>
                                        <td>{restaurant.noOfTables}</td>
                                        
                                        <td>
                                            {/* <Link to={`/adminread`} className="btn btn-info m-1">View Details</Link>
                                            <Link to={`/adminupdate/:id`} className="btn btn-primary m-1">Edit Details</Link> */}
                                            {/* <button onClick={() => handleDelete(restaurant.reqId)} className="btn btn-danger m-1">Delete</button> */}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default CustomerView;