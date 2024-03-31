// import React from "react";
// import { MenuList } from "../data/data";

// import Layout from "./../components/Layout/Layout";
// import "../styles/Login.css";
//  import {useNavigate} from 'react-router-dom';
// import {
//   Box,
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Typography,
// } from "@mui/material";
// import { Details } from "@mui/icons-material";

// const Restaurant = () => {
//     const navigate = useNavigate();
//     const handleSubmit = (event) => {
//         event.preventDefault();
      
//         navigate("/restaurantDetails")
//     }
//   return (
//     <Layout>
//       <Box  sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
//         {MenuList.map((menu) => (
//           <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
//             <CardActionArea onClick={handleSubmit}>
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
//               {/* <div className="Card-button">
//                  <button to="/home" className="btn btn-primary button-set" type="submit">Login</button>
//               </div>
//            */}
//             </CardActionArea>
//           </Card>
          
//         ))}
//       </Box>
//     </Layout>
//   );
// };

// export default Restaurant;
