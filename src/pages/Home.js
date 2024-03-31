import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/HomeImage.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Online Restaurant Booking </h1>
          <p>Best Restaurant In Viruthunagar</p>
          <Link to="/customerrestaurant">
            <button>View Restaurant</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;