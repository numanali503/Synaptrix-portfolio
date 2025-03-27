import React from "react";
import about from '../../assets/about.png'
import under from '../../assets/under.svg'

function Hero() {

    return (
        <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
            <div aria-hidden="true" className="absolute -top-36 left-1/2 -translate-x-1/2 flex">
                <div className="bg-gradient-to-r from-yellow-200 to-yellow-100 blur-3xl w-[400px] h-[200px] rotate-[-60deg] -translate-x-20"></div>
                <div className="bg-gradient-to-tl from-blue-100 via-blue-200 to-blue-100 blur-3xl w-[600px] h-[300px] rounded-full -rotate-12 -translate-x-40"></div>
                <div className="bg-gradient-to-r from-yellow-200 to-yellow-100 blur-3xl w-[400px] h-[200px] rotate-[-30deg] -translate-x-20"></div>
                <div className="bg-gradient-to-tl from-blue-100 via-blue-200 to-blue-100 blur-3xl w-[600px] h-[300px] rounded-full -rotate-12 -translate-x-40"></div>
            </div>
            <div className="relative z-10 max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-32 text-center">
                <h1 className="mt-5 text-3xl text-center font-bold text-gray-800 sm:text-5xl lg:text-6xl">
                    All about {""}
                    <span className="relative inline-block">
                        <span className="absolute inset-0  bg-primary transform -rotate-2 z-0"></span>
                        <span className="relative z-10 font-bold px-2 py-1 text-second">
                            synaptrix
                        </span>
                        <img src={under} alt="err" className='absolute' />
                    </span>
                </h1>
                <p className="mt-12 text-gray-600 px-12">We offer software development consulting services for businesses, startups, and enterprises. We Specialize in developing cutting edge solutions and providing world-class engineering teams to help leading tech innovators in building successful software.</p>
                <img src={about} alt="err" className="w-1/2 mx-auto mt-16" />
            </div>
        </div>
    );
}

export default Hero;
