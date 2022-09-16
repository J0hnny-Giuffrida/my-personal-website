import React from "react";

function homeScreen() {
  return (
    <section className='flex flex-col w-4/5 h-1/3 mx-auto mt-40 mr-40'>
      <div className="flex shrink">
        <h1 className='font-roboto font-semibold text-sky-400 text-xl flex shrink mb-8 ml-1'>Hello! My name is</h1>
      </div>
      <div className="flex shrink">
        <h2 className='font-roboto text-8xl text-violet-50 pb-2 flex shrink font-bold hover:text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-fuchsia-400 transition ease-in-out delay-100 hover:scale-110'>Johnny Giuffrida.</h2>
      </div>
      <div className="flex shrink">
        <h3 className='font-roboto text-zinc-500 text-6xl flex shrink mt-5'>I type. A lot.</h3>
      </div>
      <div className='w-1/2'>
        <p className='font-roboto text-zinc-500 text-xl mt-8'>I'm a software developer from North Carolina with experience in a wide variety of both front and back-end coding languages.</p>
      </div>
    </section>
  );
}

export default homeScreen;
