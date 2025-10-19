import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container d-flex align-items-center">
          <Link className="navbar-brand" to="/">
            <img
              src="../../../assets/images/logo.png"
              alt="logo"
              style={{ height: 120 }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink to="/" className="nav-link pl-0">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/teacher" className="nav-link">
                  Teacher
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink to="/courses" className="nav-link">
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/pricing" className="nav-link">
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className="nav-link">
                  Blog
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
