/** @format */

import React from "react";
import "./index.scss";
import $ from "jquery";

export default function ProductAr(props) {
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
      <div class="product_inner text-center">
        <div className=" w-100 top1">
          <img src={`/images/products/${props.image}`} className="" />
        </div>
        <div className=" middle">
          <p className="my-3">{props.name}</p>
        </div>

        <p className="my-2 mb-3">السعر {props.price} يورو</p>
        <button className="add-btn my-0 py-1">
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
