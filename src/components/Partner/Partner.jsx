import React from "react";
import "./Partner.scss";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";

function Partner() {
  return (
    <>
      <div className="partner">
        <Navbar />
        <h1>Partner with Market Leaders</h1>
        <h2>get more sales</h2>

        <div className="partnerContainer">
          <ul className="progressbar">
            <li>Submit your information</li>
            <li>Our team will contact you</li>
            <li>Setup your company profile</li>
            <li className="active"> Start receiving more orders</li>
          </ul>
        </div>

        <div className="partner-body">
          <Link to="/ApplyPartner">Apply now!</Link>
        </div>
        <div className="flexContainerJoin">
          <h1>Join us</h1>
          <p>
            Be a part of the <span>Hunger Road</span>!
          </p>
          <section class="FlexContainer">
            <div>
              <img
                width="170px"
                src="https://res.cloudinary.com/durpirilj/image/upload/v1638389409/partnerImg/1_lbooe5.png"
                alt="s"
              />
              <h3>Additional revenue stream</h3>
              <p>Get more orders</p>
            </div>
            <div>
              <img
                width="170px"
                src="https://res.cloudinary.com/durpirilj/image/upload/v1638389409/partnerImg/2_tig14h.png"
                alt="s"
              />
              <h3>New customers</h3>
              <p>More visibility through the Hunger Road platform</p>
            </div>
            <div>
              <img
                width="170px"
                src="https://res.cloudinary.com/durpirilj/image/upload/v1638389409/partnerImg/3png_x38apu.png"
                alt="s"
              />
              <h3>Delivery, done</h3>
              <p>No more driver headaches</p>
            </div>
          </section>
        </div>

        <section className="partnerSection3">
          <div className="partnerSectionBody">
            <img
              src="https://res.cloudinary.com/durpirilj/image/upload/v1639155474/partnerImg/deliveryGirl-modified_ietza8.png"
              alt="delivery girl"
            />
            <h2>Fleet of over 16,000 riders</h2>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Partner;
