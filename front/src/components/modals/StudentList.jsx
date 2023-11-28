import React, { useEffect, useState } from "react";
import { limitString } from "../../utils";
import axios from "axios";
import { toast } from "react-toastify";
import { FaCircleCheck } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";

const StudentList = ({ show, onClose, teacherID }) => {
  const [courses, setCourses] = useState([]);
  const [isCourseUpdate, setIsCourseUpdate] = useState(false);

  const handleReject = (course) => {
    setCourseUpdate(course);
    setIsCourseUpdate(!isCourseUpdate);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getStudents();
        setCourses(response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  async function getStudents() {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8080/teacher/course?id=${teacherID}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const [course, setCourse] = useState("");
  const [isEye, setIsEye] = useState(false);
  const [courseUpdate, setCourseUpdate] = useState("");

  const toggleEye = (content) => {
    setCourse(content);
    setIsEye(!isEye);
  };

  const statusHandler = async (id, status) => {
    try {
      await axios.put(
        `http://127.0.0.1:8080/teacher/status/course?courseId=${id}`,
        { status }
      );
      onClose();
      toast.success(
        `Student has been Successfully ${
          status === "pending"
            ? "Pending"
            : status === "approved"
            ? "Approved"
            : "Rejected"
        }!`
      );
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
          className={`absolute bg-white px-6 w-full max-w-4xl rounded-lg h-4/6 overflow-y-scroll`}
        >
          <table className="table-auto p-5">
            <thead>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Student NAME</th>
                <th className="px-4 py-2">Course Name</th>
                <th className="px-4 py-2">Course URL</th>
                <th className="px-4 py-2">status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {courses?.map((course, index) => (
                <tr>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">
                    {course?.student?.fullName}
                  </td>
                  <td className="border px-4 py-2">{course?.title}</td>
                  <td className="border px-4 py-2">
                    <a
                      href={course?.url}
                      target="_blank"
                      className="text-blue-500 underline"
                    >
                      {limitString(course?.url, 10)}
                    </a>
                  </td>
                  <td className="border px-4 py-2">
                    {course?.status === "approved" ? (
                      <FaCircleCheck color="green" />
                    ) : course?.status === "pending" ? (
                      "Pending"
                    ) : (
                      <IoCloseCircle color="red" />
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    <div className="flex gap-3">
                      {/* <button
                        type="button"
                        className="border border-green-500 text-green-500 px-1 rounded-md"
                        onClick={() => statusHandler(course._id, "pending")}
                      >
                        Pending
                      </button> */}
                      <button
                        type="button"
                        className="border border-green-500 text-green-500 px-1 rounded-md"
                        onClick={() => statusHandler(course._id, "approved")}
                      >
                        Accept
                      </button>
                      <button
                        type="button"
                        className="border border-red-500 text-red-500 px-1 rounded-md"
                        onClick={() => statusHandler(course._id, "rejected")}
                      >
                        Reject
                      </button>
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
    </>
  );
};

export default StudentList;
