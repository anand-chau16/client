import React from "react";

function MenReg() {
  return (
    <>
      <div className="min-h-screen py-10 bg-gradient-to-r from-green-100 via-green-200 to-green-300">
        <div className="container mx-auto">
          <div className="flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="flex flex-col items-center justify-center w-1/2 py-16 px-12 shadow-2 shadow-md">
              <h1 className="text-3xl mb-3 font-bold">Register As Mentor</h1>
              <div>
                <form action="" id="men" name="reg">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="shadow-md border border-gray-400 py-1 px-2 my-3 rounded-sm w-full focus:outline-none focus:border-[#16d812] focus:ring-[#16d812] block focus:ring-1 hover:bg-slate-50"
                    />
                    <input
                      type="text"
                      placeholder="Middle Name"
                      className="shadow-md border border-gray-400 py-1 px-2 my-2 rounded-sm w-full focus:outline-none focus:border-[#16d812] focus:ring-[#16d812] block focus:ring-1 hover:bg-slate-50"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="shadow-md border border-gray-400 py-1 px-2 my-3 rounded-sm w-full focus:outline-none focus:border-[#16d812] focus:ring-[#16d812] block focus:ring-1 hover:bg-slate-50"
                    />
                    <form>
                      <input
                        type="email"
                        placeholder="Email"
                        className="peer shadow-md border border-gray-400 py-1 px-2 my-3 rounded-sm w-full focus:outline-none focus:border-[#16d812] focus:ring-[#16d812] block focus:ring-1 hover:bg-slate-50"
                      />
                      <p className="invisible peer-invalid:visible text-pink-600 text-xs">
                        Please provide a valid email address.
                      </p>
                    </form>
                    <input
                      type="password"
                      placeholder="Password"
                      className="shadow-md border border-gray-400 py-1 px-2 my-2 rounded-sm w-full focus:outline-none focus:border-[#16d812] focus:ring-[#16d812] block focus:ring-1 hover:bg-slate-50"
                    />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="shadow-md border border-gray-400 py-1 px-2 my-3 rounded-sm w-full focus:outline-none focus:border-[#16d812] focus:ring-[#16d812] block focus:ring-1 hover:bg-slate-50"
                    />
                    <div className="mt-5">
                      <input type="checkbox" className="border-gray-300" />
                      <span>
                        {" "}
                        I accept the{" "}
                        <a
                          href="#"
                          className="text-[#16d812] font-semibold hover:underline"
                        >
                          {" "}
                          Terms of Use
                        </a>{" "}
                        &{" "}
                        <a
                          href="#"
                          className="text-[#16d812] font-semibold hover:underline"
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </div>
                    <div className="mt-5">
                      <button className="shadow-md w-full bg-[#16d812] py-3 text-center text-white rounded-sm hover:bg-green-500 active:bg-green-600 hover:scale-95 duration-300">
                        Register Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div>
              <div className=" h-screen">
                <img
                  className="py-24 hover:scale-105 duration-300"
                  src="../images/mantor1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenReg
