import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getHostname } from "../utils";

function Children() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getStudents();
        setStudents(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  async function getStudents() {
    try {
      const response = await axios.get("http://127.0.0.1:8080/student");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return (
    <div className="">
      <h1 className="p-5 text-center text-4xl">Student List</h1>
      <ul>
        <div className="grid grid-cols-1  mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-10  ">
          {students.map((student) => (
            <div className=" border w-72  h-fit border-slate-800 mx-auto rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-72 h-56"
                src={getHostname(student?.image)}
                alt="Math"
              />
              <div className="px-6 py-4">
                <h1 className="font-bold text-xl mb-2">{student.fullName}</h1>
                <h1 className="font-bold text-sm opacity-70 mb-2">
                  {student.email}
                </h1>
                <p className="text-gray-900 text-base">{student.description}</p>
              </div>
              <Link to={`/bank?std=${student._id}`}>
                <div className="px-6 py-4">
                  <button
                    disabled={student.donar === undefined ? false : true}
                    className={
                      student.donar === undefined
                        ? `bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`
                        : "bg-gray-500 opacity-50 text-white  font-bold py-2 px-4 rounded"
                    }
                  >
                    {student.donar === undefined ? "Donate Now" : "Donated"}
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default Children;

// function Children() {
//   return (
//     <div className="flex lg:flex-wrap lg:mb-16 lg:ml-24 ">
//       <div
//         id="Come"
//         className=" flex   lg:ml-20 md:mt-36 lg:mt-14    lg:first-letter:  "
//       >
//         <div className=" w-72 h-96 lg:bg-accent-2 flex  lg:mr-20 md:mr-4">
//           <div className="  bg-accent-2  md:relative  lg:flex md:flex md:justify-center lg:justify-center">
//             <img
//               className="w-72 h-96  brightness-[0.4] "
//               src="Telegram/poorbike.jpg"
//               alt=""
//             />

//             <h1 className="text-4xl    mt-24 md:mt-4  text-white   absolute">
//               Rashida
//             </h1>
//             <p className=" absolute top-10   font-semibold px-[50px]   pt-16 md:pt-9 lg:items-center font-sans text-center text-white">
//               {" "}
//               she is a poor children from a poor family and he lives in kabul
//               and he has 3 brothers and 2 siters and he need for your help
//             </p>
//             <Link
//               to="/bank"
//               className="absolute  top-44 mt-24  w-32 bg-accent-2 pt-0.5 rounded-sm lg:h-8 border border-collapse pl-3 hover:bg-white"
//             >
//               Donate Now
//             </Link>
//           </div>
//         </div>
//       </div>{" "}
//       <div id="Come" className=" flex  md:mt-36 lg:mt-14    lg:first-letter:  ">
//         <div className=" w-72 h-96 lg:bg-accent-2 flex  lg:mr-20 md:mr-4">
//           <div className="  bg-accent-2  md:relative  lg:flex md:flex md:justify-center lg:justify-center">
//             <img
//               className="w-72 h-96  4 brightness-[0.4]"
//               src="Telegram/poorboard.jpg"
//               alt=""
//             />

//             <h1 className="text-4xl    mt-24 md:mt-4  text-white   absolute">
//               Zubair
//             </h1>
//             <p className=" absolute top-10  font-semibold px-[50px]   pt-16 md:pt-9 lg:items-center font-sans text-center text-white">
//               {" "}
//               He is a talented boy from Mazar Sharif and has 4 sisters and 4
//               brothers he is so smart boy he always want study but their
//               economic condition do not let him
//             </p>
//             <Link
//               to="/bank"
//               className="absolute  top-44 mt-24  w-32 bg-accent-2 pt-0.5 rounded-sm lg:h-8 border border-collapse pl-3 hover:bg-white"
//             >
//               Donate Now
//             </Link>
//           </div>
//         </div>
//       </div>{" "}
//       <div
//         id="Come"
//         className=" lg:flex  md:flex md:mt-36 lg:mt-14 flex   lg:first-letter:  "
//       >
//         <div className=" w-72 h-96 lg:bg-accent-2  lg:mr-20 md:mr-4">
//           <div className="  bg-accent-2  md:relative  lg:flex md:flex md:justify-center lg:justify-center">
//             <img
//               className="w-72 h-96  4 brightness-[0.4]"
//               src="Telegram/poorhair.jpg"
//               alt=""
//             />

//             <h1 className="text-4xl    mt-24 md:mt-4  text-white   absolute">
//               Jmaila
//             </h1>
//             <p className=" absolute top-10  font-semibold px-[50px]   pt-16 md:pt-9 lg:items-center font-sans text-center text-white">
//               She is from Logarr and he their family is so poor and can not
//               fullfill their requirement so she can not study
//             </p>
//             <Link
//               to="/bank"
//               className="absolute  top-44 mt-24  w-32 bg-accent-2 pt-0.5 rounded-sm lg:h-8 border border-collapse pl-3 hover:bg-white"
//             >
//               Donate Now
//             </Link>
//           </div>
//         </div>
//       </div>{" "}
//       <div
//         id="Come"
//         className=" lg:flex  md:flex ml-20  md:mt-36 lg:mt-14   lg:first-letter:  "
//       >
//         <div className=" w-72 h-96 lg:bg-accent-2  lg:mr-20 md:mr-4">
//           <div className="  bg-accent-2  md:relative  lg:flex md:flex md:justify-center lg:justify-center">
//             <img
//               className="w-72 h-96  4 brightness-[0.4]"
//               src="Telegram/pooreyes.jpg"
//               alt=""
//             />

//             <h1 className="text-4xl    mt-24 md:mt-4  text-white   absolute">
//               Karima
//             </h1>
//             <p className=" absolute top-10  font-semibold px-[50px]   pt-16 md:pt-9 lg:items-center font-sans text-center text-white">
//               {" "}
//               She is from Logarr and he their family is so poor and can not
//               fullfill their requirement so she can not study
//             </p>
//             <Link
//               to="/bank"
//               className="absolute  top-44 mt-24  w-32 bg-accent-2 pt-0.5 rounded-sm lg:h-8 border border-collapse pl-3 hover:bg-white"
//             >
//               Doante Now
//             </Link>
//           </div>
//         </div>
//       </div>{" "}
//       <div
//         id="Come"
//         className=" lg:flex  md:flex   md:mt-36 lg:mt-14   lg:first-letter:  "
//       >
//         <div className=" w-72 h-96 lg:bg-accent-2  lg:mr-20 md:mr-4">
//           <div className="  bg-accent-2  md:relative  lg:flex md:flex md:justify-center lg:justify-center">
//             <img
//               className="w-72 h-96  4 brightness-[0.4]"
//               src="Telegram/poorgs.jpg"
//               alt=""
//             />

//             <h1 className="text-4xl    mt-24 md:mt-4  text-white   absolute">
//               Safia and Shamsia
//             </h1>
//             <p className=" absolute top-10  font-semibold px-[50px]   pt-16 md:pt-9 lg:items-center font-sans text-center text-white">
//               {" "}
//               They are both sister and they ahve a poor family the situation of
//               their life is so hard and it is that they fullfill three timebread
//             </p>
//             <Link
//               to="/bank"
//               className="absolute  top-44 mt-24  w-32 bg-accent-2 pt-0.5 rounded-sm lg:h-8 border border-collapse pl-3 hover:bg-white"
//             >
//               Donate Now
//             </Link>
//           </div>
//         </div>
//       </div>{" "}
//       <div
//         id="Come"
//         className=" lg:flex  md:flex   md:mt-36 lg:mt-14   lg:first-letter:  "
//       >
//         <div className=" w-72 h-96 lg:bg-accent-2  lg:mr-20 md:mr-4">
//           <div className="  bg-accent-2  md:relative  lg:flex md:flex md:justify-center lg:justify-center">
//             <img
//               className="w-72 h-96  4 brightness-[0.4]"
//               src="Telegram/poorgirl.jpg"
//               alt=""
//             />

//             <h1 className="text-4xl    mt-24 md:mt-4  text-white   absolute">
//               Sara
//             </h1>
//             <p className=" absolute top-10  font-semibold px-[50px]   pt-16 md:pt-9 lg:items-center font-sans text-center text-white">
//               {" "}
//               Sara is in a poor family the situation of their life is so hard
//               and it is hard that they fullfill three time bread
//             </p>
//             <Link
//               to="/bank"
//               className="absolute  top-44 mt-24  w-32 bg-accent-2 pt-0.5 rounded-sm lg:h-8 border border-collapse pl-3 hover:bg-white"
//             >
//               Doante Now
//             </Link>
//           </div>
//         </div>
//       </div>{" "}
//       <div
//         id="Come"
//         className=" lg:flex  md:flex ml-20  md:mt-36 lg:mt-14   lg:first-letter:  "
//       >
//         <div className=" w-72 h-96 lg:bg-accent-2  lg:mr-20 md:mr-4">
//           <div className="  bg-accent-2  md:relative  lg:flex md:flex md:justify-center lg:justify-center">
//             <img
//               className="w-72 h-96  4 brightness-[0.4]"
//               src="Telegram/poorbread.jpg"
//               alt=""
//             />

//             <h1 className="text-4xl    mt-24 md:mt-4  text-white   absolute">
//               Ahmad
//             </h1>
//             <p className=" absolute top-10  font-semibold px-[50px]   pt-16 md:pt-9 lg:items-center font-sans text-center text-white">
//               {" "}
//               He is a talented boy from Mazar Sharif and has 4 sisters and 4
//               brothers he is so smart boy he always want study but their
//               economic condition do not let him
//             </p>
//             <Link
//               to="/bank"
//               className="absolute  top-44 mt-24  w-32 bg-accent-2 pt-0.5 rounded-sm lg:h-8 border border-collapse pl-3 hover:bg-white"
//             >
//               Donate Now
//             </Link>
//           </div>
//         </div>
//       </div>{" "}
//       <div
//         id="Come"
//         className=" lg:flex  md:flex   md:mt-36 lg:mt-14   lg:first-letter:  "
//       >
//         <div className=" w-72 h-96 lg:bg-accent-2  lg:mr-20 md:mr-4">
//           <div className="  bg-accent-2  md:relative  lg:flex md:flex md:justify-center lg:justify-center">
//             <img
//               className="w-72 h-96  4 brightness-[0.4]"
//               src="Telegram/poorpic.jpg"
//               alt=""
//             />

//             <h1 className="text-4xl    mt-24 md:mt-4  text-white   absolute">
//               Mehdi
//             </h1>
//             <p className=" absolute top-10  font-semibold px-[50px]   pt-16 md:pt-9 lg:items-center font-sans text-center text-white">
//               {" "}
//               he is so smart boy but he cant not show his skills cause of
//               economic problem hid father died and he worked on city and bring
//               bread to his family
//             </p>
//             <Link
//               to="/bank"
//               className="absolute  top-44 mt-24  w-32 bg-accent-2 pt-0.5 rounded-sm lg:h-8 border border-collapse pl-3 hover:bg-white"
//             >
//               Donate Now{" "}
//             </Link>
//           </div>
//         </div>
//       </div>{" "}
//       <div
//         id="Come"
//         className=" lg:flex  md:flex   md:mt-36 lg:mt-14   lg:first-letter:  "
//       >
//         <div className=" w-72 h-96 lg:bg-accent-2  lg:mr-20 md:mr-4">
//           <div className="  bg-accent-2  md:relative  lg:flex md:flex md:justify-center lg:justify-center">
//             <img
//               className="w-72 h-96  4 brightness-[0.4]"
//               src="Telegram/orphan.jpeg"
//               alt=""
//             />

//             <h1 className="text-4xl    mt-24 md:mt-4  text-white   absolute">
//               Farid
//             </h1>
//             <p className=" absolute top-10 font-semibold px-[50px]   pt-16 md:pt-9 lg:items-center font-sans text-center text-white">
//               {" "}
//               Farid is from Jalal Abad and he has a five members family he and
//               his brother do hard work to find money for requirements of their
//               family
//             </p>
//             <Link
//               to="/bank"
//               className="absolute  top-44 mt-24  w-32 bg-accent-2 pt-0.5 rounded-sm lg:h-8 border border-collapse pl-3 hover:bg-white"
//             >
//               Donate Now{" "}
//             </Link>
//           </div>
//         </div>
//       </div>{" "}
//     </div>
//   );
// }

// export default Children;
