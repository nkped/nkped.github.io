//React
import React from "react";
import { Outlet } from "react-router-dom";
import { IconContext } from "react-icons";
import { Container } from "react-bootstrap";

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
