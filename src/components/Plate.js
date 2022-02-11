import "../assets/css/Vegan.css";
import "../assets/css/plates.css";

const Plate = (props) => {
  return (
    <div className="container">
      <div className="card-text">
        {props.title}
        {props.price}
        <img alt="Food" src={props.image}></img>
        <div className="tools">
          <a href={props.sourceUrl}>Go to Recipe</a>
          <button>Delete from Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Plate;
