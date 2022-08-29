import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>

      <Header onDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode} />
      <Filter onCategoryChange={handleCategoryChange} />
      <ShoppingList items={itemData} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
