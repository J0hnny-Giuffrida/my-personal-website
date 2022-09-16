import React from 'react'

export default function Portfolio() {
    return (
        <section id="portfolio" className='flex flex-col w-3/5 h-3/5 mx-auto font-roboto mt-72 p-2 pl-4 border-l-4 border-purple-400'>
            <div className='flex h-auto w-auto'>
                <h2 className='text-purple-50 text-4xl font-bold mb-5'><a className="text-purple-400">02.</a> My Portfolio</h2>
            </div>
            <div className="w-full h-full ml-4 grid grid-cols-2 gap-2">
                <div className="w-full h-full bg-zinc-800 rounded-lg flex flex-col transition ease-in-out delay-100 hover:-translate-y-1">
                    <h3 className="text-purple-400 text-center font-bold text-xl">Plinko</h3>
                </div>
                <div className="w-full h-full bg-zinc-800 rounded-lg flex flex-col transition ease-in-out delay-100 hover:-translate-y-1">
                    <h3 className="text-purple-400 text-center font-bold text-xl">Nailed It</h3>
                </div>
                <div className="w-full h-full bg-zinc-800 rounded-lg flex flex-col transition ease-in-out delay-100 hover:-translate-y-1">
                    <h3 className="text-purple-400 text-center font-bold text-xl">Milestone Project III</h3>
                </div>
                <div className="w-full h-full bg-zinc-800 rounded-lg flex flex-col transition ease-in-out delay-100 hover:-translate-y-1">
                    <h3 className="text-purple-400 text-center font-bold text-xl">TBD</h3>
                </div>
            </div>
        </section>
    )
}