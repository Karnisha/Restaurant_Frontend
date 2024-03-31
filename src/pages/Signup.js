import React, { useState } from 'react';
import axios from 'axios';
import { NavLink ,useNavigate,Link} from 'react-router-dom';
import { LayersTwoTone } from '@mui/icons-material';
import Layout from '../components/Layout/Layout';
import Bannerq from "../images/Login-background.jpg";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    Customer_Name: "",
    Password: "",
    Confirm_Password: "",
    Customer_Email: "",
    Customer_PhoneNo: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPhone = /^[0-9]{10}$/;

    if (!formData.Customer_Name.trim()) {
      newErrors.Customer_Name = "Name is required";
    }

    if (!formData.Password) {
      newErrors.Password = "Password is required";
    } else if (formData.Password.length < 6) {
      newErrors.Password = "Password must be at least 6 characters";
    }

    if (formData.Password !== formData.Confirm_Password) {
      newErrors.Confirm_Password = "Passwords do not match";
    }

    if (!formData.Customer_Email) {
      newErrors.Customer_Email = "Email is required";
    } else if (!regexEmail.test(formData.Customer_Email)) {
      newErrors.Customer_Email = "Invalid email format";
    }

    if (!formData.Customer_PhoneNo) {
      newErrors.Customer_PhoneNo = "Phone number is required";
    } else if (!regexPhone.test(formData.Customer_PhoneNo)) {
      newErrors.Customer_PhoneNo = "Invalid phone number, must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      try {
        const response = await axios.post('https://localhost:7092/api/Customer_Details/PostCustomerDetails', formData);
        console.log(response.data);
        window.alert('User Registered successfully');
        navigate('/login');
      } catch (error) {
        setError(error.response?.data?.message || 'An error occurred during registration');
        window.alert(error.response?.data?.message || 'An error occurred during registration');
      }
    }
  };

  return (
    <>
       
         {/* <div className="home" style={{ backgroundImage: `url(${Bannerq})` }}> */}
    <section className="vh-100 bg-image">
      <div className="mask d-flex align-items-center h-100  gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center  align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6 ">
              <div className="card bg-dark" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center text-white mb-5">Create an account</h2>

                  <form>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        name="Customer_Name"
                        className="form-control form-control-lg"
                        placeholder="Your Name"
                        value={formData.Customer_Name}
                        onChange={handleChange}
                        id="registerName"
                      />
                      <p className="text-danger">{errors.Customer_Name}</p>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        name="Customer_Email"
                        className="form-control form-control-lg"
                        placeholder="Your Email"
                        value={formData.Customer_Email}
                        onChange={handleChange}
                        id="email"
                      />
                      <p className="text-danger">{errors.Customer_Email}</p>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="tel"
                        name="Customer_PhoneNo"
                        className="form-control form-control-lg"
                        placeholder="Your Phone Number"
                        value={formData.Customer_PhoneNo}
                        onChange={handleChange}
                        id="phone_No"
                      />
                      <p className="text-danger">{errors.Customer_PhoneNo}</p>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        name="Password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        value={formData.Password}
                        onChange={handleChange}
                        id="customer_password"
                      />
                      <p className="text-danger">{errors.Password}</p>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        name="Confirm_Password"
                        className="form-control form-control-lg"
                        placeholder="Confirm Password"
                        value={formData.Confirm_Password}
                        onChange={handleChange}
                        id="Confirm_Password"
                      />
                      <p className="text-danger">{errors.Confirm_Password}</p>
                    </div>

                    {/* <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                      />
                      <label className="form-check-label text-white" htmlFor="form2Example3g">
                        I agree all statements in <a href="#!" className="text-body"></a>
                      </label>
                    </div> */}

                    
                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body"
                        onClick={handleSubmit}
                        id="registerBtn"
                      >
                        Register
                      </button>
                    </div>

                    <p className="text-center text-white mt-5 mb-0">Have already an account? <a href="/Login" className="fw-bold text-white"><u>Login here</u></a></p>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* </div> */}
    </>
  );
}

export default Signup;
