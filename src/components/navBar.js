import React from "react";

function nav_Bar() {
  return (
    <header className="w-screen h-24">
      <nav className="w-screen h-1/8 grid grid-cols-12 text-lg text-center pt-10">
        <div className="flex-none w-full h-full text-zinc-50 text-center hover:text-sky-400">
          <p>
            <a className="text-sky-400">01.</a> About Me
          </p>
        </div>
        <div className="flex-none w-full h-full text-zinc-50 text-center hover:text-violet-400">
          <p>
            <a className="text-violet-400">02.</a> Skills
          </p>
        </div>
        <div className="flex-none w-full h-full  text-zinc-50 text-center hover:text-purple-400">
          <p>
            <a className="text-purple-400">03.</a> Portfolio
          </p>
        </div>
        <div className="flex-none w-full h-full  text-zinc-50 text-center hover:text-pink-400">
          <p>
            <a className="text-pink-400">04.</a> Resume
          </p>
        </div>
        <div className="flex-none w-full h-full  text-zinc-50 text-center col-start-11 pb-1">
          <button class="text-sky-400 ring-2 ring-sky-400 rounded p-2 px-4 transition ease-in-out delay-150 hover:bg-sky-300/50 duration-300 ...">
            Contact Me
          </button>
        </div>
      </nav>
    </header>
  );
}

export default nav_Bar;
