// import React from "react";
// import { MenuList } from "../data/data";
// import Layout from "./../components/Layout/Layout";
// import "../styles/Login.css";
// import {
//   Box,
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Typography,
// } from "@mui/material";

// const Menu = () => {
//   return (
//     <Layout>
//       <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
//         {MenuList.map((menu) => (
//           <Card  sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
//             <CardActionArea>
//               <CardMedia
//                 sx={{ minHeight: "400px" }}
//                 component={"img"}
//                 src={menu.image}
//                 alt={menu.name}
//               />
//               <CardContent>
//                 <Typography variant="h5" gutterBottom component={"div"}>
//                   {menu.name}
//                 </Typography>
//                 <Typography variant="body2">{menu.description}</Typography>
//               </CardContent>
//               <div className="Card-button">
//                  <button className="btn btn-primary button-set" type="submit">Login</button>
//               </div>
          
//             </CardActionArea>
          
//           </Card>
          
//         ))}
//       </Box>
//     </Layout>
//   );
// };

// export default Menu;

import React, { useState } from "react";
import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
import axios from "axios";
import { NavLink,useNavigate } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';

const initialValues = {
  name: "",
  price: "",
  menuImage: null,
};

function Menu() {
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
      menuImage: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await axios.post(
        "https://localhost:7092/api/Menu",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      window.alert("Posted successfully");
      console.log("Posted successfully:", response.data);
      navigate('/card');
    } catch (error) {
      console.error("Post failure:", error);
    }
  };

  return (
    <Container>
      <Card className="bg-dark">
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">Menu Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-white">Price:</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={values.price}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-white">Menu Image:</Form.Label>
              <Form.Control
                type="file"
                name="menuImage"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Form.Group>

            <Button type="submit">Add Menu</Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Menu;