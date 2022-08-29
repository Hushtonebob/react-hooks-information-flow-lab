import React from "react";
import Item from "./Item";

function ShoppingList({ items, selectedCategory}) {

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
  );
}

export default ShoppingList;
