/* eslint-disable no-unused-vars */
import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Logout() {
  const { authUser, setAuthUser } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("User");
      toast.success("Logout Successfully");
      navigate("/");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      toast.error("Error: " + error.message);
      setTimeout(() => {}, 2000);
    }
  };

  return (
    <div>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded duration-300 hover:bg-red-700"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
