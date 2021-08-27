/** @format */

import React from "react";
import "./index.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from 'react';
import { Context } from './../../context/Context';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function BestSeller() {
  const context = useContext(Context)
  const[best,setBest] = useState(context.products.filter(pro => pro.price <= 400 && pro.price >= 300))

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#18a2d3",
          width: "35px",
          height: "40px",
          textAlign: "center",
          paddingTop: "11px",
          borderRadius: "30%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#18a2d3",
          width: "35px",
          height: "40px",
          textAlign: "center",
          paddingTop: "11px",
          borderRadius: "30%",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="best_seller my-4">
      <div className="container">
        <div className="row my-3">
          <h2 className="text-center h1 fw-bold head">الأكثر مبيعا</h2>
        </div>
        <div className="main mx-3 row justify-content-center justify-content-md-start">
          <Slider {...settings} className="mb-4" style={{}}>
            {/*  */}
            {best.map(el => 
              <div className="card pt-4 mb-3" key={el.id}>
              <Link to="/shop" onClick={()=> context.setFilterd(context.products.filter(p => p.id == el.id))}>
                <div className="boxx">
                  <img
                    src={`/images/products/${el.imagePath}`}
                    className="slick-slide-image mx-auto"
                  />
                </div>
              </Link>

              <p
                style={{
                  width: "9.8rem",
                  fontSize: "14.2px",
                }}
                className="slick-slide-label py-1 mx-auto text-center pt-3"
              >
                {el.nameAr}
              </p>
            </div>
            )}
            
          </Slider>
        </div>
      </div>
    </div>
  );
}
