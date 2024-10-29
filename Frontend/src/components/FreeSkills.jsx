/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

const FreeSkills = () => {
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
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl min-h-fit container mx-auto md:px-20 px-4">
        <div>
          <h1 className="text-xl font-semibold pb-2">Free Offered Skills</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed magni
            architecto perferendis similique, veritatis reprehenderit. Provident
            accusantium laudantium quo deserunt.
          </p>
        </div>

        <div className="my-6">
          <Slider {...settings}>
            {skills.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeSkills;
