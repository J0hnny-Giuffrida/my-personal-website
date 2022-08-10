import "./App.css";
import React from "react";
import Nav from "./components/navBar";
import Home from "./components/homeScreen";

function App() {
  return (
    <div id="content" className="bg-zinc-900 w-screen h-screen">
      <Nav />
      <main className="h-screen w-4/5 px-20 container mx-auto">
        <Home />
      </main>
    </div>
  );
}

export default App;
