/** @format */
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import "./index.scss";
export default function Branches() {
  const [branches, setBranches] = useState(new Set());
  const [myArr, setmyArr] = useState([]);
  const context = useContext(Context);

  useEffect(() => {
    context.products.map((pro) => setBranches(branches.add(pro.categoryName)));
    setmyArr([...branches]);
  }, [context.products]);

  console.log(myArr);

  return (
    <div className="branches">
      <div className="container d-sm-none d-md-block">
        <ul className="row justify-content-center list-unstyled">
          {myArr.map((branch) => {
            return (
              <li
                key={branch}
                className="col-md-4 col-lg-auto my-2 text-uppercase fw-bold "
              >
                <a href="https://www.yodawy.com/shop/" className="hoverA">
                  <span>{branch}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    
  );
}

//
//
//
//
// // for (let i = 0; i < context.products.length; i++) {
//   var category = context.products[i].categoryName;

//   if (category.includes("_")) {
//     category = category.replace("_", " ");
//   }
//   if (category === "bath body") {
//     category = "bath & body";
//   }
//   set1.add(category.toUpperCase());
// }
//
//
//
//
//                x  {brancheses}
//   BEAUTY   CONTACT LENCES      DERMOCOSMETICS     HAIR CARE     BABY
//   BATH & BODY    MEN CARE    ORAL CARE      PERSONAL CARE
//
//
//
//        url contact-lenses in yodawy -
//  https://www.yodawy.com/shop/contact-lenses
