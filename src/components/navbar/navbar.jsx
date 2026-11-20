import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./navbar.css";

import { BsJustify } from "react-icons/bs";

import logo from "../../assets/brand/logo-banner.png";

const NavBar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isOpen, setIsOpen] = useState(false); // State to manage the collapse, starts as closed

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the current state
  };

  const closeNavbar = () => {
    setIsOpen(false); // Close the navbar
  };

  const setMobileNavbarColor = () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("bg-white");
    toggleNavbar(); // Use the toggle function
  };

  return (
    <nav className="navbar navbar-expand-lg p-3 py-4 p-md-5 w-100">
      <div
        className="container-fluid px-3 px-xl-5 py-xl-4"
        style={{ overflow: "visible" }}
      >
        <Link
          className="navbar-brand m-0 ps-xl-5 flex-grow-1"
          to="/home"
          style={{ overflow: "visible" }}
          onClick={closeNavbar}
        >
          <img
            src={logo}
            alt="Pavlina Ltd. Logo"
            style={{ overflow: "visible" }}
          />
        </Link>
        <button
          id="mobileNavbarToggle"
          className="navbar-toggler"
          type="button"
          aria-controls="mobileNavbar"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={setMobileNavbarColor}
        >
          <BsJustify />
        </button>
        <div
          className={`collapse navbar-collapse pe-xl-5 d-lg-flex justify-content-lg-end ${isOpen ? "show" : ""}`}
          id="mobileNavbar"
        >
          <ul className="navbar-nav text-center text-uppercase w-100 justify-content-lg-end">
            <li className="nav-item">
              <Link
                className="nav-link py-4 py-lg-2 px-lg-2 ms-lg-5"
                to="/home"
                onClick={closeNavbar}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link py-4 py-lg-2 px-lg-2 ms-lg-5"
                to="/about"
                onClick={closeNavbar}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link py-4 py-lg-2 px-lg-2 ms-lg-5"
                to="/the-films"
                onClick={closeNavbar}
              >
                Filmography
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link py-4 py-lg-2 px-lg-2 ms-lg-5"
                to="/gallery/"
                onClick={closeNavbar}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link py-4 py-lg-2 px-lg-2 ms-lg-5"
                to="/contact/"
                onClick={closeNavbar}
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
