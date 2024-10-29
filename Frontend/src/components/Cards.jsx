/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaStarOfLife } from "react-icons/fa6";

function Cards({ item }) {
  return (
    <>
      <div className="max-w-screen-2xl min-h-full md:min-h-[97vh] gap-6 p-4">
        <div className="card rounded w-full shadow-lg bg-slate-200 md:w-[98%] hover:scale-105 duration-300 dark:bg-slate-800 dark:text-slate-50 dark:border">
          <figure>
            <img className="w-full h-72" src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body p-8">
            <div className="card-title flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center">
              <h2>{item.name}</h2>
              <div className="flex justify-start items-center gap-1">
                <div className="text-sm font-thin px-2 rounded bg-indigo-700 text-white">
                  {item.category}
                </div>
                <div className="text-sm font-thin px-2 rounded bg-orange-500 text-white">
                  {item.language}
                </div>
                <div className="text-sm font-thin px-2 rounded bg-cyan-600 text-white">
                  {item.duration}
                </div>
                <div className="flex items-center gap-1">
                  <div className="bg-lime-700 text-white font-thin text-sm rounded px-2 flex items-center gap-1">
                    {item.rating}
                    <FaStarOfLife className="text-[8px]" />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-md text-blue-600">{item.description}</p>
            <p className="text-sm ">{item.title}</p>
            <h4 className="font-semibold text-rose-700">{item.author}</h4>
            <div className="card-actions justify-between items-center">
              <div className="text-sm font-thin bg-zinc-700 px-2 rounded text-white">
                Rs. {item.price}
              </div>
              <div className="bg-indigo-700 text-sm text-white rounded font-thin px-2">
                {item.level}
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center gap-1">
              <button className="bg-[#5490FF] text-slate-50 px-5 py-2 rounded text-sm font-thin hover:bg-slate-900 dark:hover:bg-slate-50 dark:hover:text-zinc-800 duration-300 transition-all">
                Enroll Now
              </button>
              <button className="bg-[#5490FF] text-slate-50 px-5 py-2 rounded text-sm font-thin hover:bg-slate-900 dark:hover:bg-slate-50 dark:hover:text-zinc-800 duration-300 transition-all">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
