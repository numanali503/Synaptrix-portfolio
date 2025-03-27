import React from 'react'
import under from '../../assets/under.svg'

function Details() {
    return (
        <div className='bg-gradient-to-tl from-blue-100 to-violet-100 py-20'>
            <div className='max-w-[80rem] px-8 mx-auto flex flex-col items-start justify-center '>
                <h1 className="mt-5 text-3xl text-center font-bold text-gray-800">
                    Synergizing {""}
                    <span className="relative inline-block text-6xl">
                        <span className="absolute inset-0  bg-primary transform -rotate-2 z-0"></span>
                        <span className="relative z-10 font-bold px-2 py-1 text-second">
                            Agile
                        </span>
                        <img src={under} alt="err" className='absolute' />
                    </span>
                    {""}  Methodologies with Leading Technologies
                </h1>
                <h1 className='text-gray-600 pt-8 text-justify text-lg'>We leverage cutting-edge technologies and industry-leading methodologies to craft bespoke, custom solutions that redefine digital landscapes. Embracing agile methodologies, notably Scrum, we ensure rapid iterations and active client involvement, resulting in accelerated, high-quality deliverables.</h1>
                <h1 className='text-gray-600 pt-8 text-justify text-lg'>In alignment with our dynamic methodologies, our expertise lies in harnessing leading-edge technologies. From responsive and functional web development to cross-platform mobile app solutions, our team consistently delivers seamless user experiences. Complementing these efforts, our UI/UX strategies prioritize crafting visually captivating interfaces, ensuring that each project evolves into a tailored solution designed to exceed your expectations.</h1>
            </div>
        </div>
    )
}

export default Details