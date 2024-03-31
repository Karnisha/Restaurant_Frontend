import { useState,useEffect } from 'react'
import axios from 'axios';
import React from 'react'
import { NavLink,useNavigate ,Link} from 'react-router-dom'
import Layout from '../components/Layout/Layout';
import Cookies from 'js-cookie';
  const initialValues = { Email: "", Password: "" };
function Login() {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setIsSubmit(true);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('https://localhost:7092/api/Login/login', formValues);
        console.log('Login Successfully:', response.data);
        window.alert('Login successful');
        Cookies.set('Email', formValues.Email, { expires: 7 });
        // Redirect based on user role
        const name = formValues.Email.substring(0, formValues.Email.indexOf('@'));
        if (formValues.Email === 'admin@admin.com' && formValues.Password === '1234567') {
          navigate("/adminhome");
        } else {
          navigate("/home", { state: { username: name, email: formValues.Email } });
        }
      } catch (error) {
        console.error('Error:', error);
        window.alert('Login failed');
      }
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex for demonstration

    if (!values.Email) {
      errors.Email = "Email is required!";
    } else if (!regex.test(values.Email)) {
      errors.Email = "This is not a valid email format!";
    }

    if (!values.Password) {
      errors.Password = "Password is required!";
    } else if (values.Password.length < 4) {
      errors.Password = "Password must be more than 4 characters";
    } else if (values.Password.length > 10) {
      errors.Password = "Password must not exceed more than 10 characters";
    }

    return errors;
  };

  return (
    <>
         
                   
                   
              
    <div class='container p-5 w-25 border border-dark bg-dark rounded mt-5 ' >
             
 
      <form onSubmit={handleSubmit}>
 
        <h1 style={{ display: 'flex', justifyContent: 'center',color:'white' }}>Login</h1>
        <hr></hr>
        <div className="form-floating ">
          <input type="email" class="form-control" id="loginEmail" name="Email" value={formValues.Email} onChange={handleChange}/>
          <label htmlFor="email" className={formValues.Email ? "active" : ""}>Email</label>
        </div><p>{formErrors.Email}</p>
 
        <div class="form-floating ">
          <input type="password" class="form-control" id="loginPassword" name="Password" value={formValues.Password} onChange={handleChange} />
          <label htmlFor="pwd">Password</label>
        </div><p>{formErrors.Password}</p><br></br>
        <div className="footer mx-4">
 
          <button class="btn btn-primary mx-5" id="loginButton">Login</button><br></br><br></br>
          <NavLink to='/signup' style={{ display: 'flex', justifyContent: 'flex-end',color:'white' }}>Don't Have an account? Signup!</NavLink>
        </div>
      </form>
 
    </div>
    </>
  )
}
 
export default Login;
