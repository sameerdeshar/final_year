import React from "react";
import notFound from "/images/icon.png";
import "../style.scss";
import Navbar from "../components/navbar/Navbar";

const PageNotFound = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="info">
        <h1 className="text-center">404</h1>
        <h2 className="text-center">This page could not be found!</h2>
        <img src={notFound} alt="This page could not be found!" />
      </div>
    </div>
  );
};

export default PageNotFound;
