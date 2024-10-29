/* eslint-disable no-unused-vars */
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-10">
      <hr />
      <footer className="footer footer-center  p-10">
        <nav className="grid grid-flow-col text-base gap-4">
          <a
            href="/about"
            className="hover:scale-105 hover:text-[#5490FF] duration-300"
          >
            About us
          </a>
          <a
            href="/contact"
            className="hover:scale-105 hover:text-[#5490FF] duration-300"
          >
            Contact
          </a>
          <a
            href="/course"
            className="hover:scale-105 hover:text-[#5490FF] duration-300"
          >
            Courses
          </a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="/"
              className="text-2xl hover:bg-zinc-900 dark:hover:bg-slate-50 rounded-full p-2 hover:text-slate-50 dark:hover:text-zinc-800 duration-300 transition-all hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="/"
              className="text-2xl hover:bg-zinc-900 dark:hover:bg-slate-50 rounded-full p-2 hover:text-slate-50 dark:hover:text-zinc-800 duration-300 transition-all hover:scale-110"
            >
              <FaXTwitter />
            </a>
            <a
              href="/"
              className="text-2xl hover:bg-zinc-900 dark:hover:bg-slate-50 rounded-full p-2 hover:text-slate-50 dark:hover:text-zinc-800 duration-300 transition-all hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="/"
              className="text-2xl hover:bg-zinc-900 dark:hover:bg-slate-50 rounded-full p-2 hover:text-slate-50 dark:hover:text-zinc-800 duration-300 transition-all hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="/"
              className="text-2xl hover:bg-zinc-900 dark:hover:bg-slate-50 rounded-full p-2 hover:text-slate-50 dark:hover:text-zinc-800 duration-300 transition-all hover:scale-110"
            >
              <FaYoutube />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            <a
              href="https://www.novumlabs.net"
              target="_blank"
              className="hover:scale-105 hover:text-[#5490FF] duration-300"
            >
              Novum Labs
            </a>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
