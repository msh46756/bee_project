import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./filteroptions.css";

function HomeFilterOptions() {
  return (
    <div className="filter-options mb-4">
      <button className="btn-filter">Filteroption 1</button>
      <button className="btn-filter">Filteroption 2</button>
      <button className="btn-filter">Filteroption 3</button>
      <button className="btn-filter">Filteroption 4</button>
      <span className="button-space"></span>
      <button className="btn-see-all">See All</button>
    </div>
  );
}

export default HomeFilterOptions;
