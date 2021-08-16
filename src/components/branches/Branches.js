/** @format */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./index.scss";
export default function Branches(props) {
  const [branches, setBranches] = useState(new Set());
  const [myArr, setmyArr] = useState([]);
  const context = useContext(Context);

  useEffect(() => {
    context.products.map((pro) => setBranches(branches.add(pro.categoryName)));
    setmyArr([...branches]);
  }, [context.products]);

  return (
    <div
      className={
        props.nothome == true
          ? "branches d-none d-md-block my-3"
          : "branches border1 d-none d-md-block my-3"
      }
    >
      <div className="container">
        <ul className="row justify-content-center list-unstyled mb-0">
          {myArr.map((branch) => {
            return (
              <li
                key={branch}
                className="col-md-4 col-lg-auto my-2 text-uppercase fw-bold "
              >
                <Link to="/shop"  onClick={()=> context.setFilterd(context.products.filter(p => p.categoryName == branch))} className="hoverA">
                  <span>{branch}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
