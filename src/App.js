import "./App.css";
import React from "react";
import Nav from "./components/navBar";
import Home from "./components/homeScreen";

function App() {
  return (
    <div className="bg-zinc-900 w-screen h-screen">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
