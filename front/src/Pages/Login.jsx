import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import axios from "axios";

function Login() {
  const [donar, donarLog] = useState(false);
  const [page, setPage] = useState(0);
  const [formerrors, setformerrors] = useState({});
  const [issubmit, setissubmit] = useState(false);
  const { t } = useTranslation();
  // Teacher login function
  const [Teacher, setTeacher] = useState({
    email: "",
    password: "",
  });

  // handle submit
  const handleSubmitteacher = async (event) => {
    event.preventDefault(event);
    setformerrors(validate(Teacher));
    setissubmit(true);

    console.log("clicked");

    try {
      const result = await axios.post("http://localhost:8080/login/", Teacher);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  // student login Function
  const [Student, setStudent] = useState({
    email: "",
    password: "",
  });

  // handle submit
  const handleSubmitstudent = async (event) => {
    event.preventDefault(event);
    setformerrors(validate(Student));
    setissubmit(true);
    console.log("clicked");

    try {
      const result = await axios.post("http://localhost:8080/login/", Student);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  // donar login function
  const [Donar, setDonar] = useState({
    email: "",
    password: "",
  });

  // handle submit
  const handleSubmit = async (event) => {
    event.preventDefault(event);
    setformerrors(validate(Donar));
    setissubmit(true);
    console.log("clicked");

    try {
      const result = await axios.post("http://localhost:8080/login/", Donar);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(formerrors);
    if (Object.keys(formerrors).length === 0 && issubmit) {
      console.log(donarField);
    }
  }, [formerrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@+]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "invalid email format";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (values.password.length < 4) {
      errors.password = "Passwrod must be greater than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password connot exceed more than 10 characters";
    }
    return errors;
  };
  return (
    <div className="relative bg-backgorund">
      <Header />
      <section className="">
        <div>
          <div className=" flex  items-stretch justify-center  pt-12 pb-2  text-3xl font-bold text-true-gray-800">
            {t("login")}
          </div>
          <br />
        </div>

        <div
          className={`flex $
          
           items-stretch justify-center  space-x-12  pt-3 mb-12  `}
        >
          <div
            onClick={() => setPage(1)}
            className={`h-28
               w-24 border border-black ${page == 1 && "bg-accent-2"} `}
          >
            <svg
              className=" h-14 ml-2 mt-0"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 118.19"
            >
              <path
                className="cls-1"
                d="M103.91,75.47,79.13,88.28,77.39,85,95.1,75.86l.23-.11A3.49,3.49,0,0,0,96.78,71l-.84-1.58.06,0-4.07-7.52L76.12,32.11l3.73-1.94,24.06,45.3Zm7.18,8.66h10.74a1,1,0,0,1,1,1.05v26.06a1.07,1.07,0,0,1-1,1.06H111.09a1.07,1.07,0,0,1-1.06-1.06V85.18a1.06,1.06,0,0,1,1.06-1.05ZM106.59,110V86.47H96c-4.49.81-9,3.24-13.47,6.07H74.31c-3.73.22-5.68,4-2.06,6.48,2.89,2.11,6.69,2,10.59,1.64,2.69-.13,2.81,3.48,0,3.49-1,.08-2-.15-3-.15-4.87,0-8.87-.94-11.32-4.78l-1.24-2.88L55.09,90.28c-6.12-2-10.47,4.39-6,8.84a160.53,160.53,0,0,0,27.24,16c6.75,4.11,13.51,4,20.25,0l10-5.15ZM14.49,9.5a1.9,1.9,0,0,1,.31-1.18C15.45,7.45,17,7.7,18,7.7a14.49,14.49,0,0,0,3.08-.24A35.78,35.78,0,0,0,25.48,6c3.73-1.34,7.08-2.33,10.64-3.62,8-2.87,5.6-3.49,13.81,0A89.24,89.24,0,0,1,60.24,7.55a6.45,6.45,0,0,1,1.31.94,6.19,6.19,0,0,1,1,1.32c3.14,4.57,5.83,9.2,8.41,13.83.87,1.63,1.23,3.17.64,4.14-2.43,4-6.8-1.69-11.5-5.46-2-1.59-4.67-3-7-4.61-3-1.24-4.36-2.42-7.55-3.09-4.89-.42-5.29,6.6,1.14,6.86C51,21.65,60,25.61,62.56,29.25c2.36,3.4,1.06,6.74-3.74,6.62l-4-.75c-6.39-1.2-6.21-1.44-12.86-.2-3.57.66-7.31,1.35-11,.66-2.24-.41-3.42-1.31-5.42-2.84a17.81,17.81,0,0,0-3.18-2.22,12,12,0,0,0-2.92-1.24c-1.53-.37-3.69.15-4.58-1.17a2.4,2.4,0,0,1-.37-1.31V9.5ZM1,5.16H11a1,1,0,0,1,1,1V30.44a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1V6.15a1,1,0,0,1,1-1ZM69,50.75a6.79,6.79,0,1,1-6.78,6.78A6.79,6.79,0,0,1,69,50.75Zm3.12-19L94,73,67.6,86.66,43.89,42.07l8.33-4.31.29.06,5.75,1.07a2.63,2.63,0,0,0,.49,0,10.47,10.47,0,0,0,3.12-.35L54.31,42.5a4.4,4.4,0,0,1-1.88,5.93L67.34,76a4.4,4.4,0,0,1,5.93,1.88l10.44-5.41a4.39,4.39,0,0,1,1.88-5.92L70.69,39h0a4.4,4.4,0,0,1-5.93-1.89l-.14.08a6,6,0,0,0,1.45-1.79,6.37,6.37,0,0,0,.71-2.79,7,7,0,0,0,0-1c2,1,3.75,1.18,5.35.15Z"
              />
            </svg>
            <p className="pl-3 font-semibold">{t("loginasdonar")}</p>
          </div>

          <div
            onClick={() => setPage(2)}
            className={`h-28
            w-24 border border-1 border-black ${page == 2 && "bg-accent-2"} `}
          >
            <svg
              className=" h-12 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 512 318.97"
            >
              <path
                fill-rule="nonzero"
                d="M165.11 35.37c-3.87 0-6.99-3.12-6.99-6.99s3.12-6.99 6.99-6.99h148.37V6.99c0-3.87 3.12-6.99 6.99-6.99s6.99 3.12 6.99 6.99v14.4h176.8c3.87 0 6.99 3.12 6.99 6.99s-3.12 6.99-6.99 6.99h-16.09v200.88h16.84c3.87 0 6.99 3.12 6.99 6.99s-3.12 6.99-6.99 6.99H324.7v7.1c.38.25.63.5.87.75l42.8 40.68c2.74 2.62 2.87 7.11.25 9.85-2.62 2.75-7.11 2.87-9.86.25l-33.93-32.31v35.43c0 3.87-3.12 6.99-6.99 6.99s-6.99-3.12-6.99-6.99v-36.8l-35.43 33.68c-2.75 2.62-7.24 2.62-9.86-.25-2.62-2.74-2.62-7.23.25-9.85l42.8-40.68c.62-.62 1.49-1.12 2.24-1.5v-6.35H163.06c-3.87 0-6.99-3.12-6.99-6.99s3.12-6.99 6.99-6.99h311.13V35.37H165.11zM301.7 206.69a6.4 6.4 0 0 1-6.4-6.4c0-3.53 2.87-6.39 6.4-6.39h136.37c3.53 0 6.39 2.86 6.39 6.39 0 3.54-2.86 6.4-6.39 6.4H301.7zm9.66-42.99c-3.53 0-6.39-2.86-6.39-6.39 0-3.54 2.86-6.4 6.39-6.4h126.71c3.53 0 6.39 2.86 6.39 6.4 0 3.53-2.86 6.39-6.39 6.39H311.36zm-20.78-42.99c-3.53 0-6.39-2.86-6.39-6.39s2.86-6.4 6.39-6.4h147.49c3.53 0 6.39 2.87 6.39 6.4 0 3.53-2.86 6.39-6.39 6.39H290.58zm-65.77-42.99c-3.53 0-6.39-2.86-6.39-6.39s2.86-6.4 6.39-6.4h213.26c3.53 0 6.39 2.87 6.39 6.4 0 3.53-2.86 6.39-6.39 6.39H224.81zm-4.62 84.52 48.49-50.84c2.85-3 7.59-3.11 10.58-.27 3 2.85 3.11 7.59.27 10.58l-45.68 47.9c3.75 4.54 5.53 10.65 4.34 16.88-2.12 11.09-12.83 18.36-23.91 16.24l-50.71-9.75c-5.06-.88-9.8-3.66-13.05-8.15l-16.45-22.73-.04 2.05v-1.48l-1.31 75.84 1.99 11.36H49.66l1.76-10.52-1.56-75.24v.04l-.26-12.9-.09.1c-8.7 8.71-9.07 29.47-10.04 42.08l-2.21 28.88c-.51 6.59-1.06 10.31-6.22 14.77-7.5 6.46-20.13 7.79-26.8-.38-4.31-5.26-4.52-13.66-4.08-21.33 2.22-38.37 6.73-96.12 49.7-115.12v.48c18.22-7.24 39.69-4.09 59.29-4.09 9.33 0 17.53 1.37 24.81 4.16 4.65 1.07 8.94 3.76 11.96 7.93l32.96 45.57 41.31 7.94zM91.77 3.13c23.89 0 43.25 19.36 43.25 43.25 0 23.88-19.36 43.24-43.25 43.24S48.52 70.26 48.52 46.38c0-23.89 19.36-43.25 43.25-43.25z"
              />
            </svg>
            <p className="pl-2 font-semibold">{t("loginasstudent")}</p>
          </div>
          <div
            onClick={() => setPage(3)}
            className={`h-28
               w-24 border border-black ${page == 3 && "bg-accent-2"} `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 512 481.85"
              className="w-14 ml-4 h-14"
            >
              <path d="m152.09 126.91.7-25.78 85.43 24.67c15.4 3.35 30.88 3.35 46.28 0l81.6-24.93v28.74c0 15.58.45 27.18-1.7 42.64-.95 6.9-2.55 13.59-5.39 18.13.77.35 1.5.79 2.18 1.31 8.81 6.66 8.22 24 6.23 33.73-1.16 5.65-3.16 11.13-6.03 15.52-3.28 5-7.69 8.64-13.29 9.74-1.32 5.27-3 10.51-4.99 15.65-5.7 14.67-14.06 28.54-24.58 40.25 3.65 5.49 7.52 11.05 11.45 16.36 27.1 23.37 104.56 28.21 133.52 44.36 9.23 5.15 17.57 11.7 24.28 20.56 16.73 22.09 18.16 40.71 24.22 67.79-1.48 15.78-10.43 24.85-28.03 26.2H28.03C10.43 480.5 1.48 471.43 0 455.65c6.06-27.08 7.49-45.7 24.22-67.79 6.71-8.86 15.05-15.41 24.28-20.56 27.5-15.34 98.71-20.47 129.04-40.95 4.74-6.12 9.64-13.32 14.02-19.76l.47-.68c-7.81-8.49-13.93-17.26-20.26-26.82-2.85-4.26-6.33-9.47-8.35-14.95-1.86-5.04-2.68-10.01-3.17-12.99l-.02-.69c-5.16-1.31-9.25-4.81-12.33-9.52-2.85-4.35-4.85-9.76-6.01-15.36-2.09-10.05-2.62-28.11 6.84-34.33 2.52-1.66 5.51-2.29 8.96-1.65 1.04.22-2.52-7.39-3.09-9.51-5.23-19.36-3.03-33.74-2.51-53.18zm184.24 50.71c-25.56 8.75-60.51 12.15-75.21 12.85-14.62.7-61.77-4.88-88.26-14.44v54.6l-.06 7.63c-.17 16.65-.23 22.01 11.41 39.37l3.96 5.67c10.91 14.92 22.54 25.49 34.3 32.24 12.76 7.32 25.73 10.16 38.16 9.2 12.45-.96 24.43-5.73 35.19-13.6 16.13-11.79 34.04-36.71 38.65-56.44 1.65-7.11 1.86-14.6 1.86-25.96v-51.12zM309.4 315.67c-13.6 12.07-30.33 20.75-48.69 22.14-23 1.73-43.26-8.18-59.85-23.14-5.42 6.81-11.06 14.67-16.11 20.99 25.82 60.42 128.06 62.14 142.55 3.81-6.21-7.29-12.26-15.67-17.9-23.8zm39.46-107.18v29.36c4.79-2.54 7.37-10.63 7.82-19.17.22-2 .61-18.26-2.98-17.61-2.73.5-4.29 5.14-4.84 7.42zm-188.44 29.36v-29.36c-.56-2.29-2.1-6.92-4.84-7.42-3.59-.65-3.2 15.61-2.98 17.61.86 7.85 3.46 15.92 7.82 19.17zM116.77 63.7v63.51h-2.01c-1.37 0-2.49 1.13-2.49 2.49v17.07a2.51 2.51 0 0 0 2.49 2.49h2.01v5.98c-2.55.48-4.5 2.74-4.5 5.41v.01c0 3.02 2.49 5.51 5.51 5.51h9.87c3.02 0 5.51-2.48 5.51-5.51v-.01c0-2.68-1.95-4.93-4.5-5.41v-5.98h2.01c1.36 0 2.49-1.12 2.49-2.49V129.7c0-1.37-1.12-2.49-2.49-2.49h-2.01V67.39l103.96 32.34c18.83 4.47 37.65 4.77 56.48 0l114.74-34.25 10.37-3.1c12.93-5.28 9.7-17.69-2.33-20.54L282.1 3.09c-13.38-3.81-26.76-4.42-40.15 0L114.51 41.37c-13.85 3.37-16.6 16.2-.47 21.48l2.73.85z" />
            </svg>
            <p className="pl-2 font-semibold">{t("loginasteacher")}</p>
          </div>
        </div>
        <div className="flex justify-center pt-2 mb-16  ">
          {page == 1 && (
            <div action="" className=" w-96 bg-backgorund">
              <input
                type="string"
                className="block border bg-backgorund border-black w-full p-3 rounded mb-3"
                name="email"
                placeholder={`${t("email1")}`}
                value={Donar.email}
                onChange={(text) =>
                  setDonar({ ...Donar, email: text.target.value })
                }
              />
              {formerrors.email && (
                <span className="text-red-600">{formerrors.email}</span>
              )}
              <input
                type="string"
                className="block border bg-backgorund border-black w-full p-3 rounded mb-1"
                name="password"
                value={Donar.password}
                onChange={(text) =>
                  setDonar({ ...Donar, password: text.target.value })
                }
                placeholder={`${t("password1")}`}
              />
              {formerrors.password && (
                <span className="text-red-600">{formerrors.password}</span>
              )}
              <button
                type="submit"
                className="w-full text-left font-semibold pt-2 pb-6 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"
              >
                {`${t("password2")}`}
              </button>

              <button
                type="submit"
                onClick={handleSubmit}
                className="  w-96  h-10 text-white  hover:bg-sky-700 rounded-md  bg-primary  "
              >
                {" "}
                {`${t("Sign")}`}
              </button>
            </div>
          )}
          {page == 2 && (
            <div action="" className=" w-96 bg-backgorund">
              <input
                type="text"
                className="block border bg-backgorund border-black w-full p-3 rounded mb-3"
                name="email"
                value={Student.email}
                onChange={(text) =>
                  setStudent({ ...Student, email: text.target.value })
                }
                placeholder={`${t("fullname")}`}
              />
              {formerrors.email && (
                <span className="text-red-600">{formerrors.email}</span>
              )}
              <input
                type="text"
                className="block border bg-backgorund border-black w-full p-3 rounded mb-1"
                name="password"
                value={Student.password}
                onChange={(text) =>
                  setStudent({ ...Student, password: text.target.value })
                }
                placeholder={`${t("password1")}`}
              />
              {formerrors.password && (
                <span className="text-red-600">{formerrors.password}</span>
              )}
              <button
                type="submit"
                className="w-full text-left font-semibold pt-2 pb-6 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"
              >
                {`${t("password2")}`}
              </button>

              <button
                type="submit"
                onClick={handleSubmitstudent}
                className="  w-96  h-10 text-white  hover:bg-sky-700 rounded-md  bg-primary  "
              >
                {" "}
                {`${t("Sign")}`}
              </button>
            </div>
          )}
          {page == 3 && (
            <div action="" className=" w-96 bg-backgorund">
              <input
                type="text"
                className="block border bg-backgorund border-black w-full p-3 rounded mb-3"
                name="email"
                value={Teacher.email}
                onChange={(text) =>
                  setTeacher({ ...Teacher, email: text.target.value })
                }
                placeholder={`${t("email1")}`}
              />
              {formerrors.email && (
                <span className="text-red-600">{formerrors.email}</span>
              )}
              <input
                type="text"
                className="block border bg-backgorund border-black w-full p-3 rounded mb-1"
                name="password"
                value={Teacher.password}
                onChange={(text) =>
                  setTeacher({ ...Teacher, password: text.target.value })
                }
                placeholder={`${t("password1")}`}
              />
              {formerrors.password && (
                <span className="text-red-600">{formerrors.password}</span>
              )}
              <button
                type="submit"
                className="w-full text-left font-semibold pt-2 pb-6 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"
              >
                {`${t("password2")}`}
              </button>

              <button
                type="submit"
                onClick={handleSubmitteacher}
                className="  w-96  h-10 text-white  hover:bg-sky-700 rounded-md  bg-primary  "
              >
                {" "}
                {`${t("Sign")}`}
              </button>
            </div>
          )}
        </div>
      </section>
      <Footer />
      <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
    </div>
  );
}

export default Login;
