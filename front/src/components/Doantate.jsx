import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Doantate({ buttonText, img, title, ptext }) {
  return (
    <div
      id="Come"
      className=" lg:flex md:flex lg:justify-center md:justify-center lg:ml-20 md:mt-36 lg:mt-14  lg:relative  lg:first-letter:  "
    >
      <div className="lg:w-80 md:w-80 lg:h-96 md:h-96 lg:bg-accent-2  lg:mr-20 md:mr-4">
        <div className="lg:w-96 md:w-96  lg:h-80 md:h-80  bg-accent-2 relative md:relative  lg:flex md:flex md:justify-center lg:justify-center">
          <img
            className="lg:absolute  brightness-[0.3]  lg:h-[511px] md:h-[511px] lg:w-[425px] md:w-[425px] "
            src={img}
            alt=""
          />

          <h1 className="text-4xl    mt-24 md:mt-4  text-white   absolute">
            {title}
          </h1>
          <p className=" absolute top-24  font-semibold px-[50px]   pt-16 md:pt-9 lg:items-center font-sans text-center text-white">
            {" "}
            {ptext}
          </p>
          <Link
            to="/bank"
            className="absolute top-72 mt-24  w-32 bg-accent-2 pt-0.5 rounded-sm lg:h-8 border border-collapse pl-3 hover:bg-white"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Doantate;
