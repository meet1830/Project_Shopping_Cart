import React, { useEffect, useState } from "react";
import { CartState } from "../Context";
import SingleProduct from "./SingleProduct";
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      <p>{cart.length} items</p>
      <br />
      <div className="product-cart-container">
        {cart.length !== 0 ? cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        )) : <div className="empty-cart">
          <h2>Add some items to your cart!</h2>
          <p> <Link to='/'><i className="fa-solid fa-arrow-left"></i> Go to Home page</Link> </p>
        </div>}
      </div>
      {cart.length > 0 ?
        <h3>Grand Total: ${total}</h3> : ""}
    </div>
  );
};

export default Cart;
