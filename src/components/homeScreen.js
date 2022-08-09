import React from "react";

function homeScreen() {
  return (
    <div className="w-4/5 h-43 grid grid-cols-4 gap-4 bg-zinc-800 rounded-[30px] ml-40 mt-20">
      <div className="w-96">
        <img
          className="h-96 w-auto rounded-[30px] rounded-r-none rounded-b-none rounded-bl-[30px]"
          src="me.jpg"
          alt="Headshot of Johnny"
        />
      </div>
      <div className="text-6xl font-bold text-zinc-50 text-left w-4/5 h-3/5 col-span-3 mt-5">
        <p className="hover:text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-fuchsia-700">
          Hi, my name is Johnny Giuffrida. I'm a Fullstack Developer from San
          Diego, California!
        </p>
      </div>
    </div>
  );
}

export default homeScreen;
