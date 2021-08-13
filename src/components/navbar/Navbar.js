import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Contact from "../../pages/contact/Contact";

export default function Navbar(props) {
  return (
    <div className="main-navbar">
      <div
        className={
          props.compo == false ? "d-none" : "top py-1 d-none d-md-block"
        }
      >
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
      <div
        className={
          props.compo == false
            ? "middle fw-bold p-0 fixed-top "
            : "middle fw-bold p-0 d-none d-md-block "
        }
      >
        <nav
          className={
            props.compo == false
              ? "navbar navbar-expand-lg navbar-dark bg-transparent"
              : "navbar navbar-expand-lg navbar-dark"
          }
        >
          <div className="container">
            <Link
              className={props.compo == true ? "d-none" : "navbar-brand"}
              to="/"
            >
              <div className="box">
                <img src={"/images/logo/Yodawylogo.png"} />
              </div>
            </Link>
            <button
              className="navbar-toggler m-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <NavLink className="nav-link" aria-current="page" to="/shop">
                    shop
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/pharamcies">
                    For pharmacies
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/insurers">
                    For Insurers
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/doctors">
                    For doctors
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    about us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/blog">
                    blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    
                    to="/contact"
                  >
                    contact
                  </NavLink>
                </li>
                <button
                  className={props.compo == true ? "d-none" : "btn btn-light"}
                  onClick={() => localStorage.setItem("lang", "ar")}
                >
                  العربية
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className={props.compo == false ? "d-none" : "search py-2"}>
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-3">
              <div className="box  m-lg-4">
                <img src={"/images/logo/Yodawylogo.png"} />
              </div>
            </div>
            <div className="col-9 search-input ">
              <div class="input-group mb-0">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search For Products"
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
    </div>
  );
}
