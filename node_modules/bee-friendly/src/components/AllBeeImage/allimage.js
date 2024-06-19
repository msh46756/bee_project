import React from "react";
import BeeFriendlyImage from "../../assets/Images/BeeFriendlyImage.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./allimage.css";

function AllBeeImage() {
  return (
    <div>
      <img src={BeeFriendlyImage} alt="Home" />
    </div>
  );
}

export default AllBeeImage;
