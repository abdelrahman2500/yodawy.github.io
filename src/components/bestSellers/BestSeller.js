/** @format */

import React from "react";
import "./index.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function BestSeller() {
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
    slidesToShow: 1,
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
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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
          <div className="text-center head">Best Sellers</div>
        </div>
        <div className="main mx-3 row justify-content-center justify-content-md-start">
          <Slider {...settings} className="mb-4" style={{}}>
            {/*  */}
            <div className="card pt-4 mb-3">
              <div>
                <img
                  src={"/images/header/mockup-slider-en.png"}
                  style={{ width: "90px" }}
                  className="slick-slide-image mx-auto"
                />
              </div>

              <p
                style={{
                  width: "9.8rem",
                  fontSize: "14.2px",
                }}
                className="slick-slide-label py-1 mx-auto text-center pt-3"
              >
                Bebelac 1 Infant Milk Formula, From 0-6 Months, 400 GM
              </p>
            </div>
            {/*  */}
            <div className="card pt-4">
              <div className="">
                <img
                  src={"/images/header/mockup-slider-en.png"}
                  style={{ width: "90px" }}
                  className="slick-slide-image mx-auto"
                />
              </div>

              <p
                style={{
                  width: "9.8rem",
                  fontSize: "14.2px",
                }}
                className="slick-slide-label py-1 mx-auto text-center pt-3"
              >
                Bebelac 1 Infant Milk Formula, From 0-6 Months, 400 GM
              </p>
            </div>
            {/*  */}
            <div className="card pt-4">
              <div className="">
                <img
                  src={"/images/header/mockup-slider-en.png"}
                  style={{ width: "90px" }}
                  className="slick-slide-image mx-auto"
                />
              </div>

              <p
                style={{
                  width: "9.8rem",
                  fontSize: "14.2px",
                }}
                className="slick-slide-label py-1 mx-auto text-center pt-3"
              >
                Bebelac 1 Infant Milk Formula, From 0-6 Months, 400 GM
              </p>
            </div>
            {/*  */}
            <div className="card pt-4">
              <div className="">
                <img
                  src={"/images/header/mockup-slider-en.png"}
                  style={{ width: "90px" }}
                  className="slick-slide-image mx-auto"
                />
              </div>

              <p
                style={{
                  width: "9.8rem",
                  fontSize: "14.2px",
                }}
                className="slick-slide-label py-1 mx-auto text-center pt-3"
              >
                Bebelac 1 Infant Milk Formula, From 0-6 Months, 400 GM
              </p>
            </div>
            {/*  */}
            <div className="card pt-4">
              <div className="">
                <img
                  src={"/images/header/mockup-slider-en.png"}
                  style={{ width: "90px" }}
                  className="slick-slide-image mx-auto"
                />
              </div>

              <p
                style={{
                  width: "9.8rem",
                  fontSize: "14.2px",
                }}
                className="slick-slide-label py-1 mx-auto text-center pt-3"
              >
                Bebelac 1 Infant Milk Formula, From 0-6 Months, 400 GM
              </p>
            </div>
            {/*  */}
            <div className="card pt-4">
              <div className="">
                <img
                  src={"/images/header/mockup-slider-en.png"}
                  style={{ width: "90px" }}
                  className="slick-slide-image mx-auto"
                />
              </div>

              <p
                style={{
                  width: "9.8rem",
                  fontSize: "14.2px",
                }}
                className="slick-slide-label py-1 mx-auto text-center pt-3"
              >
                Bebelac 1 Infant Milk Formula, From 0-6 Months, 400 GM
              </p>
            </div>
            {/*  */}
            <div className="card pt-4">
              <div className="">
                <img
                  src={"/images/header/mockup-slider-en.png"}
                  style={{ width: "90px" }}
                  className="slick-slide-image mx-auto"
                />
              </div>

              <p
                style={{
                  width: "9.8rem",
                  fontSize: "14.2px",
                }}
                className="slick-slide-label py-1 mx-auto text-center pt-3"
              >
                Bebelac 1 Infant Milk Formula, From 0-6 Months, 400 GM
              </p>
            </div>
            {/*  */}
            <div className="card pt-4">
              <div className="">
                <img
                  src={"/images/header/mockup-slider-en.png"}
                  style={{ width: "90px" }}
                  className="slick-slide-image mx-auto"
                />
              </div>

              <p
                style={{
                  width: "9.8rem",
                  fontSize: "14.2px",
                }}
                className="slick-slide-label py-1 mx-auto text-center pt-3"
              >
                Bebelac 1 Infant Milk Formula, From 0-6 Months, 400 GM
              </p>
            </div>
            {/*  */}
            <div className="card pt-4">
              <div className="">
                <img
                  src={"/images/header/mockup-slider-en.png"}
                  style={{ width: "90px" }}
                  className="slick-slide-image mx-auto"
                />
              </div>

              <p
                style={{
                  width: "9.8rem",
                  fontSize: "14.2px",
                }}
                className="slick-slide-label py-1 mx-auto text-center pt-3"
              >
                Bebelac 1 Infant Milk Formula, From 0-6 Months, 400 GM
              </p>
            </div>
            {/*  */}
            <div className="card pt-4">
              <div className="">
                <img
                  src={"/images/header/mockup-slider-en.png"}
                  style={{ width: "90px" }}
                  className="slick-slide-image mx-auto"
                />
              </div>

              <p
                style={{
                  width: "9.8rem",
                  fontSize: "14.2px",
                }}
                className="slick-slide-label py-1 mx-auto text-center pt-3"
              >
                Bebelac 1 Infant Milk Formula, From 0-6 Months, 400 GM
              </p>
            </div>
            {/*  */}
            <div className="card pt-4">
              <div className="">
                <img
                  src={"/images/header/mockup-slider-en.png"}
                  style={{ width: "90px" }}
                  className="slick-slide-image mx-auto"
                />
              </div>

              <p
                style={{
                  width: "9.8rem",
                  fontSize: "14.2px",
                }}
                className="slick-slide-label py-1 mx-auto text-center pt-3"
              >
                Bebelac 1 Infant Milk Formula, From 0-6 Months, 400 GM
              </p>
            </div>
            {/*  */}
            <div className="card pt-4">
              <div className="">
                <img
                  src={"/images/header/mockup-slider-en.png"}
                  style={{ width: "90px" }}
                  className="slick-slide-image mx-auto"
                />
              </div>

              <p
                style={{
                  width: "9.8rem",
                  fontSize: "14.2px",
                }}
                className="slick-slide-label py-1 mx-auto text-center pt-3"
              >
                Bebelac 1 Infant Milk Formula, From 0-6 Months, 400 GM
              </p>
            </div>
            {/*  */}
            <div className="card pt-4">
              <div className="">
                <img
                  src={"/images/header/mockup-slider-en.png"}
                  style={{ width: "90px" }}
                  className="slick-slide-image mx-auto"
                />
              </div>

              <p
                style={{
                  width: "9.8rem",
                  fontSize: "14.2px",
                }}
                className="slick-slide-label py-1 mx-auto text-center pt-3"
              >
                Bebelac 1 Infant Milk Formula, From 0-6 Months, 400 GM
              </p>
            </div>
            {/*  */}
            <div className="card pt-4">
              <div className="">
                <img
                  src={"/images/header/mockup-slider-en.png"}
                  style={{ width: "90px" }}
                  className="slick-slide-image mx-auto"
                />
              </div>

              <p
                style={{
                  width: "9.8rem",
                  fontSize: "14.2px",
                }}
                className="slick-slide-label py-1 mx-auto text-center pt-3"
              >
                Bebelac 1 Infant Milk Formula, From 0-6 Months, 400 GM
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
