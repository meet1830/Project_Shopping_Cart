import { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";

const Cart = createContext();
faker.seed(200);

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  function massMeasurement() {
    const mass = Math.floor(Math.random() * 25) + 1;;
    return mass <= 10 ? `${mass} lb` : `${mass} oz`
  }

  const productsArray = [...Array(200)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    weight: massMeasurement()
  }));

  const [products] = useState(productsArray);

  let categories = ["Produce", "Prepared foods", "Canned foods and Soups", "Bakery", "Dairy and Eggs", "Frozen", "Meat and Seafood", "category1", "category2", "category3", "category4", "category5", "category6", "category7", "category8", "category9", "category10"];

  const categoriesId = categories.map((item) => item.split(" ").join(""));

  const categoriesIcons = ["fa-carrot", "fa-candy-cane", "fa-cake-candles", "fa-fish-fins", "fa-egg", "fa-ice-cream", "fa-drumstick-bite", "fa-utensils", "fa-utensils", "fa-utensils", "fa-utensils", "fa-utensils", "fa-utensils", "fa-utensils", "fa-utensils", "fa-utensils", "fa-utensils"];

  return (
    <Cart.Provider value={{ cart, setCart, products, categories, categoriesId, categoriesIcons }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;