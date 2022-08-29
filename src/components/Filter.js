import React from "react";

function Filter({onCategoryChange}){

return (
    <div className="Filter">
            <div className="ShoppingList">
    <select name="filter" onChange={onCategoryChange}>
      <option value="All">Filter by category</option>
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Dessert">Dessert</option>
    </select>
    </div>
    </div>
    )
};

export default Filter