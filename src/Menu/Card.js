import axios from "axios";
import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import '../styles/Card.css';

function Card() {
    // const { id } = useParams();
    const [restaurants, setRestaurants] = useState([]);
    console.log(restaurants);
    useEffect(() => {
        axios.get('https://localhost:7092/api/Menu/')
            .then(res => setRestaurants(res.data))
            .catch(err => console.log(err));
         
    }, []);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Would you like to delete?");
        if (confirmDelete) {
            axios.delete(`https://localhost:7092/api/Menu/`)
                .then(res => {
                    setRestaurants(restaurants.filter(restaurant => restaurant.menuId !== id));
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <>
            <h1>List of Menus</h1>
            <div className="d-flex flex-column  align-items-center backgroundcolorset vh-100">
                <div className="w-100 rounded bg-dark border shadow p-4">
                    <div className="d-flex justify-content-end">
                        <Link to="/menu" className="btn btn-sm btn-success">Add +</Link>
                        <Link to="/adminhome" className="btn btn-primary m-1">Back</Link>
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
                    <div key={restaurant.menuID} className="menu-item">
                        {/* <Link to="/menu" className="btn btn-sm btn-success">Add +</Link> */}
                        {/* <button onClick={() => handleDelete(restaurant.menuId)} className="btn btn-danger m-1">Delete</button> */}

                        <div className="panel-header">
                            <h2>{restaurant.name}</h2>
                        </div>
                        <div className="panel-body">
                            <img src={restaurant.imageUrl}  />
                        </div>
                        <div className="panel-footer">
                          
                            <p>Price: {restaurant.price}</p>
                            {/* <button className="btn btn-lg" type="button">View Details</button> */}
                        </div>
                    </div>
                ))}
            </div> 
            </div>
        </>
    );
}

export default Card;