import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import  {useState} from 'react';
import * as Yup from 'yup';
import './App.css';
import MealList from "./MealList";



 
 // And now we can use these
 const MealForm = () => {

  
const apiUrl = "40302453062c462299983b93e3e85f00";

const [mealData, setMealData] = useState(null); 

const [diet, setDiet] = useState(["Vegan", 'gluten-free', 'vegetarian']);
const Add = diet.map(Add => Add)
const handleChange= (e) => {console.clear(); console.log((diet[e.target.value]))}

 function getMealData() {
  fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=${apiUrl}&timeFrame=day&diet=${diet}`)
    .then((response) => response.json())
    .then((data) => {
      setMealData(data);
    })
    .catch(() => {
      console.log("error");
    });
}



return (
  <>
    <h1>Elige un Menu!</h1>
    <Formik
      initialValues={{
        FoodType: '', // added for our select
      }}
      validationSchema={Yup.object({
          foodType: Yup.string()
            .oneOf(
              ['vegan', 'gluten-free', 'vegetarian']
            )
.required('Required'),
})}
onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
        }}
      >
        <Form> 
          <select onChange={e => handleChange(e)} label="Food Type" name="foodType">
          {
        Add.map((address, key) => <option value={key}>{address}</option>)
      }
          </select>

          <button onClick={getMealData} type="submit">Buscar</button>
        </Form>
      </Formik>
      {mealData && <MealList mealData={mealData} />}
    </>
  );
};

function App() {
  return (
  <MealForm />
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);