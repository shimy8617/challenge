import React, { useState } from "react";
import './App.css';
import axios from 'axios';
import instance from './axios/config';
import MealList from "./MealList";

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  const [diet, setDiet] = useState("");
  const apiUrl = "40302453062c462299983b93e3e85f00";

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${apiUrl}&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function getMealImage() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${apiUrl}&timeFrame=day&targetCalories=${calories}&diet=${diet}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
    let connection = axios.post(instance.baseURL)
    return connection;
  }

  function handleChange(e) {
    setCalories(e.target.value);
    setDiet(e.target.value);
  }

  
  return (
    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ex. Vegan"
          onChange={handleChange}
        />
        <button onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default App;
