/** @format */

import React from "react";
import "./index.scss";
import Branches from "../../components/branches/Branches";
import Navbar from "./../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import BestSeller from "../../components/bestSellers/BestSeller";
import WhoWeAre from "../../components/who-we-are/WhoWeAre";
import AboutComp from "../../components/about-comp/AboutComp";
import Subscribe from "../../components/subscribe/Subscribe";

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
      <WhoWeAre />
      {/* about us component */}
      <AboutComp />
      {/* Featured products */}

      {/* Subscribe */}
      <Subscribe />
      {/* footer */}
    </div>
  );
}
