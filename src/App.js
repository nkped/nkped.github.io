//React
import React from "react";
import { Outlet } from "react-router-dom";
import { IconContext } from "react-icons";
//Remember at deploy - switch to HashRouter!
import {
  BrowserRouter,
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//Styles
import "./App.css";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import { MyNavBar } from "./components/myNavBar";

function App() {
  return (
    <IconContext.Provider
      value={{
        style: { verticalAlign: "middle" },
        color: "orange",
        size: "3em",
        margin: "1em",
        className: "global-class-name",
      }}
    >
      <div className="App">
        <MyNavBar />
        <Outlet />
      </div>
    </IconContext.Provider>
  );
}

export default App;
