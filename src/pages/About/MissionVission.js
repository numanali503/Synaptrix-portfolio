import React from 'react'
import about from '../../assets/about.png'
import under from '../../assets/needle-underline.svg'

function MissionVission() {
    return (
        <>
            <div className='bg-gradient-to-tl from-blue-100 to-violet-100 py-20 space-y-24'>
                <div className='max-w-[80rem] px-8 mx-auto flex items-center justify-center'>
                    <div className='w-full'>
                        <h1 className="mt-5 text-center text-3xl font-light text-primary sm:text-5xl lg:text-6xl">
                            <span className="relative inline-block">
                                <span className="absolute inset-0 bg-second transform -rotate-2 z-0"></span>
                                <span className="relative z-10 font-bold px-2 py-1 mb-4 text-primary">
                                    Mission
                                </span>
                                <img src={under} alt="err" className='absolute' />
                            </span>
                        </h1>
                        <h1 className='text-gray-600 text-center pt-8'>Synatrix is a renowned digital development company that offers software development services for businesses, startups, and enterprises. We specialize in developing innovative solutions and providing world-class engineers to help leading tech innovators in building successful software.</h1>
                    </div>
                </div>
                <div className='max-w-[80rem] px-8 mx-auto flex items-center justify-center'>
                    <div className='w-full'>
                        <h1 className="mt-5 text-center text-3xl font-light text-primary sm:text-5xl lg:text-6xl">
                            <span className="relative inline-block">
                                <span className="absolute inset-0 bg-second transform -rotate-2 z-0"></span>
                                <span className="relative z-10 font-bold px-2 py-1 mb-4 text-primary">
                                    Vision
                                </span>
                                <img src={under} alt="err" className='absolute' />
                            </span>
                        </h1>
                        <h1 className='text-gray-600 text-center pt-8'>Synatrix is a renowned digital development company that offers software development services for businesses, startups, and enterprises. We specialize in developing innovative solutions and providing world-class engineers to help leading tech innovators in building successful software.</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MissionVission