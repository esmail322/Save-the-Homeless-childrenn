import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";

const ViewTeacher = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const navigates = useNavigate();
  useEffect(
    () => {
      fetchData();
    },
    { id }
  );
  const fetchData = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8080/teacher/" + id);
      setData(result.data);
    } catch (err) {
      console.log("Something went wrong");
    }
  };
  const clickTobackhandler = () => {
    navigates("/dashboard/volunteers");
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Teacher Details</h1>
            <table className="min-w-full w-full text-left border border-black  rounded-sm text-sm font-light">
              <thead className="border-b  font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    S No.
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Full name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Contact_number
                  </th>
                  <th scope="col" className="px-6 py-4">
                    address
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Province
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Zip_code
                  </th>
                  <th scope="col" className="px-6 py-4">
                    typeOfteach
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Country
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {data._id}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {data.fullName}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {data.email}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {data.contact_number}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {data.address}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {data.province}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {data.Zip_code}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {data.typeOfteach}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {data.Country}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <div>
          <button
            className="mb-14 w-52  h-10 text-white hover:bg-sky-700 rounded top-40 mt-1  absolute right-[379px] mr-28 bg-teal-950"
            onClick={clickTobackhandler}
          >
            back to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewTeacher;
