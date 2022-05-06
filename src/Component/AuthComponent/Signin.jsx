import React from "react";
import "./auth.css";

const Signin = () => {
  return (
    <>
      <section className="signin">
        <article>
          <div>
            <h1>Sign In</h1>
            <form className="form">
              <div>
                <input type="text" placeholder="Firstname" />
                <input type="text" placeholder="Lastname" />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="enter email"
                  style={{
                    width: "100%",
                  }}
                />
              </div>
              <div>
                <input type="password" placeholder=" Password" />
                <input type="password" placeholder=" Reset password" />
              </div>
              <div>
                <div>
                  <label style={{ padding: "2px" }}>Select Location</label>
                </div>
                <div>
                  <select style={{ width: "100%", padding: "6px" }}>
                    <option value="Bangalore">Bangalore</option>
                    <option value="mysore">Mysore</option>
                    <option value="Mangalore">Mangalore</option>
                    <option value="Belagum">Belagum</option>
                  </select>
                </div>
              </div>
              <div className="btn">
                <span>
                  <button>SignIn As a Doctor</button>
                  <button>SignIn As a Patient</button>
                </span>
              </div>
            </form>
          </div>
        </article>
      </section>
    </>
  );
};

export default Signin;
