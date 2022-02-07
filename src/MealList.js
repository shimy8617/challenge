import React from "react";
import Meal from "./Meal";

export default function MealList({ mealData }) {
  const dishes = mealData.dishes;

  return (
    <main>
      <section className="nutrients">
        <h1>Macros</h1>
        <ul>
          <li>Calories: {dishes.image}</li>
          <li>Carbohydrates: {dishes.name}</li>
        </ul>
      </section>

      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}