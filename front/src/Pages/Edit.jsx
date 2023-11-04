import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const clicktobackhandler = () => {
    navigate("/");
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
      navigate("/donar");
    } catch (err) {
      console.log("something went wrong");
    }
  };
  return (
    <div>
      <h1>Edit Form</h1>
      <form action="" className=" w-96 bg-backgorund">
        <input
          type="text"
          className="block border bg-backgorund border-black w-full p-3 rounded mb-1"
          name="fullName"
          placeholder="Full Name"
          value={donarField.fullName}
          onChange={(e) => changedonarFieldhandler(e)}
        />
        <input
          type="email"
          className="block border bg-backgorund border-black w-full p-3 rounded mb-1"
          name="email"
          placeholder="Email"
          value={donarField.email}
          onChange={(e) => changedonarFieldhandler(e)}
        />
        <input
          type="password"
          className="block border bg-backgorund border-black w-full p-3 rounded mb-1"
          name="password"
          placeholder="Password"
          value={donarField.password}
          onChange={(e) => changedonarFieldhandler}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => onSubmitchange(e)}
        >
          Update
        </button>
      </form>

      <div>
        <button onClick={clicktobackhandler}>back to home</button>
      </div>
    </div>
  );
};
export default Edit;
