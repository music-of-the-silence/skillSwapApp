/* eslint-disable no-unused-vars */
import React from "react";
import BannerImage from "/Banner.png";
import { MdEmail } from "react-icons/md";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl md:h-screen container mx-auto md:px-20 px-4 flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 mt-0 md:mt-12">
          <div className="space-y-8">
            <h1 className="text-4xl pt-12 font-bold md:text-justify">
              Hello, welcome here to learn and share your great skills from the{" "}
              <span className="text-[#5490FF]">best</span> teachers{" "}
              <span className="text-pink-400">everyday...!!</span>
            </h1>
            <p className="text-xl text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla et
              fugit amet soluta minus ut temporibus, laborum asperiores nostrum
              dolor perspiciatis culpa, eaque error facere obcaecati qui quasi.
              Quidem, dolorum.
            </p>
            <label className="px-4 py-2 bg-transparent border border-zinc-400 rounded flex items-center gap-2">
              <MdEmail className="text-zinc-400 text-xl" />
              <input
                type="text"
                className="grow bg-transparent outline-none"
                placeholder="Email"
              />
            </label>
          </div>
          <button className="mt-6 mb-6 md:mb-0 bg-[#5490FF] hover:bg-slate-900 dark:hover:bg-slate-50 text-white dark:hover:text-zinc-800 px-4 py-2 rounded duration-300">
            Subscribe
          </button>
        </div>
        <div className="w-full md:w-1/2 mt-20 md:mt-0 flex justify-center items-center">
          <img src={BannerImage} className="w-90 h-90" alt="BannerImage" />
        </div>
      </div>
    </>
  );
};

export default Banner;
