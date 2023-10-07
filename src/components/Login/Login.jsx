import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";

function Login() {
  function showPassword() {
    let showPassword = document.getElementById("password");
    if (showPassword.type === "password") {
      showPassword.type = "text";
    } else {
      showPassword.type = "password";
    }
  }

  function popUpForgotPassword() {
    let forgotPassword = document.getElementById("popUpForgotPassword");

    if (forgotPassword.style.display === "none") {
      forgotPassword.style.display = "block";
    } else {
      forgotPassword.style.display = "none";
    }
  }

  return (
    <>
      <div className="MainLogin">
        <Navbar />

        <div className="containerLogn">
          <div className="Container111">
            <div class="MainLogLeft">
              <img
                src="https://res.cloudinary.com/durpirilj/image/upload/v1638719585/partnerImg/5_bons8i.svg"
                alt="img for login page"
              />
            </div>
            <form>
              <h1>Sign in</h1>
              <div className="loginDiv">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
                <span class="bottom"></span>
              </div>
              <div className="loginDiv">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                />
                <i class="fas fa-eye" onClick={showPassword}></i>
                <span class="bottom"></span>
              </div>
              <div className="containerPasswords">
                <div className="forgotPassword">
                  <a data-toggle="modal" data-target="#exampleModal">
                    <label>Forgot password?</label>
                  </a>
                </div>
              </div>
              <button type="submit" id="submitLogin">
                Login
              </button>
              <div className="newAccount">
                <span>
                  New to Hunger Road?{" "}
                  <Link to="/register">Create an account</Link>{" "}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Forgot Password?
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form action="">
              <div className="modal-body text-center">
                <label htmlFor="">Enter your email here</label> <br />
                <input
                  type="email"
                  placeholder="Email...."
                  className="text-left px-2 btn"
                  required
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Send Password!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
