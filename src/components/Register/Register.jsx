import React from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";

function register() {
  function showPassword() {
    let showPassword = document.getElementById("password1");
    let showPassword2 = document.getElementById("password2");
    if (showPassword.type === "password" && showPassword2.type === "password") {
      showPassword.type = "text";
      showPassword2.type = "text";
    } else {
      showPassword.type = "password";
      showPassword2.type = "password";
    }
  }

  return (
    <div className="MainRegister">
      <Navbar />
      <div className="containerReg">
        <div className="registerContainer">
          <div class="MainRegLeft">
            <img
              src="https://res.cloudinary.com/durpirilj/image/upload/v1638719585/partnerImg/5_bons8i.svg"
              width="450px"
              alt="img for login page"
            />
          </div>
          <form>
            <h1>Create an Account</h1>
            <div className="RegisterFullNameDiv">
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="RegisterEmailDiv">
              <input
                type="email"
                name="email"
                id="email"
                pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                placeholder="Email"
                required
              />
              <span class="bottom"></span>
            </div>
            <div className="RegisterPasswordsDiv">
              <input
                type="password"
                name="password1"
                id="password1"
                placeholder="Password"
                required
              />
              <input
                type="password"
                name="password2"
                id="password2"
                placeholder="Confirm Password"
                required
              />
              <span class="bottom"></span>
            </div>
            <div className="RegisterPhoneDiv">
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                minLength="9"
                maxLength="14"
                required
              />
              <span class="bottom"></span>
            </div>
            <div className="AcceptTermsDiv">
              <input
                type="checkbox"
                className="checkbox-primary"
                name="terms"
                id="AcceptTerms"
                required
              />
              <span>
                I agree with <Link to="/">Terms</Link> and{" "}
                <Link to="">Privacy</Link>
              </span>
            </div>
            <button class="buttonRegister" type="submit" id="submitLogin">
              Register
            </button>
            <div className="RegisterNewAccountDiv">
              <span>
                Already have an account? <Link to="/login">Login</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default register;
