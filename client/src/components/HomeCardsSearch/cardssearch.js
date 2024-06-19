import React from "react";
import GeraniumPratense from "../../assets/Images/GeraniumPratense.jpeg";
import PersicariaBistorta from "../../assets/Images/PersicariaBistorta.jpeg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./cardssearch.css";

function HomeCardsSearch() {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="card mb-3">
          <img
            src={PersicariaBistorta}
            className="card-img-top"
            alt="Kattenstart"
          />
          <div className="card-body">
            <h5 className="card-title">Plant Name</h5>
            <p className="card-text">Care instructions or other information</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card mb-3">
          <img src={GeraniumPratense} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Plant Name</h5>
            <p className="card-text">Care instructions or other information</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCardsSearch;
