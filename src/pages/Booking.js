import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import '../styles/Login.css';
import Cookies from 'js-cookie';

function Booking() {
    const [customerID, setCustomerID] = useState('');
    const email = Cookies.get('Email');
    const [values, setValues] = useState({
        customer_Id:customerID,
        date: '',
        time: '',
        restaurant_Id: 1, // Assuming you have a way to get the restaurant ID
        noOfTables: ''
    });
    const [maxtable, setMaxTable] = useState(
        200);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.post('https://localhost:7092/api/Customer_Details/FindEmail', {
            customer_Email: email
        })
            .then(res => {
                console.log("fetch", res.data.customer_Id);
                setCustomerID(res.data.customer_Id);
                Cookies.set('Customerid', res.data.customer_Id, { expires: 7 });
            })
            .catch(err => console.log(err));
    }, [email]);
    useEffect(() => {
        setValues({ ...values, customer_Id: customerID });
    }, [customerID]);
    const handleChange = (e) => {
        console.log(values)
        setValues({ ...values, [e.target.name]: e.target.value });
    
    };
    const handletable=()=>{
        axios.post(`https://localhost:7092/api/CheckTable` ,{date:values.date,time:values.time}).then((response) => {
            setMaxTable(response.data)
            console.log(response.data);
        })
    }
    console.log("values", values)
    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        if (!values.date) {
            formErrors.date = "Date is required";
            isValid = false;
        }

        if (!values.time) {
            formErrors.time = "Time slot is required";
            isValid = false;
        } else {
            const [startTime, endTime] = values.time.split("-");
            // const [startHour, startMinute] = startTime.split(":");
            // const [endHour, endMinute] = endTime.split(":");

            const startDate = new Date();
            // startDate.setHours(parseInt(startHour, 10), parseInt(startMinute, 10), 0, 0);

            const endDate = new Date();
            // endDate.setHours(parseInt(endHour, 10), parseInt(endMinute, 10), 0, 0);

            const currentDate = new Date();

            if (startDate < currentDate) {
                formErrors.time = "Selected time slot has already passed";
                isValid = false;
            }

            if (endDate < startDate) {
                formErrors.time = "End time must be after start time";
                isValid = false;
            }
        }

        if (!values.noOfTables) {
            formErrors.noOfTables = "Number of tables is required";
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('https://localhost:7092/api/Reservation/BookReservation', values);
                console.log(response.data);
                window.alert('Table is Booked Successfully');
                navigate('/bookingview');
            } catch (error) {
                setErrors({ message: error.response.data.message });
            }
        }
    };

    return (
        <Layout>
            <div className="d-flex w-100 vh-100 justify-content-center backgroundcolorset">
                <div className="w-50 border border-black shadow px-5 pt-3 pb-5 rounded border-set">
                    <h3 className="head">Make a Reservation</h3><br />
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label className="book-color" htmlFor="date">Date:</label>
                            <input
                                type="date"
                                name="date"
                                className="form-control"
                                placeholder="Enter Date"
                                value={values.date}
                                min={new Date().toISOString().split('T')[0]}
                                onChange={handleChange}
                                required
                            />
                            {errors.date && <span className="text-danger">{errors.date}</span>}
                        </div><br />
                        {/* <div className="mb-2">
                            <label className="book-color" htmlFor="time">Time:</label>
                            <input
                                type="time"
                                name="time"
                                className="form-control"
                                placeholder="Enter Time"
                                value={values.time}
                                onChange={handleChange}
                                required
                            />
                            {errors.time && <span className="text-danger">{errors.time}</span>}
                        </div><br /> */}

                        <div className="mb-2">
                            <label className="book-color" htmlFor="time">Time Slot:</label>
                            <select
                                name="time"
                                className="form-select"
                                value={values.time}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a Time Slot</option>
                                <option value="9:00-12:00">9:00 AM -10:00 PM</option>
                                <option value="10:00-11:00">10:00 AM -11:00 AM</option>
                                <option value="11:00-12:00">11:00 AM -12:00 PM</option>
                                <option value="12:00-13:00">12:00 AM -1:00 PM</option>
                                <option value="13:00-14:00">1:00 PM-2:00 PM</option>
                                <option value="14:00-15:00">2:00 PM-3:00 PM</option>
                                <option value="15:00-16:00">3:00 PM-4:00 PM</option>
                                <option value="16:00-17:00">4:00 PM-5:00 PM</option>
                                <option value="17:00-18:00">5:00 PM-6:00 PM</option>
                                <option value="18:00-19:00">6:00 PM-7:00 PM</option>
                            </select>
                            {errors.time && <span className="text-danger">{errors.time}</span>}
                        </div>
                        <div className="mb-2">
                            <label className="book-color" htmlFor="noOfTables">People Count:</label>
                            <input
                                type="number"
                                name="noOfTables"
                                className="form-control"
                                placeholder="Enter Number of People"
                                value={values.noOfTables}
                                onChange={(e)=>{handleChange(e);handletable()}}
                                max={maxtable} min="0"
                                required
                            />
                            {errors.noOfTables && <span className="text-danger">{errors.noOfTables}</span>}
                        </div><br />
                        <button className="btn btn-success m-1" type="submit">Book a Table</button>
                        <Link to="/" className="btn btn-primary m-1">Back</Link>
                    </form>
                    {errors.message && <div className="alert alert-danger" role="alert">{errors.message}</div>}
                </div>
            </div>
        </Layout>
    );
}

export default Booking;