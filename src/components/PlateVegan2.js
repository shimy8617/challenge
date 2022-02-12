import "../assets/css/Vegan.css";
import "../assets/css/plates.css";
import API_KEY from "../api/apiKey";
import { useState, useEffect } from "react";

const PlateVeganB = (props) => {
  let id= 782601;
  const [image, setImage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
  
    useEffect(() => {
      fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=false`
      )
      .then((response) => response.json())
      .then((data) => {
        setImage(data.image);
        setImageUrl(data.sourceUrl);
      })
      .catch(() => {
        console.log("error");
      });
  }, [id]);
  
    return (
      <div className="container">
        <div className="card-text">
  
          <div className="tools">
            {props.title}
            <img src={image} alt="" />
            <a href={imageUrl}>Go to Recipe</a>
            <button className="delete">X</button>
          </div>
        </div>
      </div>
    );
  };
  
export default PlateVeganB;
