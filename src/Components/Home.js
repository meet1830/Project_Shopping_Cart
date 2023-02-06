import React, { useEffect, useState } from "react";
import CategoryProducts from "./CategoryProducts";
import { CartState } from "../Context";
import NavbarSide from "./NavbarSide";
import NavbarTop from "./NavbarTop";

const Home = () => {
  const { categories } = CartState();

  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="home-container">
      {isDesktop ? (
        <div id="navbar-side">
          <NavbarSide />
        </div>) : (
        <NavbarTop />
      )}
      <div id="home-products">
        {categories.map((item, index) => (
          <CategoryProducts key={index} category={item} idx={index + 1} />
        ))}
      </div>
    </div >
  );
};

export default Home;
