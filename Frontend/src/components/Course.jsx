/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

const Course = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("http://localhost:4001/skills");
        console.log(response.data);
        setSkills(response.data);
      } catch (error) {
        console.log("Error fetching skills:", error.message);
      }
    };
    fetchSkills();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-32 flex flex-col justify-center items-center text-center">
          <h1 className="w-full md:w-2/3 text-2xl font-semibold md:text-4xl">
            We are <span className="text-[#5490FF]">delighted</span> to have you
            here to offer you the following{" "}
            <span className="text-pink-400">courses :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            recusandae delectus assumenda dignissimos nihil, itaque consectetur
            modi porro! Nostrum vel temporibus molestias quae eligendi?
            Doloribus eum ex esse harum explicabo molestias distinctio
            temporibus culpa dicta et sapiente a repellendus nemo architecto,
            ipsa rem porro similique alias asperiores? Vel, consequatur natus.
          </p>
          <Link to="/">
            <button className="mt-12 bg-[#5490FF] hover:bg-slate-900 dark:hover:bg-slate-50 text-white dark:hover:text-zinc-800 px-4 py-2 rounded duration-300">
              Back to Home Page
            </button>
          </Link>
        </div>
        <div className="mt-12 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {skills.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
