import React from "react";
import "./RestaurantMenu.css";
import { IoAddCircleSharp } from "react-icons/io5";

function RestaurantMenu() {
  return (
    <>
      <div className="titleMenu">Menu</div>
      <div className="restaurantMenuContainer">
        <div className="cardMenu">
          <div className="menuIMG">
            <img
              src="https://images.deliveryhero.io/image/talabat/Menuitems/321_(1)_637314794482528734.jpg?width=172&amp;height=172"
              alt="food"
            />
          </div>
          <div className="menuBody d-flex">
            <div className="menuInfo d-flex flex-column">
              <h6>Double Bucket</h6>
              <p className="menuDesc">
                24 chicken pieces, 1 family French fries, 1 family coleslaw, 10
                Bun and 2 Pepsi family size.
              </p>
            </div>
            <div className="buyFromMenu d-flex flex-column-reverse justify-content-between ">
              <span id="price">22.2 JOD</span>
              <button>
                <IoAddCircleSharp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantMenu;
