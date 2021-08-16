/** @format */

import React from "react";
import "./index.scss";
import $ from "jquery";

export default function Product(props) {
  $(function () {
    "use strict";

    function addToBasket() {
      $(".counter").animate(
        {
          opacity: "0",
        },
        300,
        function () {
          $(".counter").delay(300).animate({
            opacity: "1",
          });
        }
      );
    }

    // Add To Basket Animation
    $("button").on("click", function () {
      addToBasket();
      $(this)
        .parent()
        .parent()
        .find(".product_overlay")
        .css({
          transform: " translateY(0px)",
          opacity: "1",
          transition: "all ease-in-out .45s",
        })
        .delay(1500)
        .queue(function () {
          $(this)
            .css({
              transform: "translateY(-500px)",
              opacity: "0",
              transition: "all ease-in-out .45s",
            })
            .dequeue();
        });
    });
  });

  return (
    <div className="product">
      <div class="product_inner">
        <div className="h-50 w-100">
          <img src={`/images/products/${props.image}`} className="h-100 w-50" />
        </div>
        <div className="h-25">
          <p className="my-3">{props.name}</p>
          <p className="my-2 mb-3">Price £{props.price}</p>
        </div>

        <button className="my-0 py-1 h-25">
          <i class="fas fa-shopping-cart fa-2x"></i>
        </button>
      </div>
      <div class="product_overlay">
        <h2>Added to basket</h2>
        <i class="fa fa-check"></i>
      </div>
    </div>
  );
}
