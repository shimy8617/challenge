import React from "react";
import "../assets/css/home.css";

import Vegan from "./Vegan";
import PlateGlutenFree from "./PlateGlutenFree";
import Ketogenic from "./Ketogenic";

const Home = (meal) => {

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h1>Restaurant Menu</h1>
          
          <div className="diets">
            {<Vegan />}
            {<PlateGlutenFree />}
            {<Ketogenic />}
            <div className="tx-link">
              <a href="https://www.freepik.com/photos/frame">
                Frame photo created by valeria_aksakova - www.freepik.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
