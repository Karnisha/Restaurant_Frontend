import axios from "axios";
import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import '../styles/Card.css';

function CustomerRestaurant() {
    const [date,setDate]=useState()
    const [time,setTime]=useState(new Date().getHours()+":00-"+(Number(new Date().getHours())+1)+":00")
    const [datetime,setDateTime]=useState({
        date: new Date().getFullYear()+"-"+(Number(new Date().getHours())+1)+"-"+new Date().getDate(),
        time: new Date().getHours()+":00-"+"1:00"
      })
    const [restaurants, setRestaurants] = useState([]);
    console.log(restaurants);
    useEffect(() => {
        
        axios.post(`https://localhost:7092/api/GettAllRestaurant`,datetime)
            .then(res => {setRestaurants(res.data);console.log(res)})
            .catch(err => console.log(err));
        console.log(new Date().getHours())
        console.log(new Date().getDate())
        console.log(new Date().getMonth()+1)
        console.log(new Date().getFullYear())
         
    }, []);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      
        navigate('/booking');
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
            {/* <h1>List of Menus</h1> */}
            <div className="d-flex flex-column  align-items-center backgroundcolorset vh-100">
                <div className="w-100 rounded bg-dark border shadow p-4"> 
                    <div className="d-flex justify-content-end">
                    
                    <h3 class="text-white bg-dark m-2">RESTAURANTS</h3>
                    <div className="d-flex justify-content-start">
                    <Link to="/home" className="btn btn-primary m-1 justify-content-end">Back</Link>
                    </div>
                    
                    
                   
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
                    <div key={restaurant.restaurant_Id} className="menu-item" onClick={handleSubmit}>
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
                
                            {/* <button className="btn btn-lg" type="button">View Details</button> */}
                        </div>
                    </div>
                ))}
            </div> 
            </div>
        </>
    );
}

export default CustomerRestaurant;