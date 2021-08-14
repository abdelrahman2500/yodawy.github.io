/** @format */

import React from "react";
import AboutCompAr from "../../components/about-comp/AboutCompAr";
import BestSeller from "../../components/bestSellers/BestSeller";
import BranchesAr from "../../components/branches/BranchesAr";
import FooterAr from "../../components/footer/FooterAr";
import HeaderAr from "../../components/header/HeaderAr";
import NavbarAr from "../../components/navbar/NavbarAr";
import SubscribeAr from "../../components/subscribe/SubscribeAr";
import WhoWeAreAr from "../../components/who-we-are/WhoWeAreAr";
import BestSellerAr from "../../components/bestSellers/BestSellerAr";
import CategoriesAr from "../../components/categories/CategoriesAr";

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
      <CategoriesAr/>
      {/* Best Sellers */}
      <BestSellerAr />
      {/* Who We Are */}
      <WhoWeAreAr />
      {/* about us component */}
      <AboutCompAr />
      {/* Featured products */}

      {/* Subscribe */}
      <SubscribeAr />
      {/* footer */}
        <FooterAr />
    </div>
  );
}
