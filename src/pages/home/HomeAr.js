/** @format */

import React from "react";
import AboutCompAr from "../../components/about-comp/AboutCompAr";
import BranchesAr from "../../components/branches/BranchesAr";
import HeaderAr from "../../components/header/HeaderAr";
import NavbarAr from "../../components/navbar/NavbarAr";
import WhoWeAreAr from "../../components/who-we-are/WhoWeAreAr";

export default function HomeAr() {
  return (
    <div>
      {/* navbar */}
      <NavbarAr compo={true} />
      {/* barnches */}
      <BranchesAr nothome={true} />

      {/* header */}
      <HeaderAr />
      {/* Categories */}

      {/* Best Sellers */}

      {/* Who We Are */}
        <WhoWeAreAr />
      {/* about us component */}
        <AboutCompAr />
      {/* Featured products */}

      {/* Subscribe */}

      {/* footer */}
    </div>
  );
}
