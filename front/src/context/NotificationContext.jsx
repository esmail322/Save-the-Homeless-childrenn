import { createContext, useState } from "react";

export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  // const donar = localStorage.getItem("donar");
  let storedDonar = JSON.parse(localStorage.getItem("donarNotify"));
  let donarValue = storedDonar?.donarNotify;

  // const student = localStorage.getItem("student");
  let storedStudent = JSON.parse(localStorage.getItem("student"));
  let studentValue = storedStudent?.student;

  // const teacher = localStorage.getItem("teacher");
  let storedTeacher = JSON.parse(localStorage.getItem("teacher"));
  let TeacherValue = storedTeacher?.teacher;

  const [NDonar, setNDonar] = useState(donarValue > 0 ? donarValue : 0);
  const [NStudent, setNStudent] = useState(studentValue > 0 ? studentValue : 0);
  const [NTeacher, setNTeacher] = useState(TeacherValue > 0 ? TeacherValue : 0);

  const handelNDonar = () => {
    const updatedNDonar = Number(NDonar) + 1;
    setNDonar(updatedNDonar);
    localStorage.setItem(
      "donarNotify",
      JSON.stringify({ donarNotify: updatedNDonar })
    );
  };
  const handelNStudent = () => {
    const updatedNStudent = Number(NStudent) + 1;
    setNStudent(updatedNStudent);
    localStorage.setItem(
      "student",
      JSON.stringify({ student: updatedNStudent })
    );
  };

  const handelNTeacher = () => {
    const updatedNTeacher = Number(NTeacher) + 1;
    setNTeacher(updatedNTeacher);
    localStorage.setItem(
      "teacher",
      JSON.stringify({ teacher: updatedNTeacher })
    );
  };
  const [NNotification, setNNotification] = useState(
    NDonar + NTeacher + NStudent
  );
  const handelRemoveNotification = () => {
    console.log("hello");
    localStorage.removeItem("donarNotify");
    localStorage.removeItem("teacher");
    localStorage.removeItem("student");
    setNDonar(0);
    setNTeacher(0);
    setNStudent(0);
    setNNotification(0);
  };
  return (
    <NotificationContext.Provider
      value={{
        NTeacher,
        NDonar,
        NStudent,
        handelNDonar,
        handelNStudent,
        handelNTeacher,
        handelRemoveNotification,
        NNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
export default NotificationProvider;
