import React from "react";
import CategoryProducts from "./CategoryProducts";
import { CartState } from "../Context";
import NavbarSide from "./NavbarSide";

const Home = () => {
  const { categories } = CartState();

  return (
    <div className="home-container">
      <div id="navbar-side">
        <NavbarSide />
      </div>
      <div id="home-products">
        {categories.map((item, index) => (
          <CategoryProducts key={index} category={item} idx={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Home;
