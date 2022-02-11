/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import Plate from "./Plate";
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
            <Plate
              key={plate.id}
              title={plate.title}
              image={plate.image}
              src={plate.sourceUrl}
            />
          );
        }
      })}
    </article>
  );
};
export default Ketogenic;
