import React from "react";

function nav_Bar() {
  return (
    <div className="w-screen h-1/8 grid grid-cols-4 pt-5 pb-3 text-xl">
      <div className="flex-none w-full h-full  text-zinc-50 text-center hover:text-sky-400">
        About Me
      </div>
      <div className="flex-none w-full h-full text-zinc-50 text-center hover:text-sky-400">
        Skills
      </div>
      <div className="flex-none w-full h-full  text-zinc-50 text-center hover:text-sky-400">
        Portfolio
      </div>
      <div className="flex-none w-full h-full  text-zinc-50 text-center hover:text-sky-400">
        Resume
      </div>
    </div>
  );
}

export default nav_Bar;
