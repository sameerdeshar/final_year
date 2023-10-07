import React from "react";
import notFound from "../assets/react.svg";
import "../style.scss";
import Navbar from "../components/navbar/Navbar";

const PageNotFound = () => {
  return (
    <div className="notFound404">
      <Navbar />
      <div className="info">
        <h1>404</h1>
        <h2>This page could not be found!</h2>
        <img src={notFound} alt="This page could not be found!" />
      </div>
    </div>
  );
};

export default PageNotFound;
