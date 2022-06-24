//React
import React from "react";
import { Outlet } from "react-router-dom";
import { IconContext } from "react-icons";
//Components
import { MyNavBar } from "./components/myNavBar";
import "./App.css";

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
