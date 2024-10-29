/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post(
        "http://localhost:4001/user/login",
        userInfo
      );
      console.log(response.data);
      if (response.data) {
        toast.success("Successfully logged in!");
        document.getElementById("my_modal_3").close();
        navigate("/");
        setTimeout(() => {
          window.location.reload();
          localStorage.setItem("User", JSON.stringify(response.data.user));
        }, 1000);
      }
    } catch (error) {
      console.error("Error during login:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        toast.error("Error: " + error.response.data.message);
        setTimeout(() => {}, 2000);
      } else if (error.request) {
        // The request was made but no response was received
        toast.error(
          "Error: No response received from server. Please try again later."
        );
        setTimeout(() => {}, 2000);
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error("Error: " + error.message);
        setTimeout(() => {}, 2000);
      }
    }
  };
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-slate-50 dark:bg-slate-900 dark:text-slate-50 dark:border rounded">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <form id="loginForm" onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <h3 className="font-bold text-xl">Login</h3>
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
                  Login
                </button>

                <p className="mt-4 text-center">
                  Don&apos;t have an account?{" "}
                  <Link
                    to="/signup"
                    className="underline text-[#5490FF] cursor-pointer"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
