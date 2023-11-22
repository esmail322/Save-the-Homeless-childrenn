import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Alcourse() {
  return (
    <div className=" bg-backgorund  ">
      <Header />

      <div className="container p-5 md:p-10 ">
        <select
          name=""
          id=""
          className="  border border-slate-800 rounded-lg shadow-xl  my-5 w-[20%] p-2  bg-backgorund "
        >
          <option value="">Sort By</option>
          <option value="">name</option>
          <option value="">date</option>
        </select>
        <section>
          <div className="grid grid-cols-1  mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-10  ">
            <div className="max-w-xs border border-slate-800 mx-auto rounded-xl overflow-hidden shadow-lg">
              <img className="w-full h-56" src="Telegram/math.jpg" alt="Math" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Mathmatic</div>
                <p className="text-gray-700 text-base">
                  If you are interested in continuing lessons in this subject,
                  please follow this course to build a better future for
                  yourself.
                </p>
              </div>
              <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Go to Course
                </button>
              </div>
            </div>
            <div className="max-w-xs border border-slate-800 mx-auto rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-56"
                src="Telegram/computer.jpg"
                alt="Math"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Computer</div>
                <p className="text-gray-700 text-base">
                  If you are interested in continuing lessons in this subject,
                  please follow this course to build a better future for
                  yourself.
                </p>
              </div>
              <div className="px-6 py-4">
                <Link to="https://classroom.google.com/c/NjQxODQ5NzEwMTky?cjc=aj2g7gd">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Go to Course
                  </button>
                </Link>
              </div>
            </div>
            <div className="max-w-xs border border-slate-800 mx-auto rounded-xl overflow-hidden shadow-lg">
              <img className="w-full h-56" src="Telegram/math.jpg" alt="Math" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Mathematic</div>
                <p className="text-gray-700 text-base">
                  If you are interested in continuing lessons in this subject,
                  please follow this course to build a better future for
                  yourself.
                </p>
              </div>
              <div className="px-6 py-4">
                <Link to="https://classroom.google.com/c/NjM4NzAxNzQ4ODQ3?cjc=mmn5652">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Go to Course
                  </button>
                </Link>
              </div>
            </div>
            <div className="max-w-xs border border-slate-800 mx-auto rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-56"
                src="Telegram/dari.jpeg"
                alt="Math"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Mathmatic</div>
                <p className="text-gray-700 text-base">
                  If you are interested in continuing lessons in this subject,
                  please follow this course to build a better future for
                  yourself.
                </p>
              </div>
              <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Go to Course
                </button>
              </div>
            </div>
            <div className="max-w-xs border border-slate-800 mx-auto rounded-xl overflow-hidden shadow-lg">
              <img className="w-full h-56" src="Telegram/math.jpg" alt="Math" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Mathmatic</div>
                <p className="text-gray-700 text-base">
                  If you are interested in continuing lessons in this subject,
                  please follow this course to build a better future for
                  yourself.
                </p>
              </div>
              <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Go to Course
                </button>
              </div>
            </div>
            <div className="max-w-xs border border-slate-800 mx-auto rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-56"
                src="Telegram/english.jpg"
                alt="Math"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Mathmatic</div>
                <p className="text-gray-700 text-base">
                  If you are interested in continuing lessons in this subject,
                  please follow this course to build a better future for
                  yourself.
                </p>
              </div>
              <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Go to Course
                </button>
              </div>
            </div>
            <div className="max-w-xs border border-slate-800 mx-auto rounded-xl overflow-hidden shadow-lg">
              <img className="w-full h-56" src="Telegram/math.jpg" alt="Math" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Mathmatic</div>
                <p className="text-gray-700 text-base">
                  If you are interested in continuing lessons in this subject,
                  please follow this course to build a better future for
                  yourself.
                </p>
              </div>
              <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Go to Course
                </button>
              </div>
            </div>
            <div className="max-w-xs border border-slate-800 mx-auto rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-56"
                src="Telegram/image.jpg"
                alt="Math"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Mathmatic</div>
                <p className="text-gray-700 text-base">
                  If you are interested in continuing lessons in this subject,
                  please follow this course to build a better future for
                  yourself.
                </p>
              </div>
              <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Go to Course
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Alcourse;
