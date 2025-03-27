import React from "react";
import under from '../../assets/needle-underline.svg';

function Hero() {
    return (
        <div className="relative overflow-hidden py-24">
            {/* Background gradients */}
            <div aria-hidden="true" className="absolute -top-36 left-1/2 -translate-x-1/2 flex">
                <div className="bg-gradient-to-r from-yellow-200 to-yellow-100 blur-3xl w-[400px] h-[200px] rotate-[-60deg] -translate-x-20"></div>
                <div className="bg-gradient-to-tl from-blue-100 via-blue-200 to-blue-100 blur-3xl w-[600px] h-[300px] rounded-full -rotate-12 -translate-x-40"></div>
                <div className="bg-gradient-to-r from-yellow-200 to-yellow-100 blur-3xl w-[400px] h-[200px] rotate-[-30deg] -translate-x-20"></div>
                <div className="bg-gradient-to-tl from-blue-100 via-blue-200 to-blue-100 blur-3xl w-[600px] h-[300px] rounded-full -rotate-12 -translate-x-40"></div>
            </div>
            
            {/* Main content container */}
            <div className="relative z-10 max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                <div className="flex flex-col lg:flex-row justify-between items-start space-x-8">
                    
                    {/* Left side: Text and button */}
                    <div className="lg:w-1/2 text-left mb-12 lg:mb-0">
                        <h1 className="text-3xl font-bold text-gray-800 sm:text-5xl lg:text-6xl">
                            Get {""}
                            <span className="relative inline-block">
                                <span className="absolute inset-0 bg-second transform -rotate-2 z-0"></span>
                                <span className="relative z-10 font-bold px-2 py-1 text-primary">
                                    Connected
                                </span>
                                <img src={under} alt="decorative underline" className="absolute" />
                            </span>
                        </h1>
                        <p className="mt-8 text-gray-600 pr-4">
                            We specialize in delivering top-notch services across multiple domains, ensuring that your digital endeavors reach their full potential. Explore our specialized services in website development, mobile app development, and UI/UX design.
                        </p>
                    </div>
                    
                    {/* Right side: Contact form */}
                    <div className="lg:w-1/2 w-full">
                        <div className="bg-white rounded-lg p-8 flex flex-col relative z-10 shadow-md">
                            <h2 className="text-gray-900 text-lg mb-1 font-medium">Get in Touch</h2>
                            <p className="leading-relaxed mb-5 text-gray-600">Fill out the form below and we'll get back to you as soon as possible</p>
                            
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            
                            <div className="relative mb-4">
                                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                                <input type="tel" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            
                            <button className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Send Message</button>
                            <p className="text-xs text-gray-500 mt-3">We respect your privacy and will never share your information.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;