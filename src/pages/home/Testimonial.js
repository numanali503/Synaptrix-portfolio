import React from "react";
import under from "../../assets/under.svg";

function Testimonial() {
  return (
    <div className="py-14">
      <div className="max-w-[80rem] px-4 sm:px-6 lg:px-8 mx-auto flex flex-col items-center justify-center">
        <h1 className="mt-5 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center">
          Fuel that {""}
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-primary transform -rotate-2 z-0"></span>
            <span className="relative z-10 font-bold px-2 py-1 mb-4 text-second">
              Inspires
            </span>
            <img src={under} alt="err" className="absolute" />
          </span>
          {""} us to excel
        </h1>
        <h1 className="text-gray-600 pt-6 sm:pt-8 text-sm sm:text-base md:text-lg text-center">
          We are your trusted partner for a diverse range of IT needs,
          encompassing both IT products and services. Our proven track record of
          success across diverse industries demonstrates our ability to deliver
          tailored IT solutions and propel your business forward.
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-start space-y-6 sm:space-y-0 sm:space-x-4 w-full mt-8 sm:mt-12">
          <div className="bg-gradient-to-tl from-blue-100 to-violet-100 rounded-xl w-full h-auto sm:h-[40vh] p-6 sm:p-8">
            <div className="flex items-start justify-start space-x-4 mb-6 sm:mb-8">
              <img
                src="https://i.pinimg.com/736x/38/1d/6e/381d6edab2cb8693e04e9e5923c20ec6.jpg"
                alt="err"
                className="rounded-full w-16 h-16 sm:w-20 sm:h-20"
              />
              <div>
                <h1 className="text-base sm:text-lg font-semibold">
                  Featured Client Name
                </h1>
                <h1 className="text-gray-600 text-sm sm:text-base">
                  Client Description
                </h1>
              </div>
            </div>
            <div className="flex space-x-1">
              <i className="fa-solid fa-star text-yellow-400 text-sm sm:text-base"></i>
              <i className="fa-solid fa-star text-yellow-400 text-sm sm:text-base"></i>
              <i className="fa-solid fa-star text-yellow-400 text-sm sm:text-base"></i>
              <i className="fa-solid fa-star text-yellow-400 text-sm sm:text-base"></i>
              <i className="fa-solid fa-star text-yellow-400 text-sm sm:text-base"></i>
            </div>
            <p className="text-gray-700 mt-4 text-sm sm:text-base">
              We've always had a fantastic experience working with Technupur on
              our development projects. They displayed a profound understanding
              of our vision. Thanks to their exceptional development services.
              Highly recommended!
            </p>
          </div>
          <div className="bg-slate-100 border border-slate-200 rounded-xl w-full sm:w-1/2 h-auto sm:h-[40vh] p-6 sm:p-8 flex items-center justify-center flex-col">
            <i className="fa-sharp-duotone fa-light fa-pen-to-square text-[4rem] sm:text-[6rem] text-slate-400 text-center"></i>
            <h1 className="text-gray-600 pt-6 sm:pt-8 text-xl sm:text-2xl font-semibold text-center">
              Write a Review for Us
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
