import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./plantofmonth.css";
import plantofmonth from "../../assets/Images/plantofmonth.webp";

function HomePlantOfMonthAndImage() {
  return (
    <div className="d-flex justify-content-start my-3">
      <div className="plantofmonth-box p-3">
        <img
          src={plantofmonth}
          alt="Plant of the Month"
          className="img-fluid"
        />
        <h2 className="plantofmonth-title">Plant of Month</h2>
        <p className="plantofmonth-text">
          Dandelions (Taraxum congl.) are often seen as weeds, but they are
          vital for bee health. Did you know that Dutch dandelions can attract
          and support 107 different bee species? Instead of removing dandelions,
          let them grow and flourish in your garden to help sustain local bee
          populations
        </p>
      </div>
    </div>
  );
}

export default HomePlantOfMonthAndImage;
