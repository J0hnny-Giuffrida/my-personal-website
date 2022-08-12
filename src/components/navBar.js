import React from "react";

function nav_Bar() {
  return (
    <header className="font-roboto w-screen h-28 bg-zinc-900 px-10">
      <nav className="w-screen h-1/8 grid grid-cols-12 text-lg text-center pt-10">
        <div className="flex-none w-full h-full text-zinc-50 text-center">
          <a className='hover:text-sky-400' href='#aboutMe'>
            <button className="text-sky-400">01.</button> About Me
          </a>
        </div>
        <div className="flex-none w-full Sh-full text-zinc-50 text-center">
          <a className='hover:text-violet-400' href='#myEducation'>
            <button className="text-violet-400">02.</button> Education
          </a>
        </div>
        <div className="flex-none w-full h-full  text-zinc-50 text-center">
          <button className='hover:text-purple-400'>
            <a className="text-purple-400">03.</a> Portfolio
          </button>
        </div>
        <div className="flex-none w-full h-full  text-zinc-50 text-center">
          <button className='hover:text-pink-400'>
            <a className="text-pink-400">04.</a> Resume
          </button>
        </div>
        <div className="flex-none w-full h-full  text-zinc-50 text-center col-start-11 pb-1">
          <a href='mailto:jcgiuffridaii@gmail.com'>
          <button class="text-sky-400 ring-2 ring-sky-400 rounded p-2 px-4 transition ease-in-out delay-100 hover:bg-sky-300/50 duration-300 ...">
            Contact Me
          </button>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default nav_Bar;
