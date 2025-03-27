import React from 'react'
import under from '../../assets/needle-underline.svg'
import { Link } from 'react-router-dom'

function ServicesCard() {
    return (
        <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-32 text-center">
            <h1 className="mt-5 text-3xl text-center font-bold text-gray-800 sm:text-5xl lg:text-6xl">
                Our Holistic {""}
                <span className="relative inline-block">
                    <span className="absolute inset-0  bg-second transform -rotate-2 z-0"></span>
                    <span className="relative z-10 font-bold px-2 py-1 text-primary">
                        Software
                    </span>
                    <img src={under} alt="err" className='absolute' />
                </span>
                {""} Services
            </h1>


            <div className='flex flex-wrap justify-center gap-4 mt-16 max-w-6xl mx-auto'>
                <Link to='web-development' className='text-primary text-xl font-semibold bg-gradient-to-tl from-blue-100 to-violet-100 py-4 px-8 rounded-xl'>
                    Website Development
                </Link>
                <Link to='android-development' className='text-primary text-xl font-semibold bg-gradient-to-tl from-blue-100 to-violet-100 py-4 px-8 rounded-xl'>
                    Android Development
                </Link>
                <Link to='pwa-development' className='text-primary text-xl font-semibold bg-gradient-to-tl from-blue-100 to-violet-100 py-4 px-8 rounded-xl'>
                    PWA Development
                </Link>
                <Link to='ui-ux' className='text-primary text-xl font-semibold bg-gradient-to-tl from-blue-100 to-violet-100 py-4 px-8 rounded-xl'>
                    UI / UX Designing
                </Link>
                <Link to='web-design' className='text-primary text-xl font-semibold bg-gradient-to-tl from-blue-100 to-violet-100 py-4 px-8 rounded-xl'>
                    Website Designing
                </Link>
                <Link to='desktop-development' className='text-primary text-xl font-semibold bg-gradient-to-tl from-blue-100 to-violet-100 py-4 px-8 rounded-xl'>
                    Desktop Development
                </Link>
                <Link to='oracle-development' className='text-primary text-xl font-semibold bg-gradient-to-tl from-blue-100 to-violet-100 py-4 px-8 rounded-xl'>
                    Oracle APEX Developement
                </Link>
                <Link to='migration' className='text-primary text-xl font-semibold bg-gradient-to-tl from-blue-100 to-violet-100 py-4 px-8 rounded-xl'>
                    Migration Services
                </Link>
                <Link to='apis-development' className='text-primary text-xl font-semibold bg-gradient-to-tl from-blue-100 to-violet-100 py-4 px-8 rounded-xl'>
                    APIs Developement
                </Link>
            </div>


        </div>
    )
}

export default ServicesCard