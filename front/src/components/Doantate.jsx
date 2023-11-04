import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Doantate({ buttonText, img, title, ptext }) {
  return (
    <div
      id="Come"
      className=" lg:flex  lg:justify-center lg:ml-20  lg:relative  lg:first-letter:  "
    >
      <div className="w-80 lg:h-96 lg:bg-accent-2  lg:mr-20">
        <div className="w-96 h-80 bg-accent-2 relative  flex justify-center">
          <img
            className="lg:absolute lg:brightness-[0.3]  lg:h-[511px] lg:w-[425px]"
            src={img}
            alt=""
          />

          <h1 className="text-4xl  lg:mt-24 text-white   lg:absolute">
            {title}
          </h1>
          <p className=" lg:absolute lg:top-24 font-semibold px-[50px] text-center lg:pt-16 lg:items-center lg:font-sans lg:text-center lg:text-white">
            {" "}
            {ptext}
          </p>
          <Link
            to="/bank"
            className="lg:absolute lg:top-72 lg:mt-24 lg:w-32 bg-accent-2 lg:pt-0.5 lg:rounded-sm lg:h-8 lg:border lg:border-collapse lg:pl-3 hover:bg-white"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Doantate;
