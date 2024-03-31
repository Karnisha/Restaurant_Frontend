import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Restaurant Booking Website</Typography>
        <p>
        A restaurant booking system allows venues to accept online and in-person diner reservations and arrange table plans based on information such as the number of guests, booking date and time, 
        as well as unique customer preferences and dining history at your venue.
          
        </p>
        <br />
        <p>
          All restaurants available in my website.It is user friendly website.Online restaurant booking refers to the process of making reservations at restaurants through an online platform or application. This service allows customers to browse through a list of restaurants, view their menus, check availability, and book a table for a specific date and time, all from the convenience of their devices. Here's an overview of how online restaurant booking typically works:

1. **Search and Browse:** Customers can search for restaurants based on various criteria such as location, cuisine, price range, and availability. They can browse through restaurant listings to view details like menus, photos, reviews, and ratings.

2. **Check Availability:** Customers can check the availability of tables for a specific date and time. The availability is typically displayed in real-time based on the restaurant's current reservations.

3. **Select Date and Time:** After finding a suitable restaurant, customers can select the date and time for their reservation. Some platforms may also allow customers to choose specific tables or seating areas.

4. **Provide Contact Information:** Customers are usually required to provide their contact information, such as name, phone number, and email address, to confirm the reservation.

5. **Confirmation:** Once the reservation is confirmed, customers receive a confirmation email or SMS with details of their reservation, including the date, time, and any special instructions from the restaurant.

6. **Manage Reservations:** Customers can typically manage their reservations online, including modifying or canceling them if needed.

For restaurants, online booking systems offer several benefits, including increased visibility, improved efficiency in managing reservations, reduced no-shows, and enhanced customer experience. Restaurants can also use these systems to collect feedback, analyze booking trends, and tailor their services to meet customer demands.

Overall, online restaurant booking has become a popular and convenient way for customers to plan their dining experiences and for restaurants to streamline their reservation processes and improve customer satisfaction.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
