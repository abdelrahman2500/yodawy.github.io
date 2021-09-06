import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from './../../context/Context';

export default function NavbarAr(props) {
  const context = useContext(Context)

  const [visible, setVisible] = useState(false)
  const[searchValue,setSearchValue] = useState('')

  useEffect(() => {
      window.onscroll = () => {
          let currentScrollPos = window.pageYOffset;
          setVisible(currentScrollPos > 300 ? true: false)
      }
  },[ setVisible])

  useEffect(()=>{
    setSearchValue(searchValue)
  },[searchValue, setSearchValue])

  const[count, setCount] = useState()


  // useEffect(()=>{
  //   setCount(localStorage.getItem("cart-items") != null ? JSON.parse(localStorage.getItem("cart-items")).length : 0)
  // },[])

  return (
    <div className="main-navbar ar-style">
      <div
        className={
          props.compo == false ? "d-none" : "top py-1 d-none d-md-block"
        }
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 ">
              <span className="first-span">
                هل تريد المساعدة ؟ <strong>15005</strong>{" "}
              </span>
            </div>
            <div className="col-6 text-start icons">
            <span>
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram"></i>
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </span>
              <button
                className="btn btn-light"
                onClick={() => context.changeLang()}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={
          props.compo === false
            ? "middle fw-bold p-0 fixed-top "
            : visible ? "middle fw-bold p-0 fixed-top": "middle fw-bold p-0 "
        }>
        <nav className={props.compo==false?"navbar navbar-expand-lg navbar-dark bg-transparent":"navbar navbar-expand-lg navbar-dark"}>
          <div className="container">
            <Link
              className={props.compo == true ? "d-none" : "navbar-brand"}
              to="/"
            >
              <div className="box">
                <img src={"/images/logo/arabic-logo-300x137.png"} />
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
                  <NavLink onClick={()=> context.setFilterd(context.products)} className="nav-link" aria-current="page" to="/shop/1">
                    السوق
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/pharamcies">
                    الصيدليات
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/insurers">
                    التأمين الصحى
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/doctors">
                    الأطباء
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    عن يداوي  
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/blog">
                   المدونة
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    تواصل معنا
                  </NavLink>
                </li>
                <li className="nav-item fw-bolder">
                  <NavLink
                    className="nav-link"
                    to="/cart"
                  >
                    <i style={{transform:"rotateY(180deg)"}} className="fas fa-shopping-cart "></i>
                    <span style={{fontSize:"10px"}} className="badge bg-info rounded position-absolute">{localStorage.getItem("cart-items")? JSON.parse(localStorage.getItem("cart-items")).length : 0}</span>
                  </NavLink>
                </li>
                {localStorage.getItem("username") ? 
                <li className={props.compo == false ? "d-none" : "nav-item fw-bolder mx-3"}>
                  <NavLink
                    className="nav-link"
                    to="/login" exact
                  >
                    <i className="fas fa-sign-out-alt "></i>
                    <span style={{fontSize:"10px"}} className="badge bg-success rounded position-absolute">{localStorage.getItem("username")? localStorage.getItem("username") : ""}</span>
                  </NavLink>
                </li> : 
                <li className={props.compo == false ? "d-none" : "nav-item fw-bolder mx-3"}>
                  <NavLink
                    className="nav-link"
                    to="/login" exact
                  >
                    <i className="fas fa-sign-out-alt "></i>
                    <span style={{fontSize:"10px"}} className="badge bg-secondary rounded position-absolute">دخول</span>
                  </NavLink>
                </li>
                }
                <button
                  className={props.compo == true ? visible? "btn btn-light mx-5" : "d-block d-md-none" : "btn btn-light mx-2"}
                  onClick={() => context.changeLang()}
                >
                  English
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className={props.compo == false ? "d-none" : "search pt-2"}>
        <div className="container">
          <div className="row align-items-center justify-content-around ">
            <div className="col-3 col-md-2">
              <div className="box  m-lg-4">
                <Link to="/">
                  <img src={"/images/logo/yodawy-logo-ar.png"} />
                </Link>
              </div>
            </div>
            <div className="col-9 col-md-6 search-input ">
              <div className="input-group mb-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ابحث عن منتج"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={searchValue}
                  onChange={(e)=>setSearchValue(e.target.value)}
                />
              <Link to={searchValue.trim()== ""?"" : '/shop'} onClick={() => context.setFilterd(context.products.filter(el=> 
                  el.brand.toLowerCase().indexOf(searchValue.trim().toLowerCase()) != -1
                  || el.categoryName.toLowerCase().indexOf(searchValue.trim().toLowerCase()) != -1
                  || el.categoryBranchName.toLowerCase().indexOf(searchValue.trim().toLowerCase()) != -1
                  || el.description.toLowerCase().indexOf(searchValue.trim().toLowerCase()) != -1
                  || el.productName.toLowerCase().indexOf(searchValue.trim().toLowerCase()) != -1
                  || el.brandAr.toLowerCase().indexOf(searchValue.trim().toLowerCase()) != -1
                  || el.categoryNameAr.toLowerCase().indexOf(searchValue.trim().toLowerCase()) != -1
                  || el.categoryBranchNameAr.toLowerCase().indexOf(searchValue.trim().toLowerCase()) != -1
                  || el.descriptionAr.toLowerCase().indexOf(searchValue.trim().toLowerCase()) != -1
                  || el.nameAr.toLowerCase().indexOf(searchValue.trim().toLowerCase()) != -1
                  ))}>
                  <span className="input-group-text search-span ar" id="basic-addon2">
                      <i className="fas fa-search"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
