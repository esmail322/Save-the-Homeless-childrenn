import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const clicktobackhandler = () => {
    navigate("/dashboard/donar");
  };

  const [donarField, setDonarField] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    fetchData();
  }, [id]);
  const fetchData = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8080/donar/" + id);
      // console.log(result.data.results);
      setDonarField(result.data);
    } catch (err) {
      console.log("something went wrong");
    }
  };
  const changedonarFieldhandler = (e) => {
    setDonarField({
      ...donarField,
      [e.target.name]: e.target.value,
    });
    console.log(donarField);
  };
  const onSubmitchange = async (e) => {
    e.preventDefault();
    try {
      await axios.patch("http://127.0.0.1:8080/donar/" + id, donarField);
      navigate("/dashboard/donar");
    } catch (err) {
      console.log("something went wrong");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 shadow-2xl  p-10 rounded-md border-2">
        <h1 className="text-3xl font-semibold mb-8 text-center">
          Edit A Donar
        </h1>
        <form action="">
          <input
            type="text"
            className="block border bg-gray-100 border-black w-full p-3 rounded mb-4"
            name="fullName"
            placeholder="Full Name"
            value={donarField.fullName}
            onChange={(e) => changedonarFieldhandler(e)}
          />
          <input
            type="email"
            className="block border bg-gray-100 border-black w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            value={donarField.email}
            onChange={(e) => changedonarFieldhandler(e)}
          />
          <input
            type="password"
            className="block border bg-gray-100 border-black w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            value={donarField.password}
            onChange={(e) => changedonarFieldhandler(e)}
          />
          <button
            type="submit"
            className="block border bg-gray-100 border-black w-[50%] mx-auto hover:bg-black hover:text-white p-3 rounded mb-4"
            onClick={(e) => onSubmitchange(e)}
          >
            Update
          </button>
        </form>
        <button
          className="btn-secondary hover:border-b-2 hover:border-blue-600 mx-auto flex mt-4"
          onClick={clicktobackhandler}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};
export default Edit;
