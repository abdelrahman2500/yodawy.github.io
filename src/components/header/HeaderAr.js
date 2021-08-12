/** @format */

import React from "react";
import "./index.scss";

export default function HeaderAr() {
  return (
    <div className="header my-4">
      <div className="mx-4 inner p-5">
        <div className="row">
          <div className="d-none d-sm-block col-sm-7 align-self-center text-center">
            <h1 className="mb-5">يُداوي: دليلك للصحة والجمال</h1>
            <p>
              استمتع بتجربة تسوق سهلة مع آلاف منتجات العناية الشخصية بتوصيل فوري
              إلى باب المنزل.
              <br />
              بالإضافة للمزيد من العروض والخصومات والمميزات الأخرى بانتظارك.
            </p>
          </div>
          <div className="col-12 col-sm-5">
            <div className="box row justify-content-center ">
              <img src={"/images/header/mockup-popup.png"} className="img" />
            </div>

            <h2 className="d-sm-none h4 mt-4 text-center">
              يُداوي: دليلك للصحة والجمال
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
