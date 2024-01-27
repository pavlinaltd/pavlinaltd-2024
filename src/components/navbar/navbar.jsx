import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "./navbar.css";

import { BsJustify } from "react-icons/bs";

import logo from "../../assets/brand/logo-banner.png";

const NavBar = () => {
  useEffect(() => window.scroll(0,0))  

  const setMobileNavbarColor = () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("bg-white")
  }

  return (
    <nav className="navbar navbar-expand-lg p-3 py-4 p-md-5 w-100">
      <div className=" container-fluid px-3 px-xl-5 py-xl-4">
        <Link className="navbar-brand m-0 ps-xl-5 flex-grow-1" to="/home">
          <img src={logo} alt="Pavlina Ltd. Logo"/>
          
        </Link>
        <button
          id="mobileNavbarToggle"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobileNavbar"
          aria-controls="mobileNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={setMobileNavbarColor}
        >
          <BsJustify />
        </button>
        <div
          className="collapse navbar-collapse pe-xl-5 d-lg-flex justify-content-lg-end"
          id="mobileNavbar"
        >
          <ul className="navbar-nav text-center text-uppercase w-100 justify-content-lg-end">
            <li className="nav-item">
              <Link
                className="nav-link py-4 py-lg-2 px-lg-2 ms-lg-5"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link py-4 py-lg-2 px-lg-2 ms-lg-5"
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link py-4 py-lg-2 px-lg-2 ms-lg-5"
                to="/the-films"
              >
                Filmography
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link py-4 py-lg-2 px-lg-2 ms-lg-5"
                to="/gallery/"
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link py-4 py-lg-2 px-lg-2 ms-lg-5"
                to="/contact/"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
