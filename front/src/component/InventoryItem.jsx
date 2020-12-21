import React from "react";

const InventoryItem = (props) => {
  const {name, amount, unit} = props.ingredient;

  return (
    <div className="Ingredient">
        <div className="Ingredient__title">{name}</div>
        <div className="Ingredient__count">{amount}</div>
        <div className="Ingredient__unit">{unit}</div>
    </div>
  );
};

export default InventoryItem;
