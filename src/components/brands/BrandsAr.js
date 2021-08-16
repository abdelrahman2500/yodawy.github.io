/** @format */
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import "./index.scss";
import { Link } from 'react-router-dom';
export default function Brands() {
  const [brands, setBrands] = useState(new Set());
  const [myArr, setmyArr] = useState([]);
  const context = useContext(Context);

  useEffect(() => {
    context.products.map((pro) => setBrands(brands.add(pro.brandAr)));
    setmyArr([...brands]);
  }, [context.products]);

  return (
    <div className="brands  my-3">
      <h3 className="mb-3 fw-bold" onClick={()=> context.setFilterd(context.products)}>الماركات</h3>
      <div className="brand__container w-100">
        <ul className="column justify-content-center list-unstyled mb-0">
          {myArr.map((brand) => {
            return (
              <li
                key={brand}
                className="col-12 my-2 text-uppercase fw-bold "
              >
                <Link to="/shop" onClick={()=> context.setFilterd(context.products.filter(p => p.brandAr == brand))} className="hoverA">
                  <span className="m-2">{brand}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    
  );
}