import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import angular from "../../assets/angular.svg";
import apex from "../../assets/apex.svg";
import underline from "../../assets/under.svg";
import figma from "../../assets/figma.svg";
import c from "../../assets/c.svg";
import firebase from "../../assets/firebase.svg";
import ios from "../../assets/ios.svg";
import java from "../../assets/java.svg";
import kot from "../../assets/kot.svg";
import mongo from "../../assets/mongo.svg";
import next from "../../assets/next.svg";
import nodes from "../../assets/nodes.svg";
import reactLogo from "../../assets/react.svg";
import tailwind from "../../assets/tailwind.svg";
import vercel from "../../assets/vercel.svg";
import vite from "../../assets/vite.svg";

const textData = [
  {
    title: "The Intuitive Solutions for",
    highlight: "Web & Mobile Apps",
    icons: [angular, mongo, nodes, next, tailwind, reactLogo, vercel, vite],
    para: "Preline UI is an open-source set of prebuilt UI components, ready-to-use examples and Figma design system based on the utility-first Tailwind CSS framework.",
  },
  {
    title: "Delivering Tailored IT Solutions to",
    highlight: "Transform Businesses",
    icons: [apex, c, figma, firebase, java, kot, ios, vite],
    para: "Preline UI is an open-source set of prebuilt UI components, ready-to-use examples and Figma design system based on the utility-first Tailwind CSS framework.",
  },
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <div
        aria-hidden="true"
        className="absolute -top-36 left-1/2 -translate-x-1/2 flex"
      >
        <div className="bg-gradient-to-r from-yellow-200 to-yellow-100 blur-3xl w-[400px] h-[200px] rotate-[-60deg] -translate-x-20"></div>
        <div className="bg-gradient-to-tl from-blue-100 via-blue-200 to-blue-100 blur-3xl w-[600px] h-[300px] rounded-full -rotate-12 -translate-x-40"></div>
        <div className="bg-gradient-to-r from-yellow-200 to-yellow-100 blur-3xl w-[400px] h-[200px] rotate-[-30deg] -translate-x-20"></div>
        <div className="bg-gradient-to-tl from-blue-100 via-blue-200 to-blue-100 blur-3xl w-[600px] h-[300px] rounded-full -rotate-12 -translate-x-40"></div>
      </div>
      <div className="relative z-10 max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-32 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {textData[index].title}
            </motion.h1>
            <motion.h1
              className="mt-5 text-3xl font-light text-primary sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-primary transform -rotate-2 z-0"></span>
                <span className="relative z-10 font-bold px-2 py-8 text-second">
                  {textData[index].highlight}
                </span>
                <img src={underline} alt="err" className="absolute" />
              </span>
            </motion.h1>
          </motion.div>
        </AnimatePresence>

        <div className="my-16 flex justify-center space-x-12">
          <AnimatePresence mode="wait">
            {textData[index].icons.map((icon, i) => (
              <motion.img
                key={icon}
                src={icon}
                alt="Icon"
                className="w-12 h-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              />
            ))}
          </AnimatePresence>
        </div>

        <div className="my-8 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-600"
          >
            {" "}
            {textData[index].para}
          </motion.p>
        </div>
        <div className="mt-8 gap-3 flex justify-center">
          <motion.a
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            href="/contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get free Consultation
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </motion.a>
          <motion.a
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-slate-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            href="/contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="shrink-0 size-4"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.875 18C8.531 18 9.875 16.656 9.875 15V12H6.875C5.219 12 3.875 13.344 3.875 15C3.875 16.656 5.219 18 6.875 18Z"
                fill="#0ACF83"
              ></path>
              <path
                d="M3.875 9C3.875 7.344 5.219 6 6.875 6H9.875V12H6.875C5.219 12 3.875 10.656 3.875 9Z"
                fill="#A259FF"
              ></path>
              <path
                d="M3.875 3C3.875 1.344 5.219 0 6.875 0H9.875V6H6.875C5.219 6 3.875 4.656 3.875 3Z"
                fill="#F24E1E"
              ></path>
            </svg>
            Contact Us
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
