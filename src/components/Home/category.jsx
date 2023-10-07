import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

function Category() {
  return (
    <div className="container CategoryContainer">
      <div className="heading">
        <h2 className="text-center">Your everyday, right away</h2>
        <p className="text-center">
          Order food and grocery delivery online from hundreds of restaurants
          and shops
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <Link to="/restaurants">
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4 imageCard">
                  <img
                    src="https://images.unsplash.com/photo-1593759608142-e9b18c0dbe86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80"
                    alt=".."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Restaurant</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-6 col-md-12">
          <Link to="/restaurants">
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4 imageCard">
                  <img
                    src="https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Vegetarian</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Category;
