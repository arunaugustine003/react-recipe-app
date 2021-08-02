import React from "react";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calorific Value={calories.toFixed(2)}</p>
      <img className="recipe-image" src={image} alt="" />
    </div>
  );
};
export default Recipe;
