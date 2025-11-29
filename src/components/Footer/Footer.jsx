import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker"></span>
                    <span className="text">
                      Bagnan, West Bengal, Howrah, 711303
                    </span>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-phone"></span>
                      <span className="text">+91 89455 72020</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-envelope"></span>
                      <span className="text">npsbagnan@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2">Recent Blog</h2>
              <div className="block-21 mb-4 d-flex">
                <a
                  className="blog-img mr-4"
                  style={{
                    backgroundImage: "url('/assets/images/image_1.jpg')",
                  }}
                ></a>
                <div className="text">
                  <h3 className="heading">
                    <a href="#">
                      Even the all-powerful Pointing has no control about
                    </a>
                  </h3>
                  <div className="meta">
                    <div>
                      <a href="#">
                        <span className="icon-calendar"></span> Dec 25, 2018
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-person"></span> Admin
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-chat"></span> 19
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block-21 mb-5 d-flex">
                <a
                  className="blog-img mr-4"
                  style={{
                    backgroundImage: "url('/assets/images/image_2.jpg')",
                  }}
                ></a>
                <div className="text">
                  <h3 className="heading">
                    <a href="#">
                      Even the all-powerful Pointing has no control about
                    </a>
                  </h3>
                  <div className="meta">
                    <div>
                      <a href="#">
                        <span className="icon-calendar"></span> Dec 25, 2018
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-person"></span> Admin
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-chat"></span> 19
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-md-6 col-lg-3"></div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">
                    <span className="ion-ios-arrow-round-forward mr-2"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <span className="ion-ios-arrow-round-forward mr-2"></span>
                    About
                  </Link>
                </li>

                <li>
                  <Link to="/contact">
                    <span className="ion-ios-arrow-round-forward mr-2"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2">Subscribe Us!</h2>
              <form action="#" className="subscribe-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control mb-2 text-center"
                    placeholder="Enter email address"
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="form-control submit px-3"
                  />
                </div>
              </form>
            </div>
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2 mb-0">Connect With Us</h2>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                {/* <li className="">
                  <a href="#">
                    <span className="icon-twitter"></span>
                  </a>
                </li> */}
                <li className="">
                  <a href="https://www.facebook.com/share/162EKsFKLv/">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                {/* <li className="">
                  <a href="https://google.co.in/">
                    <span className="icon-instagram"></span>
                  </a>
                </li> */}

                <li>
                  <a
                    href="https://wa.me/+918945572020"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success d-flex align-items-center"
                  >
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              All rights reserved | Copyright &copy; {new Date().getFullYear()}
              &nbsp;by
              <a href="https://colorlib.com" target="_blank">
                &nbsp;Arin
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
