import React, { useEffect, useState } from "react";
import { getHostname, limitString } from "../../utils";
import axios from "axios";
import CourseDetails from "./CourseDetails";
import { toast } from "react-toastify";

const CourseList = ({ show, onClose }) => {
  const [courses, setCourses] = useState([]);

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

  const [course, setCourse] = useState("");
  const [isEye, setIsEye] = useState(false);
  const [id, setId] = useState("");

  const toggleEye = (content) => {
    setCourse(content);
    setIsEye(!isEye);
  };

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8080/teacher/course/${id}`);
      onClose();
      toast.success("Course Deleted Successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        id="modal"
        className={`${
          !show ? "hidden" : ""
        } fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex items-center justify-center`}
      >
        <div
          className={`absolute bg-white px-6 w-full max-w-3xl rounded-lg h-4/6 overflow-y-scroll`}
        >
          <table className="table-auto p-5">
            <thead>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {courses?.map((course, index) => (
                <tr>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">
                    <img
                      src={getHostname(course?.image)}
                      alt="Placeholder"
                      className="w-24 h-20"
                    />
                  </td>
                  <td className="border px-4 py-2">{course?.title}</td>
                  <td className="border px-4 py-2">
                    {limitString(course?.description, 50)}
                  </td>
                  <td className="border px-4 py-2">
                    <div className="flex gap-3">
                      <button type="button" onClick={() => toggleEye(course)}>
                        Show
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteHandler(course._id)}
                      >
                        Delete
                      </button>
                      <button type="button">Update</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            onClick={onClose}
            className="bg-red-500 my-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2 float-right"
          >
            Close
          </button>
        </div>
      </div>

      {isEye && (
        <CourseDetails
          show={isEye}
          onClose={() => setIsEye(false)}
          details={course}
        />
      )}
    </>
  );
};

export default CourseList;
