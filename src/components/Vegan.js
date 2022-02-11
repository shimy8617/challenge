/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import PlateVegan from "./PlateVegan";
import PlateVeganB from "./PlateVegan2";
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
        if (index === 9) {
          return (
            <PlateVegan
              key={plate.id}
              title={plate.title}
              src={plate.sourceUrl}
            />
          );
        }
        
      })}
      {veganPlates.map((plate, index) => {
        if (index === 2) {
          return (
            <PlateVeganB
              key={plate.id}
              title={plate.title}
            />
          );
        }
        
      })}
    </article>
  );
};
export default VeganPlates;
