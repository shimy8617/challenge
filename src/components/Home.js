import React from "react";
import { Formik, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import "../assets/css/home.css";

import Details from "./Details";
import Vegan from "./Vegan";
import GlutenFree from "./Gluten-Free";
import Ketogenic from "./Ketogenic";
import API_KEY from "../api/apiKey";

const Home = () => {
  const [mealData, setMealData] = useState(null);

  const [diet, setDiet] = useState(["Vegan", "Gluten-Free", "Ketogenic"]);
  const Add = diet.map((Add) => Add);
  const handleChange = (e) => {
    console.clear();
    console.log(diet[e.target.value]);
  };

  function filter() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}&timeFrame=day&diet=${diet}`
    )
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
      <div className="card">
        <div className="card-body">
          <h1>Restaurant Menu</h1>
          <br />
          <h3 className="App-title">Recipe Search</h3>
          <section className="controls">
            <Formik
              initialValues={{
                FoodType: "", // added for our select
              }}
              validationSchema={Yup.object({
                foodType: Yup.string()
                  .oneOf(["vegan", "gluten-free", "vegetarian"])
                  .required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form>
                <select
                  onChange={(e) => handleChange(e)}
                  className="browser-default custom-select"
                >
                  {Add.map((address, key) => (
                    <option key={key} value={key}>
                      {address}
                    </option>
                  ))}
                </select>
                <button type="submit" onClick={filter}>
                  Filtrar
                </button>
              </Form>
            </Formik>
          </section>
          {mealData && <Details mealData={mealData} />}
          <div className="diets">
            {<Vegan />}
            {<GlutenFree />}
            {<Ketogenic />}
            <div className="tx-link">
              <a href="https://www.freepik.com/photos/frame">
                Frame photo created by valeria_aksakova - www.freepik.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
