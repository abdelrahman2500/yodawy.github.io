/** @format */

//import React, { Component } from "react";
import { Button } from "bootstrap";
import "./index.scss";
//import { NavLink, Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <div className="top py-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 ">
              <span className="first-span">
                need help? <strong>15005</strong>{" "}
              </span>
            </div>
            <div className="col-6 text-end icons">
              <span>
                <i class="fab fa-facebook-f"></i>
              </span>

              <span>
                <i class="fab fa-instagram"></i>
              </span>
              <span>
                <i class="fab fa-linkedin-in"></i>
              </span>
              <button
                className="btn btn-light"
                onClick={() => localStorage.setItem("lang", "ar")}
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="middle fw-bold p-0">
        
      </div>
      <div className="search">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="box">
                <img src={"/images/logo/Yodawylogo.png"} />
              </div>
            </div>
            <div className="col-9 search-input">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  <i className="fas fa-search"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

{
  /* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

<div class="container-fluid">

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav m-auto">
      <li class="nav-item">
        <a class="nav-link " aria-current="page" href="#">
          Shop
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          For Pharmacies
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          For Insurers
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          For Doctors
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          About Us
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Blog
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Contact
        </a>
      </li>
      {/* <li class="nav-item">
      <a
        class="nav-link disabled"
        href="#"
        tabindex="-1"
        aria-disabled="true"
      >
        Disabled
      </a>
    </li> */
}
//     </ul>
//   </div>
// </div>
// </nav> */}
