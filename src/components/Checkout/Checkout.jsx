import react from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Checkout.scss";

function Checkout() {
  return (
    <>
      <Navbar />
      <div className="checkoutContainer">
        <div className="checkoutHeading">
          <h3>Order Summary</h3>
        </div>
        <div className="checkoutDataInfo">
          <table>
            <tr>
              <th>Item(s)</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>Twister ( Original / Zinger ) Sandwich</td>
              <td>1</td>
              <td>JOD 1.75</td>
              <td>JOD 1.75</td>
            </tr>
          </table>
        </div>
        <div className="deliveryAddress">
          <h3>Delivery Address</h3>
          <form>
            <div className="div">
              <input type="text" name="firstname" placeholder="First Name" />
              <input type="text" name="lastname" placeholder="Last Name" />
            </div>
            <div className="div">
              <input type="text" name="street" placeholder="Street Address" />
              <input
                type="text"
                name="street"
                placeholder="Address 2 (Optional)"
              />
            </div>

            <div className="div">
              <select>
                <option value="country" id="country">
                  Jordan
                </option>
              </select>
              <select>
                <option value="amman">Amman</option>
                <option value="irbid">Irbid</option>
              </select>
            </div>
            <div className="div">
              <label>Payment</label>
              <br />
              <input
                type="radio"
                value="visa"
                id="visa"
                name="payment_method"
              />
              <label htmlFor="visa">Visa</label>
              <br />

              <input
                type="radio"
                value="mastercard"
                id="mastercard"
                name="payment_method"
              />

              <label htmlFor="mastercard">MasterCard</label>
              <br />

              <input
                type="radio"
                value="cash"
                id="cash"
                name="payment_method"
              />
              <label htmlFor="cash">Cash</label>
            </div>

            <Link to="/done">Place order!</Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
