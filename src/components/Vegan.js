/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import Plate from "./Plate";
import axios from "axios";
import API_KEY from "../api/apiKey";

const VeganPlates = () => {
  const [veganPlates, setVeganPlates] = useState([]);

  useEffect(() => {
    let request = async () => {
      await axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&diet=vegan`
        )
        .then(function (response) {
          setVeganPlates(response.data.results);
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    };
    request();
  }, []);

  return (
    <article>
      {veganPlates.map((plate, index) => {
        if (index < 2) {
          return (
            <Plate
              key={plate.id}
              title={plate.title}
              image={plate.image}
              src={plate.sourceUrl}
              sourceUrl={plate.sourceUrl}
              price={plate.pricePerServing}
            />
          );
        }
      })}
    </article>
  );
};
export default VeganPlates;
