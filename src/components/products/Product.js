/** @format */

import React from "react";
import "./index.scss";
import $ from "jquery";
import { Context } from './../../context/Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Product(props) {
  const context = useContext(Context);

  let product = props.product
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
      <div className="product_inner text-center">
        <div className=" w-100 top1">
          <img src={process.env.PUBLIC_URL +`/images/products/${product.imagePath}`}  data-bs-toggle="modal" data-bs-target={`#exampleModal${product.id}`} className="" />

          <div className="modal text-start fade" id={`exampleModal${product.id}`} tabIndex="-1" aria-labelledby={`exampleModal${product.id}Label`} aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header ">
                  <h5 className="modal-title" id={`exampleModal${product.id}Label`}>{product.productName}</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-12 col-md-4 row align-items-center">
                      <div className="box row justify-content-center ">
                        <img src={`/images/products/${product.imagePath}`}  className="" />
                      </div>
                    </div>
                    <div className="col-12 col-md-8">
                      <div className="row">
                        <div className="col-12 py-2">
                          <p className="lead badge bg-success text-white">in stock</p>
                        </div>
                        <div className="col-12 py-2">
                          <Link to="/shop" className="text-decoration-none" data-bs-dismiss="modal" onClick={()=> context.setFilterd(context.products.filter(p => p.brand == product.brand))}>{product.brand}</Link>
                        </div>
                        <div className="col-12 py-2 border-bottom">
                          <h2 className="h3 fw-bold">{product.offer == "no"? product.description : `(${product.offer}) ${product.description}`}</h2>
                        </div>
                        <div className="col-12 py-2 border-bottom">
                          <h5>{product.productName}</h5>
                        </div>
                        <div className="col-12 py-2 text-start iconss">
                          <p className="m-1"><i className="fas fa-check-circle text-success"></i> Fast Delivery!</p>
                          <p className="m-1"><i className="fas fa-shopping-bag"></i> Buy this item for less</p>
                          <p className="m-1"><i className="fas fa-cart-arrow-down"></i> Buy this item as a part of a bundle</p>
                        </div>
                        <div className="col-12 py-2">
                          <h5>Price : {product.price} L.E</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-success"  data-bs-dismiss="modal" onClick={()=> context.addToCart(product)}>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" middle">
          <p className="my-3">{product.productName}</p>
        </div>

        <div className="my-0 py-1  border-top w-100 bottom">
          <p className="my-2 mb-3">Price {product.price} L.E</p>
          

          <button className="my-0 py-1" onClick={()=> context.addToCart(product)}>
            <i className="fas fa-shopping-cart fa-2x"></i>
          </button>
        </div>
      </div>
      <div className="product_overlay">
        <h2>Added to cart</h2>
        <i className="fa fa-check"></i>
      </div>
    </div>
  );
}
