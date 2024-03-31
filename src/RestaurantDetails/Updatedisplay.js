import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
import { useParams, useNavigate } from 'react-router-dom';

export default function Updatedisplay() {
    // const { rid } = useParams();
    // console.log("rid", rid);
 
    const [service, setService] = useState({
        restaurant_Name: '',
        email_Id: '',
        contactNumber: '',
        password: '',
        location: '',
        type: '',
        cuisine: '',
        totalTables: 0,
        status: 'waiting for approval',
        personal_Email: '',
        restaurantImage: null
      
    });
 
    // const [validation, valchange] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`https://localhost:7092/api/Restaurant_Details/Restaurant/1`)
            .then((res) => {
                const servicedata = res.data;
                setService(res.data);
                console.log("Get data:", res.data)
            })
            .catch((error) => {
                if (error.response && error.response.status === 404) {
                    console.log("Service not found")
                }
                console.log("Error:", error.message);
            });
    }, [1]);
 
 
 
    const handleChange = (e) => {
 
        const { name, value } = e.target;
 
        setService(prevService => ({
 
            ...prevService,
 
            [name]: value
 
        }));
 
    };
    const handleImageChange = (e) => {
 
        setService({
 
            ...service,
 
            serviceImage: e.target.files[0],
 
        });
 
    };
    const handleSubmit = (e) => {
 
        e.preventDefault();
        const formData = new FormData();
        formData.append('restaurant_Name', service.restaurant_Name);
        formData.append('email_Id', service.email_Id);
        formData.append('contactNumber', service.contactNumber);
        formData.append('password', service.password);
        formData.append('location', service.location);
        formData.append('type', service.type);
        formData.append('cuisine', service.cuisine);
        formData.append('totalTables', service.totalTables);
        formData.append('status', service.status);
        formData.append('personal_Email', service.personal_Email);

        console.log("formdata",formData);
 
        if (!isNaN(service.restaurant_Name) || !isNaN(service.status)) {
            alert('Name cannot have an integer');
        }
        else {
            axios.put(`https://localhost:7092/api/Restaurant_Details/1`, service, {
                headers: { "Content-Type": "multipart/form-data" }
            })
                .then((res) => {
                    alert('Updated successfully.');
                    navigate("/adminview");
                })
 
                .catch((error) => {
                    console.log("Error:", error.message);
                });
        }
    };
  return (
    <>
        <Container>
      <Card className='card bg-dark'>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className='text-white'>Restaurant Name :</Form.Label>
              <Form.Control
                type="text"
                name="restaurant_Name"
                value={service.restaurant_Name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='text-white'>Email Id:</Form.Label>
              <Form.Control
                type="text"
                name="email_Id"
                value={service.email_Id}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='text-white'>ContactNumber:</Form.Label>
              <Form.Control
                type="text"
                name="contactNumber"
                value={service.contactNumber}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='text-white'> Location:</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={service.location}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='text-white'>Type:</Form.Label>
              <Form.Control
                type="text"
                name="type"
                value={service.type}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='text-white'>Cuisine:</Form.Label>
              <Form.Control
                type="text"
                name="cuisine"
                value={service.cuisine}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='text-white'>TotalTables:</Form.Label>
              <Form.Control
                type="number"
                name="totalTables"
                value={service.totalTables}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='text-white'>Status:</Form.Label>
              <Form.Control
                type="text"
                name="status"
                value={service.status}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='text-white'>Personal_Email:</Form.Label>
              <Form.Control
                type="text"
                name="personal_Email"
                value={service.personal_Email}
                onChange={handleChange}
              />
            </Form.Group>
            {/* <Form.Group className="mb-3">
              <Form.Label>Restaurant Image:</Form.Label>
              <Form.Control
                type="file"
                name="restaurantImage"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Form.Group> */}

            <Button type="submit">Update</Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
    </>
    
  );
};


