import React from "react";

function Card() {
  return (
    <div className="w-100 h-[100vh] flex items-center justify-center text-center">
      <div className="card w-[70%] md:w-1/2 border-2 border-slate-500 rounded-2xl">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-8  rounded-t-xl ">
          <h4 className="text-xl font-bold text-white">News you can Trust.</h4>
        </div>
        <div className="px-2 py-6 flex flex-col gap-y-2">
          <div className="py-3">
            <h4 className="font-bold text-xl ">
              Stay up to date with the Latest!
            </h4>
            <p className="font-semibold">
              Subscribe to our newsletter for the latest news straight into your
              inbox
            </p>
          </div>

          <div className=" w-[90%] mx-auto">
            <input
              type="email"
              placeholder="you@example.com"
              className=" rounded w-100  bg-slate-200 px-4 py-3 w-[100%] mt-3"
            />

            <button className="bg-indigo-400 text-white py-3 rounded-full w-[100%] mt-3 ">
              Subscribe Now
            </button>
          </div>
          <p className="text-[14px] font-semibold">We value your policy.</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
