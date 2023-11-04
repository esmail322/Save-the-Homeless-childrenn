import React from "react";
import { Link } from "react-router-dom";

function Bloglist() {
  return (
    <div>
      <div className="flex flex-row px-16">
        <div className=" w-1/2   border-[0.5px] border-[#020403] rounded-sm   flex h-80 mb-">
          <img
            src="Telegram/image.jpg"
            className="w-76 ml-8 mt-6 h-60"
            alt=""
          />
          <div className="flex flex-row relative ">
            {" "}
            <p className="absolute left-9 top-5 w-32">Ahmad Rashid</p>
            <br />
            <p className="text-1x2 w-80 left-8 top-14 absolute flex flex-row font-bold ">
              10 Ways to Give To Charity Without Your Budget
            </p>
            <Link
              to="/blog"
              className="text-1x2 w-80 left-16 top-40 absolute flex flex-row font-bold "
            >
              More About ...
            </Link>
          </div>
        </div>{" "}
        <div className=" w-1/2 flex-row space-x-10 border-[0.5px] border-[#020403] rounded-sm      flex h-80 mb-2 ml-2">
          <img
            src="Telegram/image.jpg"
            className="w-76 ml-8 mt-6 h-60"
            alt=""
          />
          <div className="flex flex-row relative  ">
            {" "}
            <p className="absolute left-2 top-5 w-32">Ahmad Rashid</p>
            <br />
            <p className="text-1x2 w-80 top-14 absolute flex flex-row font-bold ">
              10 Ways to Give To Charity Without Your Budget
            </p>
            <Link
              to="/blog"
              className="text-1x2 w-80 left-16 top-40 absolute flex flex-row font-bold "
            >
              More About ...
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row px-16">
        <div className=" w-1/2  space-x-10 border-[0.5px] border-[#020403] rounded-sm      flex h-80 mb-">
          <img
            src="Telegram/image.jpg"
            className="w-76 ml-8 mt-6 h-60"
            alt=""
          />
          <div className="flex flex-row relative ">
            {" "}
            <p className="absolute left-2 top-5 w-32">Ahmad Rashid</p>
            <br />
            <p className="text-1x2 w-80 top-14 absolute flex flex-row font-bold ">
              10 Ways to Give To Charity Without Your Budget
            </p>
            <Link
              to="/blog"
              className="text-1x2 w-80 left-16 top-40 absolute flex flex-row font-bold "
            >
              More About ...
            </Link>
          </div>
        </div>{" "}
        <div className=" w-1/2 flex-row space-x-10 border-[0.5px] border-[#020403] rounded-sm     ml-2 flex h-80 mb-10">
          <img
            src="Telegram/image.jpg"
            className="w-76 ml-8 mt-6 h-60"
            alt=""
          />
          <div className="flex flex-row relative ">
            {" "}
            <p className="absolute left-2 top-5 w-32">Ahmad Rashid</p>
            <br />
            <p className="text-1x2 w-80 top-14 absolute flex flex-row font-bold ">
              10 Ways to Give To Charity Without Your Budget
            </p>
            <Link
              to="/blog"
              className="text-1x2 w-80 left-16 top-40 absolute flex flex-row font-bold "
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
