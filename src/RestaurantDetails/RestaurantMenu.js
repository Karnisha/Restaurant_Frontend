import React, { useState } from "react";
import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
import axios from "axios";
import { NavLink, useNavigate } from 'react-router-dom'

const initialValues = {
  restaurant_Name: "",
  email_Id: "",
  contactNumber: "",
  location: "",
  type: "",
  cuisine: "",
  totalTables: "",
  status: "",
  personal_Email: '',
  restaurantImage: null,
};

function RestaurantMenu() {
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();

  const handleInput = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setValues({
      ...values,
      restaurantImage: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          formData.append(key, value);
        });

    try {
      debugger
      const response = await axios.post(
        "https://localhost:7092/api/Restaurant_Details",
        formData, // Send formData instead of values directly
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
        
      );
      console.log(response.data);
      // Handle success
      window.alert("Posted successfully");
      console.log("Posted successfully:", response.data);
      navigate('/restaurantlist');
    } catch (error) {
      // Handle error
      console.log(values);
      console.error("Post failure:", error);
    }
  };

  return (
    <Container>
      <Card>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Restaurant Name :</Form.Label>
              <Form.Control
                type="text"
                name="restaurant_Name"
                value={values.restaurant_Name}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Id:</Form.Label>
              <Form.Control
                type="text"
                name="email_Id"
                value={values.email_Id}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>ContactNumber:</Form.Label>
              <Form.Control
                type="text"
                name="contactNumber"
                value={values.contactNumber}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Location:</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={values.location}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Type:</Form.Label>
              <Form.Control
                type="text"
                name="type"
                value={values.type}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cuisine:</Form.Label>
              <Form.Control
                type="text"
                name="cuisine"
                value={values.cuisine}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>TotalTables:</Form.Label>
              <Form.Control
                type="number"
                name="totalTables"
                value={values.totalTables}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status:</Form.Label>
              <Form.Control
                type="text"
                name="status"
                value={values.status}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Personal_Email:</Form.Label>
              <Form.Control
                type="text"
                name="personal_Email"
                value={values.personal_Email}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Restaurant Image:</Form.Label>
              <Form.Control
                type="file"
                name="restaurantImage"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Form.Group>

            <Button type="submit">Submit</Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}

export default RestaurantMenu;
