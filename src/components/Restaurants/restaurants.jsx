import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./restaurants.scss";
function Restaurants() {
  return (
    <>
      <div className="RestaurantsContainer">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Restaurants
              </li>
            </ol>
          </nav>
          <div className="row">
            <Link to="/restaurantmenu">
              <div className="card" style={{ width: "13rem" }}>
                <img
                  src="https://logoeps.com/wp-content/uploads/2011/04/old-mcdonalds-vector-logo.png"
                  className="card-img-top"
                  alt="McDonald's"
                />
                <div className="card-body">
                  <h5 className="card-title">McDonald's</h5>
                  <p className="card-text">American, Breakfast, Burgers</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Restaurants;
