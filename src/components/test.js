/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import PlateVegan from "./PlateVegan";
import axios from "axios";
import API_KEY from "../api/apiKey";

const GetInfo = () => {
  const id = 716426;
  const [getInfo, setGetInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=false`
      )
      .then(function (response) {
        setGetInfo(response.data.results);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }, []);

  return (
    <article>
      {getInfo.map((info) => {
        return (
          <PlateVegan
            image={info.image}
            sourceUrl={info.sourceUrl}
            price={info.pricePerServing}
          />
        );
      })}
    </article>
  );
};
export default GetInfo;
