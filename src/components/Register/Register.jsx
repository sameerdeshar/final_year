import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./register.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";

function Register() {
  const [userData, setUserData] = useState([]);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setNewConfirmPassword] = useState("");
  const [newUserPhone, setNewUserPhone] = useState("");

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = () => {
  //   const apiUrl = "http://127.0.0.1:8000/api/users";

  //   axios
  //     .get(apiUrl)
  //     .then((response) => {
  //       setUserData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data from the API:", error);
  //     });
  // };

  // ...

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const apiUrl = "http://127.0.0.1:8000/api/user/register";

    axios
      .post(apiUrl, {
        firstname: newFirstName,
        lastname: newLastName,
        email: newUserEmail,
        password: newPassword,
        confirm_password: newConfirmPassword,
        phone: newUserPhone,
      })
      .then((response) => {
        console.log("User added successfully:", response.data);
        // Clear the input fields
        setNewFirstName("");
        setNewLastName("");
        setNewPassword("");
        setNewConfirmPassword("");
        setNewUserPhone("");
      })
      .catch((error) => {
        console.error("Error adding user:", error);

        // Log detailed error information
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error setting up the request:", error.message);
        }
      });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="containerReg">
        <div className="registerContainer">
          <div className="MainRegLeft">
            <img
              src="https://res.cloudinary.com/durpirilj/image/upload/v1638719585/partnerImg/5_bons8i.svg"
              width="450px"
              alt="img for login page"
            />
          </div>
          <form onSubmit={handleFormSubmit}>
            <h1>Create an Account</h1>
            <div className="RegisterFullNameDiv">
              <label>
                First Name:
                <input
                  type="text"
                  value={newFirstName}
                  onChange={(e) => setNewFirstName(e.target.value)}
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  value={newLastName}
                  onChange={(e) => setNewLastName(e.target.value)}
                />
              </label>
            </div>
            <div className="RegisterEmailDiv">
              <label>
                Email:
                <input
                  type="email"
                  value={newUserEmail}
                  onChange={(e) => setNewUserEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="RegisterPasswordsDiv">
              <label>
                Password:
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </label>
              <label>
                Confirm Password:
                <input
                  type="password"
                  value={newConfirmPassword}
                  onChange={(e) => setNewConfirmPassword(e.target.value)}
                />
              </label>
            </div>
            <div className="RegisterPhoneDiv">
              <label>
                Phone:
                <input
                  type="text"
                  value={newUserPhone}
                  onChange={(e) => setNewUserPhone(e.target.value)}
                />
              </label>
            </div>
            <div className="AcceptTermsDiv">
              <input
                type="checkbox"
                className="checkbox-primary"
                name="terms"
                id="AcceptTerms"
                required
                // onChange={(e) =>
                //   setFormData({ ...formData, terms: e.target.checked })
                // }
              />
              <span>
                I agree with <Link to="/">Terms</Link> and{" "}
                <Link to="">Privacy</Link>
              </span>
            </div>

            <button type="submit">Register</button>
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

export default Register;
