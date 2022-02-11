import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3500",
});

export const Apiurl =
  "https://api.spoonacular.com/recipes/716429/information?apiKey=40302453062c462299983b93e3e85f00&includeNutrition=false";
