import { Fragment, useContext, useEffect, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";

import {
  AcademicCapIcon,
  CogIcon,
  CreditCardIcon,
  HomeIcon,
  MenuAlt1Icon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  XIcon,
  UserIcon,
} from "@heroicons/react/outline";
import {
  CashIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import { useNavigate, useParams } from "react-router-dom";
// import Sidebar from "../dashboard-section/Sidebar";
import axios from "axios";
import { NotificationContext } from "../context/NotificationContext";
import { getHostname } from "../utils";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function StudentProfile() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  //   useEffect(() => {
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       return navigate("/login");
  //     } else {
  //       setLoading(false);
  //     }
  //   }, []);
  const params = useParams();
  const [student, setStudent] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getStudent();
        setStudent(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  async function getStudent() {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8080/student/${params.id}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const {
    handelRemoveNotification,
    NDonar,
    NStudent,
    NTeacher,
    NNotification,
  } = useContext(NotificationContext);

  //student
  console.log(student);
  return (
    <>
      <div className="min-h-full mt-10">
        <div className="flex flex-col  flex-1">
          <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="flex-1 px-4 sm:px-6  lg:max-w-6xl lg:mx-auto lg:px-8">
              <div className="ml-4 flex items-center justify-between ">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3   relative">
                  <div className="flex gap-10 justify-center items-center">
                    <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={getHostname(student?.image)}
                        alt=""
                      />
                      <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                        <span className="sr-only">Open user menu for </span>
                        {student.fullName}
                      </span>
                      <ChevronDownIcon
                        className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                        aria-hidden="true"
                        s
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            onClick={logout}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Logout
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <Menu as="div" className="ml-3  relative">
                  <div className="flex gap-10 justify-center items-center">
                    <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
                      <div className="relative p-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                          />
                        </svg>
                        <span className="absolute top-1 right-1.5 h-5 text-xs w-5 bg-red-500 text-white rounded-full pb-1  text-center">
                          {student?.payment ? 1 : 0}
                        </span>
                      </div>
                      <ChevronDownIcon
                        className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                        aria-hidden="true"
                        s
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right right-0 absolute max-w-fit  mt-2  rounded-md shadow-lg py-1 bg-red-300 ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <div className="flex capitalize flex-col w-full font-bold text-lg justify-between gap-5">
                              <div className="flex justify-between gap-24 w-full">
                                <span> NAME:</span>
                                <span> {student?.donar?.fullName}</span>
                              </div>
                              <div className="flex justify-between gap-24 w-full">
                                <span> AMOUNT:</span>
                                <span> {student?.payment}AF </span>
                              </div>
                            </div>
                          </a>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <span className="text-center bg-slate-800 text-white  p-1 cursor-pointer w-full mx-auto flex justify-center">
                            Who Donate You
                          </span>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <main className="flex-1 pb-8">
            {/* Page header */}
            <div className="">
              <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                <div className="py-6 lg:border-t lg:border-gray-200">
                  {/* Profile */}
                  <div className="text-center flex flex-col  md:flex-row border-2 rounded-xl items-center   ">
                    <img
                      className="  w-96 h-1/2 border-4  rounded-xl "
                      src={getHostname(student?.image)}
                      alt=""
                    />
                    <div className="m-8 text-center">
                      <h1 className=" text-3xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                        Wellcome, {student.fullName}
                      </h1>
                      <span>{student.email}</span>
                      <p className="my-8 leading-8 font-semibold">
                        {student?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
