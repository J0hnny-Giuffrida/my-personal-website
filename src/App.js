import "./App.css";
import React from "react";
import Nav from "./components/navBar";
import Home from "./components/homeScreen";

function App() {
  return (
    <div id="content" className="bg-zinc-900 w-screen h-screen">
      <Nav />
      <main className="h-screen w-2/3 px-40 container mx-auto"></main>
    </div>
  );
}

export default App;
