import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bread.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Bakery </h1>
        <p> BREAD IS BACK</p>
        <Link to="/menu">
          <button> BUY NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;