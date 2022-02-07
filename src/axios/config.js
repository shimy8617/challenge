
import axios from 'axios'; 

const apiUrl = "40302453062c462299983b93e3e85f00";

const instance = axios.create({
    baseURL: `https://spoonacular.com/recipes/?apiKey=${apiUrl}&includeNutrition=true`,
    timeout: 1000,
  });

  export default instance;