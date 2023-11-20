import { createContext, useState } from "react";

export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  // const donar = localStorage.getItem("donar");
  let storedDonar = JSON.parse(localStorage.getItem("donar"));
  let donarValue = storedDonar?.donar;

  // const student = localStorage.getItem("student");
  let storedStudent = JSON.parse(localStorage.getItem("student"));
  let studentValue = storedStudent?.donar;

  // const teacher = localStorage.getItem("teacher");
  let storedTeacher = JSON.parse(localStorage.getItem("teacher"));
  let TeacherValue = storedTeacher?.donar;

  const [NDonar, setNDonar] = useState(donarValue > 0 ? donarValue : 0);
  const [NStudent, setNStudent] = useState(studentValue > 0 ? studentValue : 0);
  const [NTeacher, setNTeacher] = useState(TeacherValue > 0 ? TeacherValue : 0);
  const [NNotification, setNNotification] = useState(
    NDonar + NTeacher + NStudent
  );

  const handelNDonar = () => {
    setNDonar(Number(NDonar) + 1);
    localStorage.setItem("donar", JSON.stringify({ donar: NDonar }));
  };
  const handelNStudent = () => {
    console.log("student");
    setNStudent(Number(NStudent) + 1);
    localStorage.setItem("student", JSON.stringify({ student: NStudent }));
  };
  const handelNTeacher = () => {
    setNTeacher(Number(NTeacher) + 1);
    localStorage.setItem("teacher", JSON.stringify({ teacher: NTeacher }));
  };
  const handelRemoveNotification = () => {
    console.log("hello");
    localStorage.removeItem("donar");
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
