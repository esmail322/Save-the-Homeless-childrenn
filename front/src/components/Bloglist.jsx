import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Bloglist() {
  return (
    <div className=" bg-backgorund ">
      <div className="flex gap-3 py-2 px-16">
        <div className="w-1/2   border-[0.5px] border-[#020403] rounded-sm   flex h-80">
          <img
            src="Telegram/image.jpg"
            className="lg:w-76 md:w-40 md:ml-4 lg:ml-8 mt-6 h-60"
            alt=""
          />
          <div className="flex relative ">
            {" "}
            <p className="absolute lg:left-9 md:left-4 top-5 w-32">
              Ahmad Rashid
            </p>
            <br />
            <p className=" lg:w-80 md:w-32 md:text-xs lg:left-8 md:left-4 top-14 absolute lg:text-[16px] md:font-bold flex flex-row lg:font-bold ">
              10 Ways to Give To Charity Without Your Budget
            </p>
            <Link
              to="/blog"
              className="text-1x2 w-80 lg:left-16 top-40 absolute flex flex-row md:left-5 font-bold "
            >
              More About ...
            </Link>
          </div>
        </div>
        <div className="w-1/2   border-[0.5px] border-[#020403] rounded-sm   flex h-80">
          <img
            src="Telegram/image.jpg"
            className="lg:w-76 md:w-40 md:ml-4 lg:ml-8 mt-6 h-60"
            alt=""
          />
          <div className="flex relative ">
            {" "}
            <p className="absolute lg:left-9 md:left-4 top-5 w-32">
              Ahmad Rashid
            </p>
            <br />
            <p className=" lg:w-80 md:w-32 md:text-xs lg:left-8 md:left-4 top-14 absolute lg:text-[16px] md:font-bold flex flex-row lg:font-bold ">
              10 Ways to Give To Charity Without Your Budget
            </p>
            <Link
              to="/blog"
              className="text-1x2 w-80 lg:left-16 top-40 absolute flex flex-row md:left-5 font-bold "
            >
              More About ...
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-3 py-2 px-16">
        <div className="w-1/2   border-[0.5px] border-[#020403] rounded-sm   flex h-80">
          <img
            src="Telegram/image.jpg"
            className="lg:w-76 md:w-40 md:ml-4 lg:ml-8 mt-6 h-60"
            alt=""
          />
          <div className="flex relative ">
            {" "}
            <p className="absolute lg:left-9 md:left-4 top-5 w-32">
              Ahmad Rashid
            </p>
            <br />
            <p className=" lg:w-80 md:w-32 md:text-xs lg:left-8 md:left-4 top-14 absolute lg:text-[16px] md:font-bold flex flex-row lg:font-bold ">
              10 Ways to Give To Charity Without Your Budget
            </p>
            <Link
              to="/blog"
              className="text-1x2 w-80 lg:left-16 top-40 absolute flex flex-row md:left-5 font-bold "
            >
              More About ...
            </Link>
          </div>
        </div>
        <div className="w-1/2   border-[0.5px] border-[#020403] rounded-sm   flex h-80">
          <img
            src="Telegram/image.jpg"
            className="lg:w-76 md:w-40 md:ml-4 lg:ml-8 mt-6 h-60"
            alt=""
          />
          <div className="flex relative ">
            {" "}
            <p className="absolute lg:left-9 md:left-4 top-5 w-32">
              Ahmad Rashid
            </p>
            <br />
            <p className=" lg:w-80 md:w-32 md:text-xs lg:left-8 md:left-4 top-14 absolute lg:text-[16px] md:font-bold flex flex-row lg:font-bold ">
              10 Ways to Give To Charity Without Your Budget
            </p>
            <Link
              to="/blog"
              className="text-1x2 w-80 lg:left-16 top-40 absolute flex flex-row md:left-5 font-bold "
            >
              More About ...
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Bloglist;
