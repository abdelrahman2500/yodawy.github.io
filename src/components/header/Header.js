/** @format */

import React from "react";
import "./index.scss";

export default function Header() {
  return (
    <div className="container">
      <div className="header my-4">
        <div className="inner p-5">
          <div className="row">
            <div className="d-none d-sm-block col-sm-7 align-self-center text-center">
              <h2 className="mb-4 h1">
                Yodawy: Your Guide To Health & Wellbeing
              </h2>
              <p>
                Browse thousands of products and healthcare essentials and enjoy a
                seamless checkout experience with instant delivery. Exclusive
                offers, promotions and features: Yodawy is your guide to health &
                wellbeing.
              </p>
            </div>
            <div className="col-12 col-sm-5">
              <div className="box row justify-content-center ">
                <img
                  src={"/images/header/mockup-slider-en.png"}
                  className="img"
                />
              </div>

              <h2 className="d-sm-none h4 mt-4 text-center">
                Yodawy: Your Guide To Health & Wellbeing
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
