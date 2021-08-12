/** @format */
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import "./index.scss";
export default function Brands(props) {
  const [brands, setBrands] = useState(new Set());
  const [myArr, setmyArr] = useState([]);
  const context = useContext(Context);

  useEffect(() => {
    context.products.map((pro) => setBrands(brands.add(pro.brand)));
    setmyArr([...brands]);
  }, [context.products]);

  console.log(myArr);

  return (
    <div className={props.nothome == true ? "brands d-none d-md-block my-3" : "brands border1 d-none d-md-block my-3"} >
      <div className="container" id="brand__container">
        <ul className="column justify-content-center list-unstyled mb-0">
          {myArr.map((brands) => {
            return (
              <li
                key={brands}
                className="col-md-4 col-lg-auto my-2 text-uppercase fw-bold "
              >
                <a href="https://www.yodawy.com/shop/" className="hoverA">
                  <span className="m-2">{brands}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    
  );
}