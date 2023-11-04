import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" relative">
      <div className="h-110 bg-cyan-700 w-full h-56  pt-6 grid grid-cols-5  sticky bottom-0 left-0    text-yellow-50 ">
        <div className="text-yellow-50 pl-[60px]  ">
          <p className="text-yellow-50  text-0.5xl">
            SAVE THE <br /> HOMELESS
          </p>{" "}
          <br />
          <span className="text-yellow-50 ">
            here is the place that cau help the homeless children and bring a
            bright future
          </span>
        </div>
        <div className="pl-20">
          <span className="text-xl ">About</span>
          <br />
          <div className="pt-4">
            <a href="">who we are</a>
            <br />
            <a href="">contace</a>
            <br />
            <a href="">career</a>
            <br />
          </div>
        </div>
        <div>
          <span className="text-xl">Featured Appeals</span>
          <br />
          <div className="pt-4 ml-0 pl-0">
            <a href="">Save a chiled</a>
            <br />
            <a href="">Orphanage</a>
            <br />
            <a href="">Appeal</a>
            <br />
          </div>
        </div>
        <div>
          <div>
            <span className="text-xl">Get Involved</span>
            <br />
            <div className="pt-4 ml-0 pl-0">
              <a href="">Become a volunteer</a>
              <br />
              <a href="">Become A Reperesintative</a>
              <br />
              <a href="">Join Helper Clup</a>
              <br />
            </div>
          </div>
        </div>
        <div className="ml-6 pl-4">
          <div className="h-44 w-44 bg-slate-50 mt-2 pt-4 pl-7 pr-4 mb-4 pb-8">
            <p className="text-black mt-4 font-bold text-xs">
              We Are Together For Beautiful World , Come Join Us Today <br />
            </p>
            <br />
            <Link to="/bank">
              <button className=" mt-2  w-[120px]  h-8 text-black rounded-sm hover:bg-sky-700   bg-accent-2">
                Donate Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
