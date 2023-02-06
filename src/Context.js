import { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";

const Cart = createContext();
faker.seed(100);

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  const productsArray = [...Array(100)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
  }));

  const [products] = useState(productsArray);

  let categories = ["Produce", "Prepared foods", "Canned foods and Soups", "Bakery", "Dairy and Eggs", "Frozen", "Meat and Seafood"];

  const categoriesId = categories.map((item) => item.split(" ").join(""));

  return (
    <Cart.Provider value={{ cart, setCart, products, categories, categoriesId }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;