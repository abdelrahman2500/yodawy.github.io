/** @format */

import React from "react";
import "./index.scss";
import Branches from "../../components/branches/Branches";
import Navbar from "./../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import WhoWeAre from "../../components/who-we-are/WhoWeAre";
import AboutComp from "../../components/about-comp/AboutComp";

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

      {/* Who We Are */}
        <WhoWeAre />
      {/* about us component */}
        <AboutComp />
      {/* Featured products */}

      {/* Subscribe */}

      {/* footer */}
    </div>
  );
}
