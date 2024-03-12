import React from "react";

function MenReg() {
  return (
    <>
      <div class="min-h-screen py-10 bg-gradient-to-r from-green-100 via-green-200 to-green-300">
        <div class="container mx-auto">
          <div class="flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div class="flex flex-col items-center justify-center w-1/2 py-16 px-12 shadow-2 shadow-md">
              <h1 class="text-3xl mb-3 font-bold">Register As Mentor</h1>
              <div>
                <form action="">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      class="shadow-md border border-gray-400 py-1 px-2 my-3 rounded-sm w-full focus:outline-none focus:border-[#16d812] focus:ring-[#16d812] block focus:ring-1 hover:bg-slate-50"
                    />
                    <input
                      type="text"
                      placeholder="Middle Name"
                      class="shadow-md border border-gray-400 py-1 px-2 my-2 rounded-sm w-full focus:outline-none focus:border-[#16d812] focus:ring-[#16d812] block focus:ring-1 hover:bg-slate-50"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      class="shadow-md border border-gray-400 py-1 px-2 my-3 rounded-sm w-full focus:outline-none focus:border-[#16d812] focus:ring-[#16d812] block focus:ring-1 hover:bg-slate-50"
                    />
                    <form>
                      <input
                        type="email"
                        placeholder="Email"
                        class="peer shadow-md border border-gray-400 py-1 px-2 my-3 rounded-sm w-full focus:outline-none focus:border-[#16d812] focus:ring-[#16d812] block focus:ring-1 hover:bg-slate-50"
                      />
                      <p class="invisible peer-invalid:visible text-pink-600 text-xs">
                        Please provide a valid email address.
                      </p>
                    </form>
                    <input
                      type="password"
                      placeholder="Password"
                      class="shadow-md border border-gray-400 py-1 px-2 my-2 rounded-sm w-full focus:outline-none focus:border-[#16d812] focus:ring-[#16d812] block focus:ring-1 hover:bg-slate-50"
                    />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      class="shadow-md border border-gray-400 py-1 px-2 my-3 rounded-sm w-full focus:outline-none focus:border-[#16d812] focus:ring-[#16d812] block focus:ring-1 hover:bg-slate-50"
                    />
                    <div class="mt-5">
                      <input type="checkbox" class="border-gray-300" />
                      <span>
                        I accept the{" "}
                        <a
                          href="#"
                          class="text-[#16d812] font-semibold hover:underline"
                        >
                          {" "}
                          Terms of Use
                        </a>{" "}
                        &{" "}
                        <a
                          href="#"
                          class="text-[#16d812] font-semibold hover:underline"
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </div>
                    <div class="mt-5">
                      <button class="shadow-md w-full bg-[#16d812] py-3 text-center text-white rounded-sm hover:bg-green-500 active:bg-green-600 hover:scale-95 duration-300">
                        Register Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div>
              <div class=" h-screen">
                <img
                  class="py-24 hover:scale-105 duration-300"
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