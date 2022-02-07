import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");
  const apiUrl = "40302453062c462299983b93e3e85f00";


  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/queries/analyze?apiKey=${apiUrl}&includeNutrition=false&q=vegan`
    )
      .then((response) => response.json())
      
      .catch(() => {
        console.log("error");
      });
  });

  return (
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>

      <a href={meal.sourceUrl}>Go to Recipe</a>
    </article>
  );
}