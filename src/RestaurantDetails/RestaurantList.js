import axios from "axios";
import { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import '../styles/Card.css';

function RestaurantList() {
    const [restaurants, setRestaurants] = useState([]);
    console.log(restaurants);
    useEffect(() => {
        axios.get('https://localhost:7092/api/Restaurant_Details')
            .then(res => setRestaurants(res.data))
            .catch(err => console.log(err));
         
    }, []);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      
        navigate('/updatedisplay');
        // Handle success, e.g., redirect to dashboard
     
    };

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
            <h1>Restaurant</h1>
            <div className="d-flex flex-column  align-items-center backgroundcolorset vh-100">
                <div className="w-100 rounded bg-dark border shadow p-4">
                    <div className="d-flex justify-content-end">
                        {/* <Link to="/restaurantmenu" className="btn btn-sm btn-success">Add +</Link> */}
                        <Link to="/adminhome" className="btn btn-primary ">Back</Link>
                    </div>
                    {/* <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Menu ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Menu Image</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                restaurants.map((restaurant, index) => (
                                    <tr key={index}>
                                        <td>{restaurant.menuID}</td>
                                        <td>{restaurant.name}</td>
                                        <td>{restaurant.price}</td>
                                        <td>{restaurant.menuImage}</td>
                                       
                                        
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    */}
                
                </div>

                <div className="menus-container panel panel-default text-center">
                {restaurants.map((restaurant) => (
                    <div key={restaurant.restaurant_Id} className="menu-item">
                        <div className="panel-header">
                            <h2>{restaurant.restaurant_Name}</h2>
                        </div>
                        <div className="panel-body">
                            <img src={restaurant.imageUrl}  />
                        </div>
                        <div className="panel-footer">
                          
                            <p>Email Id: {restaurant.email_Id}</p>
                            <p>Contact Number: {restaurant.contactNumber}</p>
                            <p>Location: {restaurant.location}</p>
                            <p>Type: {restaurant.type}</p>
                            <p>Cuisine: {restaurant.cuisine}</p>
                            <p>TotalTables: {restaurant.totalTables}</p>
                
                            {/* <button className="btn btn-primary" type="button" onClick={handleSubmit}>View Details</button> */}
                        </div>
                    </div>
                ))}
            </div> 
            </div>
        </>
    );
}

export default RestaurantList;