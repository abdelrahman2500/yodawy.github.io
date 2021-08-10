//import React, { Component } from "react";
import "./index.scss";
//import { NavLink, Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <div className="row" id="div1">
        <div className="col-9">
          <span>need help? 1500</span>
        </div>
        <div className="col-3">
          <span>
            <i class="fab fa-facebook-f"></i>
          </span>
        </div>
      </div>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav m-auto">
              <li class="nav-item">
                <img src={"/images/logo/Yodawy.jpeg"} />
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="div2">
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Navbar;
