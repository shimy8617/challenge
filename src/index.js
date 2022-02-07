import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import  {useState} from 'react';
import * as Yup from 'yup';
import './App.css';
import MealList from "./MealList";


const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
 <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
     <div className="error">{meta.error}</div>
     ) : null}
     </div>
   );
 };

 
 // And now we can use these
 const MealForm = () => {

const [mealData, setMealData] = useState(null); 
const [diet, setDiet] = useState("");
const apiUrl = "40302453062c462299983b93e3e85f00";

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

function handleChange(e) {
  setDiet(e.target.value);
  console.log(e);
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
          <MySelect onChange={handleChange} label="Food Type" name="foodType">
            <option value="">Select a food type</option>
            <option  value="vegan">Vegan</option>
            <option  value="gluten-free">Gluten-Free</option>
            <option  value="vegetarian">Vegetarian</option>
          </MySelect>

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