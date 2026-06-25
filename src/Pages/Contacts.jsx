import React from "react";

export default function Contacts() {
  return (
    <div className="min-h-screen pt-15">
      <div className="container bg-green-950 w-200 mx-auto p-4 rounded-md  border-2 border-white">
        <h1 className="text-white text-2xl font-bold">Have a Project ??</h1>
        <p className="text-center text-gray-400">Send Message here!! 👇</p>
        <div>
          <label htmlFor="" className="text-white text-[18px] mb-2">
            Fullname
          </label>
          <div className="flex gap-3 w-full justify-between mt-3 mb-2">
            <input
              type="text"
              placeholder="First Name"
              className="border-2 border-gray-200 bg-transparent p-2 rounded-sm w-full text-white"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border-2 border-gray-200 bg-transparent p-2 rounded-sm w-full text-white"
            />
          </div>
          <div className="contact w-full mt-4 mb-3">
            <label htmlFor="" className="text-white text-[18px] mb-2">
              Email
            </label>
            <div className="w-full mt-2">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your Email Address"
                className="border-2 border-gray-200 bg-transparent p-2 rounded-sm w-full text-white"
              />
            </div>
          </div>

          <div className="contact w-full mt-4 mb-3">
            <label htmlFor="" className="text-white text-[18px] mb-2">
              Message
            </label>
            <div className="w-full mt-2">
              <textarea
                type="text"
                name=""
                id=""
                placeholder="Enter Your Email Address"
                className="border-2 border-gray-200 bg-transparent p-2 rounded-sm w-full text-white"
              ></textarea>
            </div>
          </div>
          <div className="button flex w-full p-4 justify-around place-items-center">
            <button className="w-2/3 bg-green-500 px-10 rounded-md py-2 text-white font-bold">
              Send Message !
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
