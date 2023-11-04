import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Doantate from "./Doantate";
import { useTranslation } from "react-i18next";

function Header() {
  const navigate = useNavigate();
  const [Here, there] = useState(0);

  const { i18n } = useTranslation();

  const [language, setLanguage] = React.useState(() => {
    if (window.localStorage.getItem("appLanguage")) {
      return window.localStorage.getItem("appLanguage");
    } else {
      window.localStorage.setItem("appLanguage", "en");
      return "en";
    }
  });

  console.log("====================================");
  console.log(language);
  console.log("====================================");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    window.localStorage.setItem("appLanguage", lng);
    setLanguage(lng);
  };
  useEffect(() => {
    if (i18n.language !== "en") {
      document.documentElement.style.setProperty("--direction", "rtl");
      document.documentElement.style.setProperty(
        "--setting-margin",
        "0 -120px 0 0"
      );
      document.documentElement.style.setProperty(
        "--setting-border-radius",
        "4rem 0 0 4rem"
      );
      document.documentElement.style.setProperty(
        "--rich-text-margin",
        "1rem auto 1rem 1rem"
      );
    } else {
      document.documentElement.style.setProperty("--direction", "ltr");
      document.documentElement.style.setProperty(
        "--setting-margin",
        "0 0 0 -120px"
      );
      document.documentElement.style.setProperty(
        "--setting-border-radius",
        "0 4rem 4rem 0"
      );
      document.documentElement.style.setProperty(
        "--rich-text-margin",
        "1rem 1rem 1rem auto"
      );
    }
  }, [language]);

  const { t } = useTranslation();

  return (
    <header>
      <nav className=" border-black border-b px-4 lg:px-6 py-2.5 ">
        <div className="sm:flex  sm:flex-wrap sm:justify-between sm:items-center font-semibold sm:mx-auto sm:max-w-screen-xl">
          <Link to="#" className="sm:flex sm:items-center ">
            <Link
              to="/"
              className="text-black sm:ml-10  sm:w-40  focus:ring-gray-300 font-semibold  sm:rounded-lg sm:text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              SAVE THE HOMELESS
            </Link>
          </Link>
          <div className="sm:flex sm:items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 dark:text-block  hover:bg-backgorund font-medium sm:rounded-lg text-sm sm:px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2"
            >
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                name="long"
                className="   bg-backgorund"
                id="long"
              >
                <option value="en">{t("English")}</option>
                <option value="fa">{t("Dari")}</option>
              </select>
            </Link>
            <Link
              to="/signup"
              className="text-black hover:bg-accent-2  sm:font-medium sm:rounded-lg sm:text-sm  lg:px-5 sm:py-2  sm:mr-2 "
            >
              {t("Sign")}
            </Link>{" "}
            <Link
              to="/login"
              className="text-black hover:bg-accent-2  sm:font-medium sm:rounded-lg sm:text-sm sm:px-4 sm:lg:px-5 py-2  mr-2 "
            >
              {t("Login")}
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-black font-semibold hover:bg-accent-2   lg:bg-transparent  lg:p-0 "
                  aria-current="page"
                >
                  {t("Home")}
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pr-4 pl-3 text-black font-semibold rounded hover:bg-accent-2   lg:bg-transparent  lg:p-0"
                >
                  {t("About_Us")}
                </Link>
              </li>
              <li>
                <Link
                  to="#here"
                  className="block py-2 pr-4 pl-3 text-black font-semibold rounded hover:bg-accent-2   lg:bg-transparent  lg:p-0"
                >
                  {t("Our_Work")}
                </Link>
              </li>{" "}
              <li>
                <Link
                  to="/bloglist"
                  className="block py-2 pr-4 pl-3 text-black font-semibold rounded hover:bg-accent-2  lg:bg-transparent  lg:p-0"
                >
                  {t("Bolog")}
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <p
                    to="#"
                    className="block py-2 pr-4 pl-3 text-black font-semibold rounded hover:bg-accent-2   lg:bg-transparent  lg:p-0"
                  >
                    {t("Be_A_Volunteer")}
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
