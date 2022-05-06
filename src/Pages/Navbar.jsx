import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  let [state, setstate] = useState(false);

  let handleClick = () => {
    setstate(!state);
  };
  return (
    <>
      <section className="NavSection">
        <article>
          <div className="leftBlock">
            <img src="https://i.pinimg.com/564x/92/a6/e1/92a6e1575c0ee3171f4029c3d06e350e.jpg" />
            <h1>Doctor Care</h1>
          </div>

          <div className="middleBlock">
            <input type="search" placeholder="SEARCH Hospitals,Doctors......" />
          </div>

          <div className="rightBlock">
            <div>
              <a href="">Home</a>
            </div>
            <div>
              <a href="">Service</a>
            </div>
            <div>
              <a href="">Appointment</a>
            </div>

            <div onClick={handleClick}>
              <Link to="">Book Now</Link>
            </div>
          </div>

          <div
            className="DropDown"
            style={state === true ? { display: "block" } : { display: "none" }}
          >
            <ul>
              <li>
                <a href="/signin">Sign In</a>
              </li>
              <li>
                <a href="">Sign Up</a>
              </li>
              <li>
                <a href="">Logout</a>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
};

export default Navbar;
