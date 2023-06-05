import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, addCart] = useState(true);

  function handleCart() {
    addCart((cart) => !cart);
  }

  const toggleCart = cart ? "" : "in-cart";
  const color = cart ? "yellow" : "pink";

  return (
    <li className={toggleCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart} style={{ background: color }}>
        {cart ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
