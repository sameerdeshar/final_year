import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import Category from "./category";
import "./home.scss";

function Home() {
  return (
    <>
      <div className="home">
        <div className="HeaderHome">
          <h1>Order food to your door!</h1>
          <Link className="effectButton" to="/restaurants">
            Browse Stores List
          </Link>
        </div>
        <Category />
      </div>
    </>
  );
}

export default Home;
