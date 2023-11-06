import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Pending() {
  const [donar, donarLog] = useState(false);
  const [page, setPage] = useState(1);

  return (
    <div className="sm:relative bg-backgorund">
      <Header />
      <section className=" mb-10 flex relative">
        <div className=" flex  lg:py-14 flex-row lg:mr-40 mb-40 lg:mt-12 h-full  lg:px-16  lg:justify-between w-full">
          <img
            className="md:w-52 md:mt-28 lg:mt-0  lg:w-80"
            src="Telegram/Frame 2.svg"
            alt=""
          />

          <img
            className=" lg:w-80 md:w-52 md:mt-28 lg:mt-0 md:ml-80"
            src="Telegram/Angel1.svg"
            alt=""
          />
        </div>

        <div className="absolute w-full flex pt-10  flex-col text-center justify-center ">
          <h1 className=" lg:text-8xl md:mr-0 md:mt-14  tex font-bold md:text-6xl lg:mt-0  lg:mr-20">
            Your request is
          </h1>
          <h1 className=" lg:text-8xl md:mr-1 text-neutral-600 font-bold md:text-6xl lg:mr-24 mt-">
            Pending{" "}
          </h1>
          <span className=" lg:px-80 lg:w-full font-semibold md:mx-auto w-96 text-center  lg:mt-2  lg:mr-24">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            deserunt eveniet, dignissimos perspiciatis culpa veritatis harum,
          </span>
          <br />
          <button className=" mt-4  mx-auto w-36 rounded-sm h-10 text-white hover:bg-sky-700  bg-teal-950">
            Donate Now
          </button>{" "}
        </div>
      </section>

      <div className=" relative">
        <Footer />
      </div>
      <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
    </div>
  );
}

export default Pending;
