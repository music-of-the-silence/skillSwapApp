/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import contactImage from "../../public/Contact.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="w-full container mx-auto flex flex-col justify-center items-center bg-slate-50 dark:bg-slate-900 dark:text-slate-50 pt-20">
        <h1 className="text-4xl font-bold my-8 text-center">
          <span className="text-[#5490FF]">Get in touch</span> with us{" "}
          <span className="text-pink-400">24 X 7</span>
        </h1>
        <div className="w-full flex flex-col md:flex-row gap-4 justify-center items-center space-x-6">
          <img
            src={contactImage}
            alt="Contact Image"
            className="w-full md:w-1/2"
          />
          <form className="w-full md:w-1/2 flex flex-col gap-4 justify-center items-center p-8">
            <div className="flex flex-col w-full">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="px-2 py-1 rounded bg-transparent border border-slate-500"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="px-2 py-1 rounded bg-transparent border border-slate-500"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                className="px-2 py-1 rounded bg-transparent border border-slate-500"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="message">Message</label>
              <textarea
                htmlFor="message"
                className="px-2 py-1 rounded bg-transparent border border-slate-500"
              />
            </div>
            <Link to="/" className="self-start py-4">
              <button className="bg-[#5490FF] hover:bg-slate-900 dark:hover:bg-slate-50 text-white dark:hover:text-zinc-800 px-4 py-2 rounded duration-300">
                Submit
              </button>
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
