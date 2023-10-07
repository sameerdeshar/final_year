import React from "react";
import "./RestaurantDetails.css";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import RestaurantInfoInDetails from "../RestaurantInfoInDetails/RestaurantInfoInDetails";
import RestaurantMenu from "../RestaurantMenu/RestaurantMenu";

function RestaurantDetails() {
  return (
    <>
      <Navbar />
      <div className="RestaurantDetails">
        <div className="restaurantTopContainer">
          <div className="firstContainer">
            <img
              src="https://images.deliveryhero.io/image/talabat/restaurants/kfc_big.gif?width=180"
              alt=""
            />
            <div className="restaurantInfo">
              <h5 className="title">KFC</h5>
              <p className="description">
                Fried Chicken, Sandwiches , American
              </p>
            </div>
          </div>
          <div className="twoContainer">
            <span>
              <FaCcVisa />
            </span>
            <span>
              <FaCcMastercard />
            </span>
            <span>
              <BsCashStack />
            </span>
          </div>
        </div>
        <div className="deliveryAlert">
          <div classname="alert alert-warning" role="alert">
            <span>
              <AiFillInfoCircle />
            </span>
            Delivered by us, with live tracking
          </div>
        </div>
        <div className="menuContainerRestaurant">
          <div className="ItemsInMenu">
            <button>
              <span>
                <MdOutlineRestaurantMenu />
              </span>
              Menu
            </button>
          </div>
          <div className="InfoInMenu">
            <button>
              <span>
                <AiFillInfoCircle />
              </span>
              Info
            </button>
          </div>
          <div className="cartInMenu">
            <h5>Your Cart</h5>
            <table>
              <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Quantity</td>
              </tr>
              <tr>
                <td>Royal Strips Meal</td>
                <td>91$</td>
                <td>
                  <button>
                    <IoIosArrowBack />
                  </button>
                  3
                  <button>
                    <IoIosArrowForward />
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <RestaurantMenu />
        <RestaurantInfoInDetails />
      </div>
      <Footer />
    </>
  );
}

export default RestaurantDetails;
