import React from 'react';
import {useState} from 'react';
import { TexasAM, NCState } from './schools'

function MyEducation() {
    const [divText, setDivText] = useState(TexasAM())
    
    function buttonClickAM() {
        setDivText(TexasAM())
    }

    function buttonClickNC() {
        setDivText(NCState())
    }

    return (
    <section id="myEducation" className='flex flex-col w-3/5 h-2/5 mx-auto ml-44 mb-20 mt-20 font-roboto border-l-4 pl-5 border-violet-400'>
        <div className='flex h-auto w-auto'>
            <h2 className='text-violet-50 text-4xl font-bold mb-5'><a className="text-violet-400">02.</a> Education</h2>
        </div>
        <div className='flex flex-row h-full w-full'>
            <div className='grid grid-rows-5 h-full w-1/5'>
                <button onClick={buttonClickAM} className='default:bg-zinc-800 default:text-violet-400 default:border-violet-400 text-zinc-500 text-xl text-left pl-5 border-l-2 hover:bg-zinc-800 hover:text-violet-400 hover:border-violet-400 focus:bg-zinc-800 focus:text-violet-400 focus:border-violet-400 default'>A&amp;M</button>
                <button onClick={buttonClickNC} className='text-zinc-500 text-xl text-left pl-5 border-l-2 hover:bg-zinc-800 hover:text-violet-400 hover:border-violet-400 focus:bg-zinc-800 focus:text-violet-400 focus:border-violet-400'>NC State</button>
            </div>
            <div className='h-auto w-4/5 text-zinc-500 text-xl pl-5 border-r-4 border-violet-400 pr-4'>
                {divText}
            </div>
        </div>
    </section>
    )
}

export default MyEducation;