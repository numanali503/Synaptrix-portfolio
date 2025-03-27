import React, { useState } from "react";

import react from "../../assets/react.svg";
import next from "../../assets/next-js.svg";
import angular from "../../assets/angular.svg";
import three from "../../assets/threejs.svg";
import boots from "../../assets/boots.svg";
import tail from "../../assets/tailwind.svg";
import html from "../../assets/html.svg";
import js from "../../assets/js.svg";
import css from "../../assets/css.svg";
import saas from "../../assets/saas.svg";
import vite from "../../assets/vite.svg";

import laravel from "../../assets/laravel.svg";
import jquery from "../../assets/jquery.svg";
import python from "../../assets/python.svg";
import express from "../../assets/express.svg";
import django from "../../assets/django.svg";
import c from "../../assets/c.svg";
import net from "../../assets/net.svg";
import rails from "../../assets/rails.svg";
import nodes from "../../assets/nodes.svg";

import java from "../../assets/java.svg";
import oracle from "../../assets/apex.svg";

import kot from "../../assets/kot.svg";
import android from "../../assets/android.svg";
import ios from "../../assets/ios.svg";
import swift from "../../assets/swift.svg";
import intel from "../../assets/intelli.svg";

import mongo from "../../assets/mongo.svg";
import firebase from "../../assets/firebase.svg";
import vercel from "../../assets/vercel.svg";
import sql from "../../assets/sql.svg";
import lite from "../../assets/lite.svg";
import under from "../../assets/under.svg";

const ToolsTechnology = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="max-w-[80rem] mx-auto py-20 overflow-hidden">
      <div className="flex flex-wrap -mx-4 mb-16 items-center">
        <div className="w-full lg:w-2/3 xl:w-1/2 px-4 mb-12 lg:mb-0">
          <h1 className="mt-5 text-3xl text-center sm:text-start font-bold text-gray-800 sm:text-5xl lg:text-6xl">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-primary transform -rotate-2 z-0"></span>
              <span className="relative z-10 font-bold px-2 py-1 text-second">
                Tech
              </span>
              <img src={under} alt="err" className="absolute" />
            </span>
            {""} Stack
          </h1>
        </div>
        <div className="w-full lg:w-1/3 xl:w-1/2 px-4">
          <div className="max-w-sm lg:ml-auto">
            <p className="text-gray-600">
              We play in different types of latest and efficient tech stack.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-8 items-start justify-between">
        <nav className="w-full lg:w-1/4 flex flex-col justify-start space-y-4 overflow-hidden mb-8 lg:mb-0">
          <button
            className={`relative group inline-block w-full py-4 px-6 font-semibold rounded-md overflow-hidden transition duration-500 ${
              activeTab === "tab1"
                ? "bg-gray-900 text-white"
                : "bg-blue-50 text-blue-900 hover:text-white"
            }`}
            onClick={() => handleTabClick("tab1")}
            aria-selected={activeTab === "tab1"}
            role="tab"
          >
            <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-105 transition duration-500"></div>
            <div className="relative flex items-center justify-between">
              <span className="mr-4">Front-End Development</span>
              <span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.92 0.62C12.8185 0.375651 12.6243 0.181475 12.38 0.0799999C12.2598 0.028759 12.1307 0.00157999 12 0H2C1.73478 0 1.48043 0.105357 1.29289 0.292893C1.10536 0.48043 1 0.734784 1 1C1 1.26522 1.10536 1.51957 1.29289 1.70711C1.48043 1.89464 1.73478 2 2 2H9.59L1.29 10.29C1.19627 10.383 1.12188 10.4936 1.07111 10.6154C1.02034 10.7373 0.994202 10.868 0.994202 11C0.994202 11.132 1.02034 11.2627 1.07111 11.3846C1.12188 11.5064 1.19627 11.617 1.29 11.71C1.38296 11.8037 1.49356 11.8781 1.61542 11.9289C1.73728 11.9797 1.86799 12.0058 2 12.0058C2.13201 12.0058 2.26272 11.9797 2.38458 11.9289C2.50644 11.8781 2.61704 11.8037 2.71 11.71L11 3.41V11C11 11.2652 11.1054 11.5196 11.2929 11.7071C11.4804 11.8946 11.7348 12 12 12C12.2652 12 12.5196 11.8946 12.7071 11.7071C12.8946 11.5196 13 11.2652 13 11V1C12.9984 0.869323 12.9712 0.740222 12.92 0.62Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </div>
          </button>

          <button
            className={`relative group inline-block w-full py-4 px-6 font-semibold rounded-md overflow-hidden transition duration-500 ${
              activeTab === "tab2"
                ? "bg-gray-900 text-white"
                : "bg-blue-50 text-blue-900 hover:text-white"
            }`}
            onClick={() => handleTabClick("tab2")}
            aria-selected={activeTab === "tab2"}
            role="tab"
          >
            <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-105 transition duration-500"></div>
            <div className="relative flex items-center justify-between">
              <span className="mr-4">Back-End Development</span>
              <span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.92 0.62C12.8185 0.375651 12.6243 0.181475 12.38 0.0799999C12.2598 0.028759 12.1307 0.00157999 12 0H2C1.73478 0 1.48043 0.105357 1.29289 0.292893C1.10536 0.48043 1 0.734784 1 1C1 1.26522 1.10536 1.51957 1.29289 1.70711C1.48043 1.89464 1.73478 2 2 2H9.59L1.29 10.29C1.19627 10.383 1.12188 10.4936 1.07111 10.6154C1.02034 10.7373 0.994202 10.868 0.994202 11C0.994202 11.132 1.02034 11.2627 1.07111 11.3846C1.12188 11.5064 1.19627 11.617 1.29 11.71C1.38296 11.8037 1.49356 11.8781 1.61542 11.9289C1.73728 11.9797 1.86799 12.0058 2 12.0058C2.13201 12.0058 2.26272 11.9797 2.38458 11.9289C2.50644 11.8781 2.61704 11.8037 2.71 11.71L11 3.41V11C11 11.2652 11.1054 11.5196 11.2929 11.7071C11.4804 11.8946 11.7348 12 12 12C12.2652 12 12.5196 11.8946 12.7071 11.7071C12.8946 11.5196 13 11.2652 13 11V1C12.9984 0.869323 12.9712 0.740222 12.92 0.62Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </div>
          </button>

          <button
            className={`relative group inline-block w-full py-4 px-6 font-semibold rounded-md overflow-hidden transition duration-500 ${
              activeTab === "tab3"
                ? "bg-gray-900 text-white"
                : "bg-blue-50 text-blue-900 hover:text-white"
            }`}
            onClick={() => handleTabClick("tab3")}
            aria-selected={activeTab === "tab3"}
            role="tab"
          >
            <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-105 transition duration-500"></div>
            <div className="relative flex items-center justify-between">
              <span className="mr-4">Desktop Development</span>
              <span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.92 0.62C12.8185 0.375651 12.6243 0.181475 12.38 0.0799999C12.2598 0.028759 12.1307 0.00157999 12 0H2C1.73478 0 1.48043 0.105357 1.29289 0.292893C1.10536 0.48043 1 0.734784 1 1C1 1.26522 1.10536 1.51957 1.29289 1.70711C1.48043 1.89464 1.73478 2 2 2H9.59L1.29 10.29C1.19627 10.383 1.12188 10.4936 1.07111 10.6154C1.02034 10.7373 0.994202 10.868 0.994202 11C0.994202 11.132 1.02034 11.2627 1.07111 11.3846C1.12188 11.5064 1.19627 11.617 1.29 11.71C1.38296 11.8037 1.49356 11.8781 1.61542 11.9289C1.73728 11.9797 1.86799 12.0058 2 12.0058C2.13201 12.0058 2.26272 11.9797 2.38458 11.9289C2.50644 11.8781 2.61704 11.8037 2.71 11.71L11 3.41V11C11 11.2652 11.1054 11.5196 11.2929 11.7071C11.4804 11.8946 11.7348 12 12 12C12.2652 12 12.5196 11.8946 12.7071 11.7071C12.8946 11.5196 13 11.2652 13 11V1C12.9984 0.869323 12.9712 0.740222 12.92 0.62Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </div>
          </button>

          <button
            className={`relative group inline-block w-full py-4 px-6 font-semibold rounded-md overflow-hidden transition duration-500 ${
              activeTab === "tab4"
                ? "bg-gray-900 text-white"
                : "bg-blue-50 text-blue-900 hover:text-white"
            }`}
            onClick={() => handleTabClick("tab4")}
            aria-selected={activeTab === "tab4"}
            role="tab"
          >
            <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-105 transition duration-500"></div>
            <div className="relative flex items-center justify-between">
              <span className="mr-4">Mobile Development</span>
              <span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.92 0.62C12.8185 0.375651 12.6243 0.181475 12.38 0.0799999C12.2598 0.028759 12.1307 0.00157999 12 0H2C1.73478 0 1.48043 0.105357 1.29289 0.292893C1.10536 0.48043 1 0.734784 1 1C1 1.26522 1.10536 1.51957 1.29289 1.70711C1.48043 1.89464 1.73478 2 2 2H9.59L1.29 10.29C1.19627 10.383 1.12188 10.4936 1.07111 10.6154C1.02034 10.7373 0.994202 10.868 0.994202 11C0.994202 11.132 1.02034 11.2627 1.07111 11.3846C1.12188 11.5064 1.19627 11.617 1.29 11.71C1.38296 11.8037 1.49356 11.8781 1.61542 11.9289C1.73728 11.9797 1.86799 12.0058 2 12.0058C2.13201 12.0058 2.26272 11.9797 2.38458 11.9289C2.50644 11.8781 2.61704 11.8037 2.71 11.71L11 3.41V11C11 11.2652 11.1054 11.5196 11.2929 11.7071C11.4804 11.8946 11.7348 12 12 12C12.2652 12 12.5196 11.8946 12.7071 11.7071C12.8946 11.5196 13 11.2652 13 11V1C12.9984 0.869323 12.9712 0.740222 12.92 0.62Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </div>
          </button>

          <button
            className={`relative group inline-block w-full py-4 px-6 font-semibold rounded-md overflow-hidden transition duration-500 ${
              activeTab === "tab5"
                ? "bg-gray-900 text-white"
                : "bg-blue-50 text-blue-900 hover:text-white"
            }`}
            onClick={() => handleTabClick("tab5")}
            aria-selected={activeTab === "tab5"}
            role="tab"
          >
            <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-105 transition duration-500"></div>
            <div className="relative flex items-center justify-between">
              <span className="mr-4">Databases</span>
              <span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.92 0.62C12.8185 0.375651 12.6243 0.181475 12.38 0.0799999C12.2598 0.028759 12.1307 0.00157999 12 0H2C1.73478 0 1.48043 0.105357 1.29289 0.292893C1.10536 0.48043 1 0.734784 1 1C1 1.26522 1.10536 1.51957 1.29289 1.70711C1.48043 1.89464 1.73478 2 2 2H9.59L1.29 10.29C1.19627 10.383 1.12188 10.4936 1.07111 10.6154C1.02034 10.7373 0.994202 10.868 0.994202 11C0.994202 11.132 1.02034 11.2627 1.07111 11.3846C1.12188 11.5064 1.19627 11.617 1.29 11.71C1.38296 11.8037 1.49356 11.8781 1.61542 11.9289C1.73728 11.9797 1.86799 12.0058 2 12.0058C2.13201 12.0058 2.26272 11.9797 2.38458 11.9289C2.50644 11.8781 2.61704 11.8037 2.71 11.71L11 3.41V11C11 11.2652 11.1054 11.5196 11.2929 11.7071C11.4804 11.8946 11.7348 12 12 12C12.2652 12 12.5196 11.8946 12.7071 11.7071C12.8946 11.5196 13 11.2652 13 11V1C12.9984 0.869323 12.9712 0.740222 12.92 0.62Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </div>
          </button>
        </nav>

        <div className="w-full lg:w-3/4">
          <div
            className={`tab-content ${
              activeTab === "tab1" ? "block" : "hidden"
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
              <div className="flex items-center justify-center">
                <img
                  src={react}
                  alt="React logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border p-2 sm:p-3 md:p-4 rounded object-cover"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={next}
                  alt="Next.js logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border p-2 sm:p-3 md:p-4 rounded object-cover"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={vite}
                  alt="Vite logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-cover"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={angular}
                  alt="Angular logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-cover"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={three}
                  alt="Three.js logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-cover"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={boots}
                  alt="Bootstrap logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={tail}
                  alt="Tailwind logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-cover"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={html}
                  alt="HTML logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-cover"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={css}
                  alt="CSS logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-cover"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={saas}
                  alt="SaaS logo"
                  className="w-12 h-16 sm:w-16 sm:h-20 md:w-18 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-cover"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={js}
                  alt="JavaScript logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-cover"
                />
              </div>
            </div>
          </div>

          <div
            className={`tab-content ${
              activeTab === "tab2" ? "block" : "hidden"
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
              <div className="flex items-center justify-center">
                <img
                  src={nodes}
                  alt="Node.js logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border p-2 sm:p-3 md:p-4 rounded object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={jquery}
                  alt="jQuery logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border p-2 sm:p-3 md:p-4 rounded object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={laravel}
                  alt="Laravel logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-cover"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={python}
                  alt="Python logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-cover"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={django}
                  alt="Django logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={c}
                  alt="C# logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={net}
                  alt=".NET logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-cover"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={js}
                  alt="JavaScript logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-cover"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={rails}
                  alt="Rails logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={express}
                  alt="Express logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border p-2 sm:p-3 md:p-4 rounded object-contain"
                />
              </div>
            </div>
          </div>

          <div
            className={`tab-content ${
              activeTab === "tab3" ? "block" : "hidden"
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
              <div className="flex items-center justify-center">
                <img
                  src={java}
                  alt="Java logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border p-2 sm:p-3 md:p-4 rounded object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={oracle}
                  alt="Oracle logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border p-2 sm:p-3 md:p-4 rounded object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={c}
                  alt="C# logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={net}
                  alt=".NET logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-cover"
                />
              </div>
            </div>
          </div>

          <div
            className={`tab-content ${
              activeTab === "tab4" ? "block" : "hidden"
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
              <div className="flex items-center justify-center">
                <img
                  src={java}
                  alt="Java logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border p-2 sm:p-3 md:p-4 rounded object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={kot}
                  alt="Kotlin logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border p-2 sm:p-3 md:p-4 rounded object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={swift}
                  alt="Swift logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={android}
                  alt="Android logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={ios}
                  alt="iOS logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={intel}
                  alt="IntelliJ logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-cover"
                />
              </div>
            </div>
          </div>

          <div
            className={`tab-content ${
              activeTab === "tab5" ? "block" : "hidden"
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
              <div className="flex items-center justify-center">
                <img
                  src={mongo}
                  alt="MongoDB logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border p-2 sm:p-3 md:p-4 rounded object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={oracle}
                  alt="Oracle logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border p-2 sm:p-3 md:p-4 rounded object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={firebase}
                  alt="Firebase logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border p-2 sm:p-3 md:p-4 rounded object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={vercel}
                  alt="Vercel logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={lite}
                  alt="SQLite logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-cover"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={sql}
                  alt="SQL logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 sm:p-3 md:p-4 border rounded object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsTechnology;
