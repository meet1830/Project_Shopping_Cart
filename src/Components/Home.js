import React from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";
import { CartState } from "../Context";

faker.seed(100);

const Home = () => {
  const { products } = CartState();

  return (
    <div className="productContainer">
      <span style={{ fontSize: 30 }}>Products Page</span>
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
