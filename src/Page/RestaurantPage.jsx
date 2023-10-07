import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Restaurants from "../components/Restaurants/restaurants";

function RestaurantPage() {
  return (
    <>
      <Navbar />
      <Restaurants />
      <Footer />
    </>
  );
}

export default RestaurantPage;
