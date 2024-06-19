import React from "react";
import AllBeeImage from "../../components/AllBeeImage/allimage";
import HomeNativePlants from "../../components/HomeNativePlants/nativeplants";
import HomePlantOfMonthAndImage from "../../components/HomePlantOfMonthAndImage/plantofmonth";
import HomeFilterOptions from "../../components/HomeFilterOptions/filteroptions";
import HomeCardsSearch from "../../components/HomeCardsSearch/cardssearch";
// import Logo from "../../components/logo/logo";
import NavBar from "../../components/navbar/navbar";
import Welcome from "../../components/HomeWelcome/Welcome";

import "./Home.css";


function Home() {
  return (
    <div className="home-container">
      <AllBeeImage />
      {/* <Logo /> */}
      <NavBar />
      <Welcome />
      <div className="row">
        <div className="col-md-6">
          <div className="nativeplants-container">
            <HomeNativePlants />
          </div>
        </div>
        <div className="col-md-6 d-flex">
          <div className="plantofmonth-container">
            <HomePlantOfMonthAndImage />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <HomeFilterOptions />
        </div>
      </div>
      <HomeCardsSearch />
    </div>
  );
}

export default Home;