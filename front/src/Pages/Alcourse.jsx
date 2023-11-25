import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { getHostname, limitString } from "../utils";
import axios from "axios";
import CourseDetails from "../components/modals/CourseDetails";

function Alcourse() {
  const [courses, setCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseContent, setCourseDetails] = useState("");

  const toggleModal = (course) => {
    setCourseDetails(course);
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getCourses();
        setCourses(response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  async function getCourses() {
    try {
      const response = await axios.get("http://127.0.0.1:8080/teacher/course");
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

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
            {courses?.map((course) => (
              <div className="max-w-xs border border-slate-800 mx-auto rounded-xl overflow-hidden shadow-lg">
                <img
                  className="w-full h-56"
                  src={getHostname(course?.image)}
                  alt="Math"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{course.title}</div>
                  <div className="flex gap-3">
                    <p className="text-gray-700 text-base">
                      {limitString(course?.description, 60)}
                    </p>
                    <button type="button" onClick={() => toggleModal(course)}>
                      read more
                    </button>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <Link to="https://classroom.google.com/c/NjQxODQ5NzEwMTky?cjc=aj2g7gd">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Go to Course
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CourseDetails
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        details={courseContent}
      />

      <Footer />
    </div>
  );
}

export default Alcourse;
