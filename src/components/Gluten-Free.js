/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import PlateGluten from "./PlateGluten";
import axios from "axios";
import API_KEY from "../api/apiKey";

const GlutenFree = () => {
  const [glutenFreePlates, setGlutenFreePlates] = useState([]);

  useEffect(() => {
    let request = async () => {
      await axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&diet=gluten-free`
        )
        .then(function (response) {
          setGlutenFreePlates(response.data.results);
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    };
    request();
  }, []);

  return (
    <article>
      {glutenFreePlates.map((plate, index) => {
        if (index === 8) {
          return (
            <PlateGluten
              key={plate.id}
              title={plate.title}
            />
          );
        }
      })}
    </article>
  );
};
export default GlutenFree;
