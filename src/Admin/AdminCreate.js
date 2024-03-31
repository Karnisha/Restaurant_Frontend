import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Layout/Header";

function AdminCreate() {
    const [values, setValues] = useState({
        Restaurant_Name: '',
        Email_Id: '',
        ContactNumber: '',
        Password: '',
        Location: '',
        Type: '',
        Cuisine: '',
        TotalTables: 0,
        Status: 'waiting for approval',
        Personal_Email: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            axios.post('https://localhost:7092/api/Restaurant_Details', values)
                .then(res => {
                    console.log(res);
                    window.alert("Restaurant Added successfully")
                    navigate('/adminview');
                })
                .catch(err => console.log(err));
        }
    }

    const validateForm = () => {
        let isValid = true;
        let errors = {};

        if (!values.Restaurant_Name.trim()) {
            errors.Restaurant_Name = 'Restaurant Name is required';
            isValid = false;
        }

        if (!values.Email_Id.trim()) {
            errors.Email_Id = 'Email is required';
            isValid = false;
        }

        if (!values.ContactNumber.trim()) {
            errors.ContactNumber = 'Contact Number is required';
            isValid = false;
        }

        if (!values.Password.trim()) {
            errors.Password = 'Password is required';
            isValid = false;
        }

        if (!values.Location.trim()) {
            errors.Location = 'Location is required';
            isValid = false;
        }

        if (!values.Type.trim()) {
            errors.Type = 'Type is required';
            isValid = false;
        }

        if (!values.Cuisine.trim()) {
            errors.Cuisine = 'Cuisine is required';
            isValid = false;
        }

        if (values.TotalTables <= 0) {
            errors.TotalTables = 'Total Tables should be greater than 0';
            isValid = false;
        }
        
        if (!values.Personal_Email.trim()) {
            errors.Personal_Email = 'Email is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    }

    return (
      <>
         <h1>RESTAURANT MANAGEMENT SYSTEM</h1>
        <div className="d-flex w-100 vh-100 justify-content-center backgroundcolorset">
            <div className="w-50 border  border-black shadow bg-white px-5 pt-3 pb-5 rounded border-set ">
                <h3>Add Restaurant</h3><br/>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="name">Restaurant Name:</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter Restaurant Name"
                            value={values.Restaurant_Name}
                            onChange={e => setValues({ ...values, Restaurant_Name: e.target.value })}
                            required
                        />
                        {errors.Restaurant_Name && <div className="text-danger">{errors.Restaurant_Name}</div>}
                    </div><br/>
                    <div className="mb-2">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter Email"
                            value={values.Email_Id}
                            onChange={e => setValues({ ...values, Email_Id: e.target.value })}
                            required
                        />
                        {errors.Email_Id && <div className="text-danger">{errors.Email_Id}</div>}
                    </div><br/>
                    <div className="mb-2">
                        <label htmlFor="contact">Contact Number:</label>
                        <input
                            type="text"
                            name="contact"
                            className="form-control"
                            placeholder="Enter Contact Number"
                            value={values.ContactNumber}
                            onChange={e => setValues({ ...values, ContactNumber: e.target.value })}
                            required
                        />
                        {errors.ContactNumber && <div className="text-danger">{errors.ContactNumber}</div>}
                    </div><br/>
                    <div className="mb-2">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter Password"
                            value={values.Password}
                            onChange={e => setValues({ ...values, Password: e.target.value })}
                            required
                        />
                        {errors.Password && <div className="text-danger">{errors.Password}</div>}
                    </div><br/>
                    <div className="mb-2">
                        <label htmlFor="location">Location:</label>
                        <input
                            type="text"
                            name="location"
                            className="form-control"
                            placeholder="Enter Location"
                            value={values.Location}
                            onChange={e => setValues({ ...values, Location: e.target.value })}
                            required
                        />
                        {errors.Location && <div className="text-danger">{errors.Location}</div>}
                    </div><br/>
                    <div className="mb-2">
                        <label htmlFor="type">Type:</label>
                        <input
                            type="text"
                            name="type"
                            className="form-control"
                            placeholder="Enter Type"
                            value={values.Type}
                            onChange={e => setValues({ ...values, Type: e.target.value })}
                            required
                        />
                        {errors.Type && <div className="text-danger">{errors.Type}</div>}
                    </div><br/>
                    <div className="mb-2">
                        <label htmlFor="cuisine">Cuisine:</label>
                        <input
                            type="text"
                            name="cuisine"
                            className="form-control"
                            placeholder="Enter Cuisine"
                            value={values.Cuisine}
                            onChange={e => setValues({ ...values, Cuisine: e.target.value })}
                            required
                        />
                        {errors.Cuisine && <div className="text-danger">{errors.Cuisine}</div>}
                    </div><br/>
                    <div className="mb-2">
                        <label htmlFor="totalTables">Total Tables:</label>
                        <input
                            type="number"
                            name="totalTables"
                            className="form-control"
                            placeholder="Enter Total Tables"
                            value={values.TotalTables}
                            onChange={e => setValues({ ...values, TotalTables: parseInt(e.target.value) || 0 })}
                            required
                        />
                        {errors.TotalTables && <div className="text-danger">{errors.TotalTables}</div>}
                    </div><br/>
                    <div className="mb-2">
                        <label htmlFor="email">Personal Email:</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter Email"
                            value={values.Personal_Email}
                            onChange={e => setValues({ ...values, Personal_Email: e.target.value })}
                            required
                        />
                        {errors.Personal_Email && <div className="text-danger">{errors.Personal_Email}</div>}
                    </div><br/>
                    <button className="btn btn-success m-1" type="submit" >Save</button>
                    <Link to="/adminview" className="btn btn-primary m-1">Back</Link>
                </form>
            </div>
        </div>
     </>  
    );
}

export default AdminCreate;