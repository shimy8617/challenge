import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../assets/css/home.css";

import Details from "./Details";
import Vegan from "./Vegan";
import PlateGluten from "./PlateGluten";
import Ketogenic from "./Ketogenic";

const Home = (meal) => {

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h1>Restaurant Menu</h1>
          
          <div className="diets">
            {<Vegan />}
            {<PlateGluten />}
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
