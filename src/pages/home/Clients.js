import React, { useRef } from "react";
import { motion } from "framer-motion";
import under from '../../assets/needle-underline.svg'

const clientLogos = [
    "asd.png",
    "fatoora.png",
    "imdad.png",
    "logo (2).png",
    "logo (3).png",
    "MAHANERGY.png",
    "tatweer.png",
    "Logo (5).png",
    "Logo.png",
    "logo2.png",
    "ogo.png",
];

const Clients = () => {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };

    return (
        <div className='bg-gradient-to-tl from-blue-100 to-violet-100 py-20'>
            <div className="max-w-[80rem] px-8 mx-auto flex flex-col items-center justify-center">
                <h1 className="mt-5 text-3xl font-bold text-gray-800 sm:text-5xl lg:text-6xl">
                    Featured {""}
                    <span className="relative inline-block">
                        <span className="absolute inset-0 bg-second transform -rotate-2 z-0"></span>
                        <span className="relative z-10 font-bold px-2 py-1 mb-4 text-primary">
                            Clients
                        </span>
                        <img src={under} alt="err" className='absolute' />
                    </span>
                </h1>
                <h1 className="text-gray-600 pt-8 text-center">
                    We are your trusted partner for a diverse range of IT needs, encompassing both IT products and services. Our proven track record of success across diverse industries demonstrates our ability to deliver tailored IT solutions and propel your business forward.
                </h1>
            </div>

            {/* Logo Slider */}
            <div className="mt-10 flex items-center justify-center w-full">
                <div
                    ref={sliderRef}
                    className="flex w-full max-w-5xl overflow-hidden gap-8"
                    style={{ scrollBehavior: "smooth" }}
                >
                    {clientLogos.map((logo, index) => (
                        <motion.div
                            key={index}
                            className="flex-shrink-0 w-32 h-20"
                            whileHover={{ scale: 1.1 }}
                        >
                            <img
                                src={require(`../../assets/clients/${logo}`)}
                                alt="Client Logo"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons Below */}
            <div className="mt-6 flex justify-center gap-4">
                <button
                    onClick={scrollLeft}
                    className="text-gray-600 bg-white px-4 py-2 rounded-full border border-slate-200"
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button
                    onClick={scrollRight}
                    className="text-gray-600 px-4 bg-white py-2 rounded-full border border-slate-200"
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Clients;
