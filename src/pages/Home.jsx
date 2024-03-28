import React, { useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";
import { ScrollRestoration } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(false);
  return (
    <>
      <ScrollRestoration />
      <div className="relative max-h-screen">
        <div>
          <img className="max-h-screen w-full object-cover" src="../images/bg.webp" alt="" />
        </div>
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-black xl:text-7xl md:text-5xl sm:text-4xl text-lg my-8 font-bold font-serif">
            <span role="img" aria-label="quote">❝</span>Learn Together <br />Grow Together<span role="img" aria-label="quote">❞</span>
          </div>
          <div className="buttons">
            <Link to='/preg'>
              <button className="text-white text-sm p-2 border-[2px] border-white rounded-full md:w-[150px] md:text-lg font-bold h-[57px] hover:scale-110 duration-300 my-8 bg-white bg-opacity-30">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 ">
          <div className="p-8">
            <h1 className="text-3xl font-bold my-8">Welcome To Acadamixlance</h1>
            <p className="mt-4 text-lg text-gray-700">
              Welcome to AcademiXLance, your ultimate destination for all things computer science! We're thrilled to have you join our community of passionate learners and dedicated problem-solvers.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              At AcademiXLance, we're thrilled to welcome passionate learners and problem-solvers of all levels. Whether you're a seasoned coder or just starting out, our platform provides support every step of the way.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              From tackling tricky algorithms to debugging code, our community connects you with mentors and peers ready to help. Dive into forums, study groups, or schedule one-on-one tutoring to tailor your learning experience.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Join us in unlocking the endless possibilities of computer science. Welcome aboard, and happy coding!
            </p>
          </div>
          <div className="p-8">
            <img className="mx-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px] xl:max-h-[800px]" src="../images/stu.png" alt="" />
          </div>
        </div>
      </div>

      <div>
        <div className=" py-4 h-auto w-auto">
          <p className="text-center text-3xl font-bold py-16">Courses</p>
          <div className="">
            <div className="flex space-x-8 justify-center">
              <div className="my-2">
                <a
                  href="#"
                  className="group block max-w-xs rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-[#16d812] hover:ring-green-500 hover:scale-105 duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <svg
                      className="h-4 w-2 "
                      fill="none"
                      viewBox="0 0 24 24"
                    ></svg>
                    <h3 className="text-slate-900 group-hover:text-white text-2xl font-bold">
                      C
                    </h3>
                  </div>
                  <p className="text-slate-500 group-hover:text-white text-sm">
                    C is a powerful and versatile programming language used for a wide range of applications.
                  </p>
                </a>
              </div>
              <div className="my-2">
                <a
                  href="#"
                  className="group block max-w-xs rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-[#16d812] hover:ring-green-500 hover:scale-105 duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <svg
                      className="h-4 w-2"
                      fill="none"
                      viewBox="0 0 24 24"
                    ></svg>
                    <h3 className="text-slate-900 group-hover:text-white text-2xl font-bold">
                      C++
                    </h3>
                  </div>
                  <p className="text-slate-500 group-hover:text-white text-sm">
                    C++ is a Efficient, versatile partially object-oriented programming language.It follows OOPS concept.
                  </p>
                </a>
              </div>
              <div className="my-2">
                <a
                  href="#"
                  className="group block max-w-xs rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-[#16d812] hover:ring-green-500 hover:scale-105 duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <svg
                      className="h-4 w-2 "
                      fill="none"
                      viewBox="0 0 24 24"
                    ></svg>
                    <h3 className="text-slate-900 group-hover:text-white text-2xl font-bold">
                      JAVA
                    </h3>
                  </div>

                  <p className="text-slate-500 group-hover:text-white text-sm">
                    Java is a Robust, scalable, and widely used programming language for building diverse applications.
                  </p>
                </a>
              </div>
            </div>
            <div className="flex space-x-8 justify-center">
              <div className="my-2">
                <a
                  href="#"
                  className="group block max-w-xs rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-[#16d812] hover:ring-green-500 hover:scale-105 duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <svg
                      className="h-4 w-2 "
                      fill="none"
                      viewBox="0 0 24 24"
                    ></svg>
                    <h3 className="text-slate-900 group-hover:text-white text-2xl font-bold">
                      C#
                    </h3>
                  </div>
                  <p className="text-slate-500 group-hover:text-white text-sm">
                    C# is a Powerful, modern programming language for building robust software applications.
                  </p>
                </a>
              </div>
              <div className="my-2">
                <a
                  href="#"
                  className="group block max-w-xs rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-[#16d812] hover:ring-green-500 hover:scale-105 duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <svg
                      className="h-4 w-2 "
                      fill="none"
                      viewBox="0 0 24 24"
                    ></svg>
                    <h3 className="text-slate-900 group-hover:text-white text-2xl font-bold">
                      JS
                    </h3>
                  </div>
                  <p className="text-slate-500 group-hover:text-white text-sm">
                    JavaScript is a Versatile, widely-used language for both front-end and back-end web development.
                  </p>
                </a>
              </div>
              <div className="my-2">
                <a
                  href="#"
                  className="group block max-w-xs rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-[#16d812] hover:ring-green-500 hover:scale-105 duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <svg
                      className="h-4 w-2"
                      fill="none"
                      viewBox="0 0 24 24"
                    ></svg>
                    <h3 className="text-slate-900 group-hover:text-white text-2xl font-bold">
                      CSS
                    </h3>
                  </div>
                  <p className="text-slate-500 group-hover:text-white text-sm">
                    Cascading Style Sheets is the language that brings aesthetics and structure to web content.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our leadership
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              "Our experienced mentors offer personalized support to help you achieve your goals. Get guidance tailored to your needs and unlock your full potential today".
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <li>
              <div className="hover:scale-105 duration-300 shadow-lg rounded-lg ring-1 ring-slate-900/5 flex items-center gap-x-6 h-28 hover:bg-slate-50">
                <img
                  className="h-16 w-16 rounded-full mx-4"
                  src="../images/Anubhav.jpg"
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Anubhav Yadav
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Backend Developer
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="hover:scale-105 duration-300 shadow-lg rounded-lg ring-1 ring-slate-900/5 h-28 flex items-center gap-x-6 hover:bg-slate-50">
                <img
                  className="h-16 w-16 rounded-full mx-4"
                  src="../images/Anand.jpeg"
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Anand Chaurasiya
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Frontend Developer
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="hover:scale-105 duration-300 shadow-lg rounded-lg ring-1 ring-slate-900/5 h-28 flex items-center gap-x-6 hover:bg-slate-50">
                <img
                  className="h-16 w-16 rounded-full mx-4"
                  src="../images/Hariom.JPG"
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Hariom Upadhaya
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    UI Developer
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="hover:scale-105 duration-300 shadow-lg rounded-lg ring-1 ring-slate-900/5 h-28 flex items-center gap-x-6 hover:bg-slate-50">
                <img
                  className="mx-4 h-16 w-16 rounded-full"
                  src="../images/Affan.jpg"
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Mohd. Affan
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Database Admin
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home