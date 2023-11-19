import { createContext, useState } from "react";

export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  let storedDonar = JSON.parse(localStorage.getItem("donar"));

  let donarValue = storedDonar.donar;
  console.log(donarValue);

  const student = localStorage.getItem("student");
  const teacher = localStorage.getItem("teacher");
  const [notification, setNotification] = useState([]);
  const [NDonar, setNDonar] = useState(donarValue > 0 ? donarValue : 0);
  const [NStudent, setNStudent] = useState(student);
  const [NTeacher, setNTeacher] = useState(teacher);

  const handelNDonar = () => {
    setNDonar(Number(NDonar) + 1);
    localStorage.setItem("donar", JSON.stringify({ donar: NDonar }));
  };
  const handelNStudent = () => {
    setNStudent(NStudent + 1);
  };
  const handelNTeacher = () => {
    setNTeacher(NTeacher + 1);
  };
  return (
    <NotificationContext.Provider
      value={{
        notification,
        setNotification,
        NTeacher,
        setNTeacher,
        NDonar,
        setNDonar,
        NStudent,
        setNStudent,
        handelNDonar,
        handelNStudent,
        handelNTeacher,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
export default NotificationProvider;
