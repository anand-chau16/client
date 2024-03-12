import React, { useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";

function Home() {
  const [count, setCount] = useState(false);
  return (
    <>
      <div className="relative h-screen">
        <div>
          <img className="max-h-screen w-full" src="../images/bg.webp" alt="" />
        </div>
        <div className="b xl:text-7xl md:text-5xl sm:text-4xl text-lg my-20 font-bold font-serif">
          ❝Learn Together <br />
          Grow Together❞
        </div>
        <div className="buttons">
          <Link to='/Preg'>
          <button className="b text-white  text-sm p-2 border-[2px] border-white rounded-full md:w-[150px] md:text-lg font-bold h-[57px] hover:scale-110 duration-300 my-[450px]  bg-white bg-opacity-30">
            Get Started
          </button>
          </Link>
        </div>
        <div className="b box my-72">
          <img className="h-6 mr-1" src="../images/search.gif" alt=" " />
          <input type="text" placeholder="  Search... " />
        </div>
      </div>
      <div className="shadow-lg border rounded-lg ring-1 ring-slate-900/5">
        <div className="flex">
          <div className="flex flex-col items-center justify-center space-y-6 px-20 text-center w-1/2">
            <h1 className="text-3xl font-bold">Welcome To Acadamixlance</h1>
            <p className="text-xl font-semibold">
              Welcome to AcademiXLance, your ultimate destination for all things
              computer science!
            </p>
            <p className="text-xl font-semibold">
              We're thrilled to have you join our community of passionate
              learners and dedicated problem-solvers. Whether you're a seasoned
              coder or just dipping your toes into the world of programming,
              AcademiXLance is here to support you every step of the way.
            </p>
            <p className="text-xl font-semibold">
              Got a tricky algorithm that's got you stumped? Need help debugging
              that pesky line of code? Look no further! Our platform is designed
              to connect you with experienced mentors and fellow students who
              are ready to tackle your toughest challenges.
            </p>
            <p className="text-xl font-semibold">
              At AcademiXLance, we believe in the power of collaboration and the
              joy of learning. So don't be shy – dive into our forums, join a
              study group, or even schedule a one-on-one tutoring session.
              Whatever your learning style, we're here to help you succeed.
            </p>
            <p className="text-xl font-semibold">
              So welcome aboard, fellow coder! Together, let's unlock the
              endless possibilities of computer science and pave the way for a
              brighter, more innovative future.
            </p>
            <p className="text-xl font-semibold">
            Happy coding!
            </p>
          </div>
          <div className="right">
            <img className="h-screen w-auto" src="../images/stu.png" alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className=" py-4 rounded-lg  shadow-lg ring-1 ring-slate-900/5 h-auto w-auto">
          <p className="text-center text-3xl font-bold py-16">Courses</p>
          <div className="">
            <div className="flex space-x-4 justify-center">
              <div className="my-2">
                <a
                  href="#"
                  className="group block max-w-xs rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-[#16d812] hover:ring-green-500 hover:scale-105 duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <svg
                      className="h-4 w-2 stroke-sky-500 group-hover:stroke-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    ></svg>
                    <h3 className="text-slate-900 group-hover:text-white text-2xl font-bold">
                      C
                    </h3>
                  </div>
                  <p className="text-slate-500 group-hover:text-white text-sm">
                    Create a new project from a variety of starting templates.
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
                      className="h-4 w-2 stroke-sky-500 group-hover:stroke-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    ></svg>
                    <h3 className="text-slate-900 group-hover:text-white text-2xl font-bold">
                      C++
                    </h3>
                  </div>
                  <p className="text-slate-500 group-hover:text-white text-sm">
                    Create a new project from a variety of starting templates.
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
                      className="h-4 w-2 stroke-sky-500 group-hover:stroke-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    ></svg>
                    <h3 className="text-slate-900 group-hover:text-white text-2xl font-bold">
                      JAVA
                    </h3>
                  </div>

                  <p className="text-slate-500 group-hover:text-white text-sm">
                    Create a new project from a variety of starting templates.
                  </p>
                </a>
              </div>
            </div>
            <div className="flex space-x-4 justify-center">
              <div className="my-2">
                <a
                  href="#"
                  className="group block max-w-xs rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-[#16d812] hover:ring-green-500 hover:scale-105 duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <svg
                      className="h-4 w-2 stroke-sky-500 group-hover:stroke-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    ></svg>
                    <h3 className="text-slate-900 group-hover:text-white text-2xl font-bold">
                      C#
                    </h3>
                  </div>
                  <p className="text-slate-500 group-hover:text-white text-sm">
                    Create a new project from a variety of starting templates.
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
                      className="h-4 w-2 stroke-sky-500 group-hover:stroke-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    ></svg>
                    <h3 className="text-slate-900 group-hover:text-white text-2xl font-bold">
                      JS
                    </h3>
                  </div>
                  <p className="text-slate-500 group-hover:text-white text-sm">
                    Create a new project from a variety of starting templates.
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
                      className="h-4 w-2 stroke-sky-500 group-hover:stroke-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    ></svg>
                    <h3 className="text-slate-900 group-hover:text-white text-2xl font-bold">
                      CSS
                    </h3>
                  </div>
                  <p className="text-slate-500 group-hover:text-white text-sm">
                    Create a new project from a variety of starting templates.
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
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse.
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
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Leslie Alexander
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Co-Founder / CEO
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="hover:scale-105 duration-300 shadow-lg rounded-lg ring-1 ring-slate-900/5 h-28 flex items-center gap-x-6 hover:bg-slate-50">
                <img
                  className="h-16 w-16 rounded-full mx-4"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Leslie Alexander
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Co-Founder / CEO
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="hover:scale-105 duration-300 shadow-lg rounded-lg ring-1 ring-slate-900/5 h-28 flex items-center gap-x-6 hover:bg-slate-50">
                <img
                  className="h-16 w-16 rounded-full mx-4"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Leslie Alexander
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Co-Founder / CEO
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="hover:scale-105 duration-300 shadow-lg rounded-lg ring-1 ring-slate-900/5 h-28 flex items-center gap-x-6 hover:bg-slate-50">
                <img
                  className="mx-4 h-16 w-16 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Leslie Alexander
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Co-Founder / CEO
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
