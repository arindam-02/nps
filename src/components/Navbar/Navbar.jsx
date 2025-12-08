import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container d-flex align-items-center">
          <Link className="navbar-brand" to="/">
            <div className="d-flex">
              <img
                src={"../../../assets/images/logo.png"}
                alt="logo"
                style={{ height: 120 }}
              />
              <div className="d-flex justify-content-center align-items-start flex-column ml-2 ">
                <p className="mainText">NABABHARATI</p>
                <p className="subText">PUBLIC SCHOOL</p>
              </div>
            </div>
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
              <li className={isActive("/") ? "nav-item active" : "nav-item "}>
                <NavLink to="/" className="nav-link pl-0">
                  Home
                </NavLink>
              </li>
              <li
                className={isActive("/about") ? "nav-item active" : "nav-item "}
              >
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              {/* <li
                className={
                  isActive("/teacher") ? "nav-item active" : "nav-item "
                }
              >
                <NavLink to="/teacher" className="nav-link">
                  Teacher
                </NavLink>
              </li> */}

              {/* <li
                className={
                  isActive("/admission") ? "nav-item active" : "nav-item "
                }
              >
                <NavLink to="/admission" className="nav-link">
                  Admission
                </NavLink>
              </li> */}

              <li
                className={
                  isActive("/contact") ? "nav-item active" : "nav-item "
                }
              >
                <NavLink to="/contact" className="nav-link">
                  Contact
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
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
