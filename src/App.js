//React
import React from "react";
import { Outlet } from "react-router-dom";
import { IconContext } from "react-icons";
//Styles
import "./App.css";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import { MyNavBar } from "./components/myNavBar";

function App() {
  return (
    <IconContext.Provider
      value={{ color: "orange", size: "2em", className: "global-class-name" }}
    >
      <div className="App">
        <MyNavBar />
        <Outlet />
      </div>
    </IconContext.Provider>
  );
}

export default App;
