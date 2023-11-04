import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Alcourse() {
  return (
    <div className="relative bg-backgorund ">
      <Header />

      <select
        name=""
        id=""
        className="absolute left-64 top-44 border border-black rounded-sm bg-backgorund "
      >
        <option value="">Sort By</option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <section className="relative ">
        <div className="flex ml-64 space-x-4 mb mt-32">
          {" "}
          <div className="w-72 border border-black h-[560px]">
            <img className=" p-2 rounded-md" src="Telegram/math.jpg" alt="" />
            <h1 className="pl-2 font-bold">Mathmathic</h1>
            <p className="p-3 font-semibold">
              If you are intersted to continue lesson in this part please follow
              this course to a fututre for yourself.
            </p>
            <button className="border w-32 h-10 border-black m-3 font-bold ">
              Go to Course
            </button>
          </div>
          <div className="w-72 border border-black h-[560px]">
            <img className=" p-2 rounded-md" src="Telegram/math.jpg" alt="" />
            <h1 className="pl-2 font-bold">Mathmathic</h1>
            <p className="p-3 font-semibold">
              If you are intersted to continue lesson in this part please follow
              this course to a fututre for yourself.
            </p>
            <button className="border w-32 h-10 border-black m-3 font-bold ">
              Go to Course
            </button>
          </div>
          <div className="w-72 border border-black h-[560px]">
            <img className=" p-2 rounded-md" src="Telegram/math.jpg" alt="" />
            <h1 className="pl-2 font-bold">Mathmathic</h1>
            <p className="p-3 font-semibold">
              If you are intersted to continue lesson in this part please follow
              this course to a fututre for yourself.
            </p>
            <button className="border w-32 h-10 border-black m-3 font-bold ">
              Go to Course
            </button>
          </div>
        </div>
        <div className="flex ml-64 space-x-4 mt-6 mb-16">
          {" "}
          <div className="w-72 border border-black h-[560px]">
            <img
              className=" p-2 h-[375px] rounded-md"
              src="Telegram/computer.jpg"
              alt=""
            />
            <h1 className="pl-2 font-bold">Computer</h1>
            <p className="p-3 font-semibold">
              If you are intersted to continue lesson in this part please follow
              this course to a fututre for yourself.
            </p>
            <button className="border w-32 h-10 border-black m-3 font-bold ">
              Go to Course
            </button>
          </div>
          <div className="w-72 border border-black h-[560px]">
            {" "}
            <img className=" p-2 rounded-md" src="Telegram/math.jpg" alt="" />
            <h1 className="pl-2 font-bold">Mathmathic</h1>
            <p className="p-3 font-semibold">
              If you are intersted to continue lesson in this part please follow
              this course to a fututre for yourself.
            </p>
            <button className="border w-32 h-10 border-black m-3 font-bold ">
              Go to Course
            </button>
          </div>
          <div className="w-72 border border-black h-[560px]">
            <img className=" p-2 rounded-md" src="Telegram/math.jpg" alt="" />
            <h1 className="pl-2 font-bold">Mathmathic</h1>
            <p className="p-3 font-semibold">
              If you are intersted to continue lesson in this part please follow
              this course to a fututre for yourself.
            </p>
            <button className="border w-32 h-10 border-black m-3 font-bold ">
              Go to Course
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Alcourse;
