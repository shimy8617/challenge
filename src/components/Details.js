import React from "react";
import PlateVegan from "./PlateVegan";

export default function Details({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    <main>
      <section className="nutrients">
        <h1>Macros</h1>
        <ul>
          <li>Calories: {nutrients.calories.toFixed(0)}</li>
          <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          <li>Fat: {nutrients.fat.toFixed(0)}</li>
          <li>Protein: {nutrients.protein.toFixed(0)}</li>
        </ul>
      </section>

      <section className="meals">
        {mealData.props.map((props) => {
          return <PlateVegan key={props.id} meal={props} />;
        })}
      </section>
    </main>
  );
}
