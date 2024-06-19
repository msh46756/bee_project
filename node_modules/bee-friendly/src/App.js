import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home/Home";

//import SearchPlantname from "./Pages/Home/SearchPlantname";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          
                    
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
