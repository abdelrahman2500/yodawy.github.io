/** @format */

import React, { useContext, useEffect, useState } from "react";
import Branches from "../../components/branches/Branches";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Context } from "./../../context/Context";

import "./index.scss";
import Footer from "./../../components/footer/Footer";
import Product from "../../components/products/Product";

export default function Shop() {
  const context = useContext(Context);
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState('')


  const [show, setShow] = useState(
    localStorage.setItem(
      "show-style",
      localStorage.getItem("show-style") === null
        ? 4
        : localStorage.getItem("show-style")
    )
  );

  function showStyle(col) {
    setShow(localStorage.setItem("show-style", col));
  }

  function handleSortProucts(e){
    let sort = e.target.value ;
    setSort(sort)
    setProducts(products.slice().sort((a,b) => (
        sort === 'low' ? ((a.price > b.price) ? 1 : -1) 
        : sort === 'high' ?  ((a.price < b.price) ? 1 : -1) 
        : sort === 'latest' ?  (a.date < b.date ? 1 : -1) 
        : ( a.id < b.id ? 1 : -1 )
    )))
}

  useEffect(() => {
    setShow(localStorage.getItem("show-style"));
  }, [show]);

  useEffect(() => {
    setProducts(context.filterd);
  }, [context.filterd]);

  return (
    <div className="shop">
      {/* navbar */}
      <Navbar compo={true} />
      {/* barnches */}
      <Branches nothome={false} />
      
      {/* sidebar and products */}
      
      {products.length !== context.filterd.length ? 
      <div className="loading row">
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
        : 
        <div className="container my-3">
          <div className="row">
            <div className="d-none d-md-block col-3">
              {/* sidebar */}
              <Sidebar />
            </div>
            
            <div className="col-12 col-md-9">
              {/* products */}
              <div className="filter border p-2 bg-light">
                <div className="container">
                  <div className="row">
                    <div className="d-none d-md-block col-5">
                      <div className="icons">
                        <button className="btn" onClick={() => showStyle(12)}>
                          <i className="fas fa-bars"></i>
                        </button>
                        <button className="btn" onClick={() => showStyle(6)}>
                          <i className="fas fa-th-large"></i>
                        </button>
                        <button className="btn" onClick={() => showStyle(4)}>
                          <i className="fas fa-th"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col-6 col-md-3"></div>
                    <div className="col-6 col-md-4">
                      <select className="form-select form-select-sm" aria-label=".form-select-sm example" value={sort} onChange={handleSortProucts}>
                        <option defaultValue="">All</option>
                        <option value="latest">Latest</option>
                        <option value="low">Price: Low To High</option>
                        <option value="high">Price: High To Low</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products mt-3">
                <div className="row">
                  {products.map((product) => (
                    <div className={`col-12 col-sm-${show}`} key={product.id}>
                      <Product
                        product={product}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      
      {/* footer */}
      <Footer />
    </div>
  );
}
