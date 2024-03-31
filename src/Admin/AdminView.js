// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link,useParams } from "react-router-dom";

// function AdminView() {
//     const { id } = useParams();
//     const [restaurants, setRestaurants] = useState([]);
//     useEffect(() => {
//         axios.get(`https://localhost:7092/api/Restaurant_Details/Restaurant/1`)

//             .then(res => setRestaurants(res.data))
            
//             .catch(err => console.log(err));
//     }, []);

//     // const handleDelete = (id) => {
//     //     const confirmDelete = window.confirm("Would you like to delete?");
//     //     if (confirmDelete) {
//     //         axios.delete(`https://localhost:7092/api/Restaurant_Details/${id}`)
//     //             .then(res => {
//     //                 setRestaurants(restaurants.filter(restaurant => restaurant.restaurant_Id !== id));
//     //             })
//     //             .catch(err => console.log(err));
//     //     }
//     // };

//     return (
//         <>
//             <h1>List of Restaurants</h1>
//             <div className="d-flex flex-column  align-items-center backgroundcolorset vh-100">
//                 <div className="w-100 rounded bg-dark border shadow p-4">
//                     {/* <div className="d-flex justify-content-end">
//                         {/* <Link to="/restaurantmenu" className="btn btn-sm btn-success">Add +</Link> */}
//                     {/* </div>  */}
//                     <div className="d-flex justify-content-start">
//                     <Link to="/adminhome" className="btn btn-primary m-1 justify-content-end">Back</Link>
//                     </div>
//                     <table className="table table-striped">
//                         <thead>
//                             <tr>
//                                 <th>Restaurant ID</th>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Contact Number</th>
//                                 <th>Password</th>
//                                 <th>Location</th>
//                                 <th>Type</th>
//                                 <th>Cuisine</th>
//                                 <th>Total Tables</th>
//                                 <th>Status</th>
//                                 <th>personal Email</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 restaurants.map((restaurant, index) => (
//                                     <tr key={index}>
//                                         <td>{restaurant.restaurant_Id}</td>
//                                         <td>{restaurant.restaurant_Name}</td>
//                                         <td>{restaurant.email_Id}</td>
//                                         <td>{restaurant.contactNumber}</td>
//                                         <td>{restaurant.password}</td>
//                                         <td>{restaurant.location}</td>
//                                         <td>{restaurant.type}</td>
//                                         <td>{restaurant.cuisine}</td>
//                                         <td>{restaurant.totalTables}</td>
//                                         <td>{restaurant.status}</td>
//                                         <td>{restaurant.personal_Email}</td>
//                                         <td>
//                                              {/* <Link to={`/adminread`} className="btn btn-info m-1">View Details</Link> */}
//                                             <Link to={`/updatedisplay`} className="btn btn-primary m-1">Edit Details</Link> 
//                                             {/* <button onClick={() => handleDelete(restaurant.restaurant_Id)} className="btn btn-danger m-1">Delete</button> */}
//                                         </td>
//                                     </tr>
//                                 ))
//                             }
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default AdminView;


import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function AdminView() {
     const { id } = useParams();
    const [restaurants, setRestaurants] = useState([]);
    const [error, setError] = useState(null);
    console.log(restaurants);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://localhost:7092/api/Restaurant_Details/Restaurant/1`);
                console.log(restaurants);
                setRestaurants(res.data);
            } catch (err) {
                console.log(err);
                setError(err.message);
            }
        };
        fetchData();
    }, [1]);
    // useEffect(() => {
    //     axios.get('https://localhost:7092/api/Restaurant_Details/Restaurant/2')
        
    //         .then(res => setRestaurants(res.data))
    //         .catch(err => console.log(err));
         
    // }, []);


    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <h1>List of Restaurants</h1>
            <div className="d-flex flex-column  align-items-center backgroundcolorset vh-100">
                <div className="w-100 rounded bg-dark border shadow p-4">
                    <div className="d-flex justify-content-start">
                        <Link to="/adminhome" className="btn btn-primary m-1 justify-content-end">Back</Link>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Restaurant ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact Number</th>
                                <th>Password</th>
                                <th>Location</th>
                                <th>Type</th>
                                <th>Cuisine</th>
                                <th>Total Tables</th>
                                <th>Status</th>
                                <th>personal Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody >  
                              <tr>
                                        <td>{restaurants.restaurant_Id}</td>
                                        <td>{restaurants.restaurant_Name}</td>
                                        <td>{restaurants.email_Id}</td>
                                        <td>{restaurants.contactNumber}</td>
                                        <td>{restaurants.password}</td>
                                        <td>{restaurants.location}</td>
                                        <td>{restaurants.type}</td>
                                        <td>{restaurants.cuisine}</td>
                                        <td>{restaurants.totalTables}</td>
                                        <td>{restaurants.status}</td>
                                        <td>{restaurants.personal_Email}</td>
                                        <td>
                                            <Link to={`/updatedisplay`} className="btn btn-primary m-1">Edit Details</Link> 
                                        </td>
                                        </tr>    
                                
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default AdminView;
