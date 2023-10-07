import react from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import "./profile.css";
import person from "./images/person.png";
function Profile() {
  return (
    <>
      <Navbar />
      <div className="container profileCon">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              My Account
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-12">
            <h3>My Account</h3>

            <div className="editInfo text-left">
              <form>
                <input type="text" id="nameOfUser" placeholder="Username" />
                <input type="text" id="Email" placeholder="Email" />
                <input type="text" id="phone" placeholder="Phone Number" />
                <input type="text" id="Password" placeholder="Password" />
                <input type="text" id="address" placeholder="Address Line 1" />
                <input type="text" id="address2" placeholder="Address Line 2" />
                <button type="submit">Submit!</button>
              </form>

              <h3>My Orders</h3>
              <table className="col-12">
                <tr>
                  <th>IMG</th>
                  <th>Name</th>
                  <th>Qty</th>
                  <th>Date</th>
                </tr>
                <tr>
                  <td>j</td>
                  <td>j</td>
                  <td>j</td>
                  <td>j</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
