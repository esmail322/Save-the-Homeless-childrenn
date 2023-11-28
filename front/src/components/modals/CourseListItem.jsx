import React from "react";
import { getHostname, limitString } from "../../utils";
import Button from "./Button";

const CourseListItem = ({
  course,
  courseData,
  toggleModal,
  requestHandler,
  handleStatusChange,
}) => {
  console.log("status: ", course.status);
  return (
    <div className="max-w-xs border border-slate-800 mx-auto rounded-xl overflow-hen shadow-lg">
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
          <Button
            text="read more"
            onClick={() => toggleModal(course)}
            isTrue={course?.status === "pending"}
          />
        </div>
      </div>
      {course?.status === "rejected" ? (
        <div className="px-6 py-4">
          <Button
            text={
              //   (courseData?.student === localStorage.getItem("studentID") &&
              //     courseData?.status === "pending") ||
              course?.student?._id === localStorage.getItem("studentID") &&
              course?.status === "pending"
                ? "Pending to Accept"
                : "Join Course"
            }
            color={
              //   (courseData?.student === localStorage.getItem("studentID") &&
              //     courseData?.status === "pending") ||
              course?.student?._id === localStorage.getItem("studentID") &&
              course?.status === "pending"
                ? "blue"
                : "orange"
            }
            onClick={() => {
              handleStatusChange(course?._id);
              requestHandler(course);
            }}
            isTrue={course?.status === "pending"}
            key={course._id}
          />
        </div>
      ) : (
        <div className="px-6 py-4">
          {courseData?.student === localStorage.getItem("studentID") ||
          course?.student?._id === localStorage.getItem("studentID") ? (
            <a
              href={
                (courseData?.student === localStorage.getItem("studentID") &&
                  courseData?.status === "approved") ||
                (course?.student?._id === localStorage.getItem("studentID") &&
                  course?.status === "approved" &&
                  course?.url)
              }
              target="_blank"
            >
              <Button
                text={
                  //   (courseData?.student === localStorage.getItem("studentID") &&
                  //     courseData?.status === "approved") ||
                  course?.student?._id === localStorage.getItem("studentID") &&
                  course?.status === "approved"
                    ? "Go to Course"
                    : "Pending to Accept"
                }
                color={
                  //   (courseData?.student === localStorage.getItem("studentID") &&
                  //     courseData?.status === "pending") ||
                  course?.student?._id === localStorage.getItem("studentID") &&
                  course?.status === "pending"
                    ? "blue"
                    : "green"
                }
                disabled={
                  //   (courseData?.student === localStorage.getItem("studentID") &&
                  //     courseData?.status === "pending") ||
                  course?.student?._id === localStorage.getItem("studentID") &&
                  course?.status === "pending"
                }
                isTrue={course?.status === "pending"}
                key={course._id}
              />
            </a>
          ) : (
            <Button
              text="Join Course"
              color="blue"
              onClick={() => {
                requestHandler(course);
              }}
              isTrue={course?.status === "pending"}
              key={course._id}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CourseListItem;
