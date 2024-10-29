/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import signupImage from "/Signup.png";
import axios from "axios";
import toast from "react-hot-toast";
import Footer from "./Footer";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post(
        "http://localhost:4001/user/signup",
        userInfo
      );
      console.log(response.data);
      if (response.data) {
        toast.success("Successfully signed up!");
        navigate("/");
        localStorage.setItem("User", JSON.stringify(response.data.user));
      }
    } catch (error) {
      console.error("Error during signup:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        toast.error("Error: " + error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        toast.error(
          "Error: No response received from server. Please try again later."
        );
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error("Error: " + error.message);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-screen container mx-auto flex flex-col md:flex-row justify-center items-center bg-slate-50 dark:bg-slate-900 dark:text-slate-50 pt-20">
        <img src={signupImage} alt="Signup Image" className="w-full md:w-1/2" />
        <div className="w-full flex flex-col justify-center items-center">
          <div className="modal-box rounded bg-slate-50 dark:bg-slate-900 dark:text-slate-50 dark:border">
            <form onSubmit={handleSubmit(onSubmit)} id="signupForm">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              {/* Name */}
              <h3 className="font-bold text-xl">Sign Up</h3>
              <div className="flex flex-col mt-4 space-y-2">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full  bg-slate-50 dark:bg-slate-900 dark:text-slate-50 border border-zinc-400 rounded px-2 py-1 outline-none"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && (
                  <span className="text-red-500 text-sm">
                    Full name is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="flex flex-col mt-4 space-y-2">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full  bg-slate-50 dark:bg-slate-900 dark:text-slate-50 border border-zinc-400 rounded px-2 py-1 outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    Email is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="flex flex-col mt-4 space-y-2">
                <span>Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full  bg-slate-50 dark:bg-slate-900 dark:text-slate-50 border border-zinc-400 rounded px-2 py-1 outline-none"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    Password is required
                  </span>
                )}
              </div>
              <div className="flex justify-between items-center mt-4">
                {/* Button */}
                <button
                  type="submit"
                  className="mt-4 bg-[#5490FF] hover:bg-slate-900 dark:hover:bg-slate-50 dark:hover:text-zinc-800 text-white px-4 py-1 rounded duration-300"
                >
                  Sign Up
                </button>

                <p className="mt-4 text-center">
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="underline text-[#5490FF] cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
