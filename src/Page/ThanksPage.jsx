import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { MdDone } from "react-icons/md";

import "../style.scss";

function Thanks() {
  return (
    <>
      <Navbar />
      <div className="thanksContainer d-flex flex-column align-items-center">
        <p className="done">
          <MdDone />
        </p>
        <h1>Everything is ready!</h1>
        <h4>Your order is being prepared</h4>
        <p>The delivery driver will contact you within 15 minutes!</p>
        <Link to="/profile">Check order</Link>
      </div>
      <Footer />
    </>
  );
}

export default Thanks;
