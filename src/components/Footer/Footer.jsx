/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="page-footer font-small unique-color-dark">
      <div style={{ backgroundColor: "#DE523D" }}>
        <div className="container">
          <div className="row py-4 d-flex align-items-center">
            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0">Your everyday, right away!</h6>
            </div>
            <div className="col-md-6 col-lg-7 text-center text-md-right">
              <a className="fb-ic">
                <i className="fab fa-facebook-f white-text mr-3"> </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter white-text mr-3"> </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus-g white-text mr-3"> </i>
              </a>

              <a className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-3"> </i>
              </a>

              <a className="ins-ic">
                <i className="fab fa-instagram white-text"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid text-center text-md-left mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6>Hunger Road</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 60 }}
            />
            <p>
              Your everyday, right away Order food and grocery delivery online
              from hundreds of restaurants and shops.
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 hideInMobile">
            <h6>Useful links</h6>
            <hr
              className="deep-purple accent-8 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 60 }}
            />
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/register">Sign up</Link>
            </p>
            <p>
              <Link to="/rider">Become a driver</Link>
            </p>
            <p>
              <Link to="/partner">Become a partner</Link>
            </p>
            <p>
              <Link to="/">Feedback</Link>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 hideInMobile">
            {/* Links */}
            <h6>Useful links</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 60 }}
            />
            <p>
              <Link to="/profile">Your Account</Link>
            </p>
            <p>
              <Link to="/">Terms</Link>
            </p>
            <p>
              <Link to="/">FAQ</Link>
            </p>
            <p>
              <Link to="/">Privacy</Link>
            </p>
            <p>
              <Link to="/Contact">Contact Us</Link>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-2 mx-auto mb-md-0 mb-4">
            <h6>Contact Us</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 60 }}
            />
            <p>
              <i className="fas fa-home mr-2" /> Jordan, Amman
            </p>
            <p>
              <i className="fas fa-envelope mr-2" /> info@example.com
            </p>
            <p>
              <i className="fas fa-phone mr-2" /> + 962 234 567 88
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 downloadapp">
            <h5 className="text-center">Download App</h5>
            <hr
              className="deep-orange accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 60 }}
            />
            <div className="containerImgDownload">
              <img
                className="d-block"
                src="https://res.cloudinary.com/durpirilj/image/upload/v1639157342/partnerImg/logo_appstore_n4kjkc.svg"
                alt="Download app"
                width="180px"
              />
              <img
                className="d-block"
                src="https://res.cloudinary.com/durpirilj/image/upload/v1639157344/partnerImg/logo_playstore_hkoidg.svg"
                alt="Download app"
                width="180px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        Developed and Designed by
        <a href="https://azzmmii.com" target="_blank">
          {" "}
          AzmiTammam
        </a>{" "}
        &copy; 2022 All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
