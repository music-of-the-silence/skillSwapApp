/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import aboutImage from "../../public/About.png";
import Cards from "./Cards";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";

function About() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("http://localhost:4001/skills");

        const filteredSkills = response.data.filter(
          (data) => data.category === "Free"
        );
        console.log(filteredSkills);
        setSkills(filteredSkills);
      } catch (error) {
        console.log("Error fetching skills:", error.message);
      }
    };
    fetchSkills();
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-full container mx-auto flex flex-col justify-center items-center bg-slate-50 dark:bg-slate-900 dark:text-slate-50 pt-20">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center pt-12">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 ">
            <h1 className="text-4xl font-bold my-8">
              Know <span className="text-[#5490FF]">about us</span> to get in
              touch{" "}
              <span className="text-pink-400">forever and ever....!!</span>
            </h1>
            <p className="text-lg text-justify py-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis repellendus deserunt ipsam. Eligendi voluptatem
              voluptates officia sed voluptatum doloribus culpa pariatur libero
              beatae ipsum incidunt facilis, asperiores debitis esse labore nisi
              dignissimos, doloremque numquam exercitationem deserunt.
              Voluptates asperiores pariatur aperiam consequuntur labore facere
              et soluta iste amet hic, quidem iure?
            </p>
            <Link to="/" className="mt-4 md:self-start">
              <button className="bg-[#5490FF] hover:bg-slate-900 dark:hover:bg-slate-50 text-white dark:hover:text-zinc-800 px-4 py-2 rounded duration-300">
                Return to Home Page
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img src={aboutImage} alt="About Image" />
          </div>
        </div>
        <div className="w-full">
          <div className="mt-12 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {skills.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
