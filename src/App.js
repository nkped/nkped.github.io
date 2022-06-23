//React
import React from "react";
import { Outlet } from "react-router-dom";
import { IconContext } from "react-icons";

//Styles
import "./App.css";

//Components
import { MyNavBar } from "./components/myNavBar";

function App() {
  return (
    <IconContext.Provider
      value={{
        style: { verticalAlign: "middle" },
        color: "orange",
        size: "3em",
        className: "global-class-name",
      }}
    >
      <div className="App bg-dark">
        <header className="App-header">
          <MyNavBar />
          <Outlet />
        </header>
      </div>
    </IconContext.Provider>
  );
}

export default App;
