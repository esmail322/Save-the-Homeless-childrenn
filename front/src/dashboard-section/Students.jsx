import axios from 'axios';
import {useState, useEffect } from 'react';



function Students() {
    
const [data, setData] = useState();
useEffect(() => {
  const fetchData = async () => {
    const { data } = await axios.get("http://127.0.0.1:8080/student");

    setData(data);
  };
  fetchData();
}, []);
  return (
    <h1>
    {data}
    </h1>
  )
}

export default Students
