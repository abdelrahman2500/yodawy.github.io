/** @format */

import React from "react";
import "./index.scss";
import Branches from "../../components/branches/Branches";
import Navbar from "./../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import BestSeller from "../../components/bestSellers/BestSeller";

export default function Home() {
  return (
    <div>
      {/* navbar */}
      <Navbar compo={true} />
      {/* barnches */}
      <Branches nothome={true} />
      {/* header */}
      <Header />
      {/* Categories */}

      {/* Best Sellers */}
      <BestSeller />
      {/* Who We Are */}

      {/* about us component */}

      {/* Featured products */}

      {/* Subscribe */}

      {/* footer */}
    </div>
  );
}
