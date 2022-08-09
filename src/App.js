import "./App.css";
import React from "react";
import Nav from "./components/navBar";

function App() {
  return (
    <div className="bg-zinc-900 w-full h-full flex">
      <Nav />
      <div className="w-7/8 border-sky-500 border-2 flex-auto">
        <h1 className="text-3xl font-bold text-zinc-50 text-center">
          Personal Website
        </h1>
      </div>
    </div>
  );
}

export default App;
