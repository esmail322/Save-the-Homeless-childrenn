import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Doantate({ buttonText, img, title, ptext }) {
  return (
    <div
      id="Come"
      className=" lg:flex md:flex lg:justify-center md:justify-center lg:ml-20 md:ml-0 lg:relative  lg:first-letter:  "
    >
      <div className="lg:w-80 md:w-60  lg:h-96 md:h-60 lg:bg-accent-2  lg:mr-20 md:mr-4">
        <div className="lg:w-96 md:w-96  lg:h-80 md:h-80  bg-accent-2 relative md:relative  lg:flex md:flex md:justify-center lg:justify-center">
          <img
            className="lg:absolute  brightness-[0.3]  lg:h-[511px] md:h-[350px] lg:w-[425px] md:w-96 "
            src={img}
            alt=""
          />

          <h1 className="text-4xl md:text-xl   lg:mt-24 md:mt-4  text-white   absolute">
            {title}
          </h1>
          <p className=" absolute lg:top-24 md:top-8 font-semibold lg:px-[50px] md:px[24px] md:text-center lg:pt-16 md:pt-9 lg:items-center font-sans lg:text-center text-white">
            {" "}
            {ptext}
          </p>
          <Link
            to="/bank"
            className="absolute lg:top-72 lg:mt-24 md:mt-44 lg:w-32 bg-accent-2 lg:pt-0.5 lg:rounded-sm lg:h-8 lg:border lg:border-collapse lg:pl-3 hover:bg-white"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Doantate;
