import "../assets/css/Vegan.css";
import "../assets/css/plates.css";
import API_KEY from "../api/apiKey";
import { useState, useEffect } from "react";

const PlateGlutenFree = (props) => {
    let id= 766453;
    const [image, setImage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [title, setTitle] = useState("");
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
          setTitle(data.title);
          setServings(data.servings);
          setdishTypes(data.dishTypes);
          setPrice(data.pricePerServing);
        })
        .catch(() => {
          console.log("error");
        });
    }, [id]);
    
      return (
        <div className="container">
          <div className="card-text">
              {title}
              <img src={image} alt="" />
          <ul className = "listInfo">
            <li>Servings: {servings}</li>
            <li>Dish Type: {dishTypes}</li>
            <li>Price: {price}</li>
          </ul>
            <div className="tools">
              <a href={imageUrl}>Go to Recipe</a>
              <button className="delete">X</button>
            </div>
          </div>
        </div>
      );
    };
    
export default PlateGlutenFree;
