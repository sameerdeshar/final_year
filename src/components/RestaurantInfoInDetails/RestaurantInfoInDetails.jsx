import React from "react";
import "./RestaurantInfoInDetails.css";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
function RestaurantInfoInDetails() {
  return (
    <>
      <div className="RestaurantInfoInDetails">
        <div className="info-tbl d-flex justify-content-between">
          <div>Minimum Order Amount</div>
          <div>JOD 0.00</div>
        </div>
        <div className="info-tbl d-flex justify-content-between">
          <div>Working Hours</div>
          <div>10:30AM - 1:30AM</div>
        </div>
        <div className="info-tbl d-flex justify-content-between">
          <div>Delivery Time</div>
          <div>24 mins</div>
        </div>
        <div className="info-tbl d-flex justify-content-between">
          <div>Delivery fee</div>
          <div>JOD 0.50</div>
        </div>
        <div className="info-tbl d-flex justify-content-between">
          <div>Payment</div>
          <div className="PaymentMethodJ">
            <span>
              <FaCcVisa />
            </span>
            <span>
              <FaCcMastercard />
            </span>
            <span>
              <BsCashStack />
            </span>
          </div>
        </div>
        <div className="info-tbl d-flex justify-content-between">
          <div>Cuisines</div>
          <div>Fried Chicken, Sandwiches , American</div>
        </div>
      </div>
    </>
  );
}

export default RestaurantInfoInDetails;
