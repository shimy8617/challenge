/* eslint-disable array-callback-return */
import "../assets/css/Vegan.css";
import "../assets/css/plates.css";
import API_KEY from "../api/apiKey";
import { useState, useEffect } from "react";

const PlateVegan = (props) => {
  let id = 782600;
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [servings, setServings] = useState("");
  const [dishTypes, setdishTypes] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImage(data.image);
        setImageUrl(data.sourceUrl);
        setServings(data.servings);
        setdishTypes(data.dishTypes);
        setPrice(data.pricePerServing);
      })
      .catch(() => {
        console.log("error");
      });
  }, [id]);

  function deleteItem() {
    alert("faltó esta función");
  }

  return (
    <div className="container">
      <div className="card-text">
        {props.title}
        <img src={image} alt="" />
        <ul className="listInfo">
          <li>Servings: {servings}</li>
          <li>Dish Type: {dishTypes}</li>
          <li>Price: {price}</li>
        </ul>
        <div className="tools">
          <a href={imageUrl}>Go to Recipe</a>
          <button className="delete" onClick={() => deleteItem()}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlateVegan;
