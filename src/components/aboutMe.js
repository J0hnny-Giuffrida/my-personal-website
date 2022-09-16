import React from 'react'

function About_Me() {
  return (
    <section id="aboutMe" className='flex flex-row w-3/5 h-auto mx-auto ml-24 font-roboto mt-96 py-36'>
      <div className='w-7/12 h-full flex flex-col border-l-4 border-sky-400 pl-5'>
      <h2 className='text-sky-50 text-4xl font-bold'><span className="text-sky-400">01.</span> About Me</h2>
      <div>
        <p className='text-zinc-500 text-xl mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue felis lacus, in aliquet lacus gravida convallis. Nunc suscipit ullamcorper dui ac malesuada. Praesent eu mi mi. Cras diam augue.</p>
        <p className='text-zinc-500 text-xl mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue felis lacus, in aliquet lacus gravida convallis. Nunc suscipit ullamcorper dui ac malesuada. Praesent eu mi mi. Cras diam augue.</p>
        <p className='text-zinc-500 text-xl mt-8'>Here are a few of the languages I've been working with:</p>
      </div>
      <div className='grid grid-cols-3'>
      <ul className='text-zinc-500 text-base mt-8 list-disc list-inside marker:text-sky-500'>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        
      </ul>
      <ul className='text-zinc-500 text-base mt-8 list-disc list-inside marker:text-sky-500'>
        <li>React</li>
        <li>Redux</li>
        <li>Node.js</li>
        
      </ul>
      <ul className='text-zinc-500 text-base mt-8 list-disc list-inside marker:text-sky-500'>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>Python</li>
      </ul>
      </div>
      </div>
      <div className='w-5/12 h-full flex flex-col pl-5'>
        <div className="w-96 border-r-4 border-sky-400 pr-5">
                <img
                    className="h-96 w-auto rounded-md shadow-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105"
                    src="me.jpg"
                    alt="Headshot of Johnny"
                    />
      </div>
      </div>
    </section>
  )
}

export default About_Me;