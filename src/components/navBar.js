import React from "react";

function nav_Bar() {
  return (
    <div className="w-1/8 h-screen border-sky-400 border-2 flex-none">
      <div className="w-full h-1/4 border-rose-400 border-2 text-zinc-50 text-center">
        <div className="rotate-90 border-rose-400 border-2 mt-20">About Me</div>
      </div>
      <div className="w-full h-1/4 border-rose-400 border-2 text-zinc-50 text-center">
        <div className="rotate-90 border-rose-400 border-2 mt-20">Skills</div>
      </div>
      <div className="w-full h-1/4 border-rose-400 border-2 text-zinc-50 text-center">
        <div className="rotate-90 border-rose-400 border-2 mt-20">
          Portfolio
        </div>
      </div>
      <div className="w-full h-1/4 border-rose-400 border-2 text-zinc-50 text-center">
        <div className="rotate-90 border-rose-400 border-2 mt-20">Resume</div>
      </div>
    </div>
  );
}

export default nav_Bar;
