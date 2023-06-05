import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filteredItems, setFilteredItems] = useState(items);

  function handleFilterCategory(e) {
    setFilteredItems(items.filter((item) => item.category.includes(e.target.value)));
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterCategory}>
          <option value="">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
