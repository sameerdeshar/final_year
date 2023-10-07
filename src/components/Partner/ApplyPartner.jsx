import React from "react";
import "./ApplyPartner.sass";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
function ApplyPartner() {
  return (
      <>
          <div className="container1" >
          <Navbar />
      <div className="apply">
        <div className="infoApply">
              <h1 className="heading animate__animated animate__headShake">
              Large, medium or small business? <br /> You're at the right place!
              </h1>
              <p>Get more sales</p>
        </div>
        <div className="applyForm">
              <div className="headingForm">
              <h2>Company Info!</h2>
              </div>
            <form>
                  <div className="containerForm">
                  <div className="customButton field">
                          <input type="text" name="storeName" id="storeName" placeholder=" " required />
                          <label htmlFor="storeName" className="label_Form">Enter Your Store Name</label>
                    </div>
                    <div className="field">
                          <input type="number" name="branches" id="branches" placeholder=" " required />
                          <label htmlFor="branches" className="label_Form">No. of Branches</label>
                    </div>
                    <div className="field">
                          <input type="url" name="website" id="website" placeholder=" " />
                          <label htmlFor="website" className="label_Form">Website / Social media</label>
                    </div>
                    <div className="field">
                          <input type="text" name="SocialAccount" id="SocialAccount" placeholder=" " />
                          <label htmlFor="SocialAccount" className="label_Form">Social Account</label>
                    </div>
                    <div className="field">
                          <input type="tel" name="phone" id="phone" placeholder="+9627XXXXXXXX" required />
                          <label htmlFor="phone" className="label_Form">Mobile number</label>
                    </div>
                    <div className="field">
                          <input type="text" name="fullName" id="fullName" placeholder=" " required />
                          <label htmlFor="fullName" className="label_Form">Full Name</label>
                    </div>
                    <input type="submit" className="submitDetails" value="SUBMIT" />
                  </div>
              </form>
        </div>
      </div>
    </div>
    <Footer />
      </>
  );
}

export default ApplyPartner;
