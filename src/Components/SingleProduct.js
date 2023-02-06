import React from "react";
import { CartState } from "../Context";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = CartState();

  function massMeasurement() {
    const mass = Math.floor(Math.random() * 25) + 1;;
    return mass <= 10 ? `${mass} lb` : `${mass} oz`
  }

  return (
    <div className="product">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <p>${prod.price}</p>
        <p>{prod.name}</p>
        <p>{massMeasurement()}</p>
      </div>

      {cart.includes(prod) ? (
        <button
          className="add remove"
          onClick={() => {
            setCart(cart.filter((c) => c.id !== prod.id));
          }}
        >
          -
        </button>
      ) : (
        <button
          className="add"
          onClick={() => {
            setCart([...cart, prod]);
          }}
        >
          +
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
