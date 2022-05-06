import React from "react";
import "./section.css";

const Section1 = () => {
  return (
    <>
      <section className="slide">
        <article>
          <div className="imgsection">
            <img src="https://as2.ftcdn.net/jpg/01/95/16/07/500_F_195160753_AozsqdIbJ96SnyagVVEYEMN3Xzwkr2mr.jpg" />
            <div className="leftsection">
              <h1>Your Happiness is Reflection of your Health</h1>
              <p> Self Care is the New Health Care............ </p>
            </div>
          </div>
        </article>
      </section>

      <main className="secondsection">
        <div className="secondleft1">
          <div className="card1">
            <img src="./doctor.png" />
            <h1>Doctors</h1>
            <p>Consult doctors here.....</p>
          </div>
          <div className="card2">
            <img src="https://tse1.mm.bing.net/th?id=OIP.AtW_F886QRkrMHHQXgx0IwHaDk&pid=Api&P=0&w=347&h=167" />
            <h1>Patients</h1>
            <p>Join Hospital.....</p>
          </div>
        </div>

        <div className="button">
          <h1>Doctors Care</h1>
          <p>Keep Good Health</p>
          <button className="btn">CONSULT</button>
          <img src="https://static.dribbble.com/users/3205235/screenshots/6955290/hand-up.gif" />
        </div>
      </main>
      <div className="secondleft2">
        <div className="card3">
          <img src="https://thumbs.dreamstime.com/b/doctor-appointment-online-screen-medical-health-care-concept-doctor-appointment-online-screen-medical-health-care-133665689.jpg" />
          <h1>Appointment</h1>
          <p>Book Appointments here.....</p>
        </div>
      </div>

      <section className="thirdsection">
        <article>
          <div className="rightsection">
            <img src="http://amentotech.com/projects/doctreat/wp-content/uploads/2019/08/img-01-4.png" />
          </div>
          <div className="finalsection">
            <div>
              <h1>Care Health</h1>
              <h3>Download Mobile Apps</h3>
              <p>
                Lorem ipsum dolor amet consectetur adipisicing eliteiuim <br />
                sete eiusmod tempor incididunt ut labore etnalom dolore magna
                aliqua.
              </p>
              <span>
                <img src="http://amentotech.com/projects/doctreat/wp-content/uploads/2019/08/img-03.png" />
                <img src="http://amentotech.com/projects/doctreat/wp-content/uploads/2019/08/img-02.png" />
              </span>
            </div>
          </div>
        </article>
      </section>

      {/* footer */}
      <section className="footer">
        <article>
          <div className="footerblock">Doctor Care</div>
          <div>
            <ul>
              <li>
                <a href=""> For Patients</a>
              </li>
              <li>
                <a href=""> Search for Doctors</a>
              </li>
              <li>
                <a href="">Login</a>
              </li>
              <li>
                <a href="">Register</a>
              </li>
              <li>
                <a href="">Booking</a>
              </li>
              <li>
                <a href="">Patient Dashboard</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href=""> For Doctors</a>
              </li>
              <li>
                <a href=""> Appointments</a>
              </li>
              <li>
                <a href="">Chat</a>
              </li>
              <li>
                <a href="">Register</a>
              </li>
              <li>
                <a href="">Login</a>
              </li>
              <li>
                <a href="">Doctor Dashboard</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href=""> Sitemap</a>
              </li>
              <li>
                <a href=""> Blog</a>
              </li>
              <li>
                <a href="">FAQs</a>
              </li>
              <li>
                <a href="">Payment</a>
              </li>
              <li>
                <a href="">Shipment</a>
              </li>
              <li>
                <a href="">Return policy</a>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
};

export default Section1;

// https://d1uhlocgth3qyq.cloudfront.net/ProviderIllustration___1QRBe.svg
