import React, { useState } from "react";
import PocketBase from "pocketbase";

function Practice() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  console.log(data);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const pb = new PocketBase("http://127.0.0.1:8090");
    const record = await pb.collection("Donar").create(data);
    console.log(record);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Fullname"
          onChange={(e) => setData({ ...data, fullname: e.target.value })}
        />
        <input
          type="email"
          placeholder="Eamil"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="passrord"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Practice;
