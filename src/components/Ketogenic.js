/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import PlateKeto from "./PlateKeto";
import axios from "axios";
import API_KEY from "../api/apiKey";

const Ketogenic = () => {
  const [ketogenicPlates, setKetogenicPlates] = useState([]);

  useEffect(() => {
    let request = async () => {
      await axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&diet=ketogenic`
        )
        .then(function (response) {
          setKetogenicPlates(response.data.results);
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    };
    request();
  }, []);

  return (
    <article>
      {ketogenicPlates.map((plate, index) => {
        if (index < 1) {
          return (
            <PlateKeto
              key={plate.id}
              title={plate.title}
            />
          );
        }
      })}
    </article>
  );
};
export default Ketogenic;
