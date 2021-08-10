/** @format */
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import "./index.scss";
export default function Branches() {
  const [branches, setBranches] = useState(new Set());
  const [myArr, setmyArr] = useState([]);
  const context = useContext(Context);

  useEffect(() => {
    context.products.map((pro) =>
      setBranches(branches.add(pro.categoryName.toUpperCase()))
    );
    setmyArr([...branches]);
  }, [context.products]);

  console.log(myArr);

  return (
    <div className="container">
      <ul className="row justify-content-center">
        {myArr.map((x) => {
          return (
            <li key={x} className="d-none d-md-block col-md-4 col-lg-auto mt-2">
              <a href="https://www.yodawy.com/shop/" className="tt">
                <span>{x}</span>
              </a>
            </li>
          );
        })}
      </ul>
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
