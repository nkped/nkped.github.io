//React
import React from "react";
import { Outlet } from "react-router-dom";
//Styles
import "./App.css";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import { MyNavBar } from "./components/myNavBar";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Outlet />
    </div>
  );
}

export default App;
