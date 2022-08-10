import React from "react";

function homeScreen() {
  return (
    <section className='flex flex-col w-4/5 h-1/3 mx-auto mt-40 mr-40'>
      <div className="flex shrink">
        <h1 className='font-roboto font-semibold text-sky-400 text-xl flex shrink mb-8 ml-1'>Hi, my name is</h1>
      </div>
      <div className="flex shrink">
        <h2 className='font-roboto text-8xl text-violet-50 pb-2 flex shrink font-bold hover:text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-fuchsia-400'>Johnny Giuffrida.</h2>
      </div>
      <div className="flex shrink">
        <p className='font-roboto text-purple-50 text-xl flex shrink mt-5'>I'm a FullStack Developer and Software Engineer from North Carolina.</p>
      </div>
    </section>
  );
}

export default homeScreen;
