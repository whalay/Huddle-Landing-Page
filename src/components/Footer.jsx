import React from "react";

import logo from "../assets/images/logo1.svg";


import { MdOutlineLocationOn } from "react-icons/md";
import { BsTelephoneX } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="bg-dark_Cyan text-white md:p-20 p-4 pt-20  h-full z-0">
      <div className="text-xl flex flex-wrap flex-col md:flex-row justify-between gap-14 md:items-center pt-20 px-2 ">
        <div className=" md:w-[30em] space-y-5 ">
          <img src={logo} alt="" className="" />
          <span className="flex justify-start items-center gap-5 py-3">
            <div>
              <MdOutlineLocationOn className="w-5 h-10" />
            </div>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </span>
          <span className="flex gap-5">
            <div>
              <BsTelephoneX />
            </div>
            <p> +1-543-123-4567</p>
          </span>
          <div className="flex gap-5">
            <div>
              <CgMail />
            </div>
            <p> example@huddle.com</p>
          </div>
        </div>

        <div className="space-y-5">
          <p>About Us</p>
          <p>What We Do</p>
          <p>FAQ</p>
        </div>

        <div className="space-y-5">
          <p>Career</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </div>

        <div className="flex gap-5 items-start">
          <span className="border p-2 rounded-full">
            <FaFacebookF />
          </span>
          <span className="border p-2 rounded-full">
            <FiTwitter />
          </span>
          <span className="border p-2 rounded-full">
            <FiInstagram />
          </span>
        </div>
      </div>

      <div className="text-center mt-20 space-y-5">
        &copy; Copyright 2022 Huddle. All rights reserved.
        <p className="text-center ">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://holar-portfolio.netlify.app/" className="text-Pink">
            Holar
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Footer;
