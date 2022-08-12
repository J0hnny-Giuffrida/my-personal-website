import "./App.css";
import React from "react";
import {useState} from 'react';
import Nav from "./components/navBar";
import Home from "./components/homeScreen";
import About_Me from "./components/aboutMe";
import Education from "./components/myEducation";

function App() {
  return (
    <div id="content" className="bg-zinc-900 w-screen h-screen">
      <Nav />
      <main className="h-full w-4/5 px-20 container mx-auto">
        <Home />
        <About_Me />
        <Education />
      </main>
    </div>
  );
}

export default App;
