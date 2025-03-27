import React from 'react'
import under from '../../assets/under.svg'

function WhyUs() {
    return (
        <div className='py-20'>
            <div className='max-w-[80rem] px-8 mx-auto flex flex-col items-center justify-center'>
                <h1 className="mt-5 text-3xl text-center font-bold text-gray-800 sm:text-5xl lg:text-6xl">
                    Featured {""}
                    <span className="relative inline-block">
                        <span className="absolute inset-0  bg-primary transform -rotate-2 z-0"></span>
                        <span className="relative z-10 font-bold px-2 py-1 text-second">
                            Choose
                        </span>
                        <img src={under} alt="err" className='absolute' />
                    </span>
                    {""}   Us?
                </h1>
                <h1 className='text-gray-600 pt-8 text-center'>We are your trusted partner for a diverse range of IT needs, encompassing both IT products and services. Our proven track record of success across diverse industries demonstrate our ability to deliver tailored IT solutions and propel your business forward.</h1>
                <div class="mt-8 grid grid-cols-1 gap-6 divide-blue-200 sm:grid-cols-2 md:gap-8 lg:mt-16 lg:grid-cols-4 lg:divide-x">
                    <div class="border-b border-blue-200 py-10 px-6 lg:border-b-0">
                        <div class="flex items-center">
                            <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none text-primary">
                                <span class="absolute -top-4 h-2 w-full bg-blue-200"></span>
                                328
                            </h3>
                            <span class="ml-3 text-base font-medium capitalize">Great Achievements</span>
                        </div>
                    </div>

                    <div class="border-b border-blue-200 py-10 px-6 lg:border-b-0">
                        <div class="flex items-center">
                            <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none text-primary">
                                <span class="absolute -top-4 h-2 w-full bg-blue-200"></span>
                                16
                            </h3>
                            <span class="ml-3 text-base font-medium capitalize">Graduations sponsored</span>
                        </div>
                    </div>

                    <div class="border-b border-blue-200 py-10 px-6 lg:border-b-0">
                        <div class="flex items-center">
                            <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none text-primary">
                                <span class="absolute -top-4 h-2 w-full bg-blue-200"></span>
                                41+
                            </h3>
                            <span class="ml-3 text-base font-medium capitalize">jobs created</span>
                        </div>
                    </div>

                    <div class="border-b border-blue-200 py-10 px-6 lg:border-b-0">
                        <div class="flex items-center">
                            <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none text-primary">
                                <span class="absolute -top-4 h-2 w-full bg-blue-200"></span>
                                99%
                            </h3>
                            <span class="ml-3 text-base font-medium capitalize">Happy Customers</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs