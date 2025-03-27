import React, { useState } from "react";

function Banner() {
  const [expanded, setExpanded] = useState({
    phone: false,
    email: false,
    linkedin: false,
    whatsapp: false,
  });

  const toggleExpand = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div>
      <div className="hs-removing:-translate-y-full bg-primary">
        <div className="max-w-[80rem] px-8 py-3 sm:px-6 lg:px-8 mx-auto">
          <div className="flex flex-row items-center justify-between w-full">
            {/* Contact Info Section */}
            <div className="flex flex-row items-center space-x-4">
              {/* Desktop: Always show text; Tablet/Mobile: Expandable */}
              <div className="flex items-center">
                <p className="text-white flex items-center justify-center md:hidden">
                  <button
                    onClick={() => toggleExpand("phone")}
                    className="text-white hover:text-gray-200 focus:outline-none transition-colors duration-200"
                    aria-label="Toggle phone number"
                  >
                    <i className="fa-duotone fa-thin fa-phone-volume text-lg"></i>
                  </button>
                  {expanded.phone && (
                    <span className="pl-2 text-white text-xs whitespace-nowrap animate-fade-in">
                      +92 343 2629294
                    </span>
                  )}
                </p>
                <p className="hidden md:flex text-white items-center justify-center">
                  <i className="fa-duotone fa-thin fa-phone-volume"></i>
                  <span className="pl-2 text-sm">+92 343 2629294</span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-white flex items-center justify-center md:hidden">
                  <button
                    onClick={() => toggleExpand("email")}
                    className="text-white hover:text-gray-200 focus:outline-none transition-colors duration-200"
                    aria-label="Toggle email"
                  >
                    <i className="fa-duotone fa-thin fa-paper-plane text-lg"></i>
                  </button>
                  {expanded.email && (
                    <span className="pl-2 text-white text-xs whitespace-nowrap animate-fade-in">
                      info@synaptrixsol.com
                    </span>
                  )}
                </p>
                <p className="hidden md:flex text-white items-center justify-center">
                  <i className="fa-duotone fa-thin fa-phone-volume"></i>
                  <span className="pl-2 text-sm">info@synaptrixsol.com</span>
                </p>
              </div>
            </div>

            {/* Social Icons Section */}
            <div className="flex flex-row items-center space-x-4">
              <div className="flex items-center">
                <p className="text-white flex items-center justify-center md:hidden">
                  <button
                    onClick={() => toggleExpand("linkedin")}
                    className="text-white hover:text-gray-200 focus:outline-none transition-colors duration-200"
                    aria-label="Toggle LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in text-lg"></i>
                  </button>
                  {/* Optional: Add LinkedIn URL if desired */}
                </p>
                <p className="hidden md:flex text-white items-center justify-center">
                  <i className="fa-brands fa-linkedin-in"></i>
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-white flex items-center justify-center md:hidden">
                  <button
                    onClick={() => toggleExpand("whatsapp")}
                    className="text-white hover:text-gray-200 focus:outline-none transition-colors duration-200"
                    aria-label="Toggle WhatsApp"
                  >
                    <i className="fa-brands fa-whatsapp text-lg"></i>
                  </button>
                  {/* Optional: Add WhatsApp number if desired */}
                </p>
                <p className="hidden md:flex text-white items-center justify-center">
                  <i className="fa-brands fa-whatsapp"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
