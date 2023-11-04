import { Link } from "react-router-dom";
import Header from "../components/Header";
import React, { useState } from "react";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

function BankSlip() {
  const { t } = useTranslation();

  return (
    <div className="relative bg-backgorund">
      <Header />
      <section className="">
        <div className="flex relative flex-row items-stretch justify-center  pt-12 pb-2 ">
          <div className="  text-3xl font-bold text-true-gray-800">
            {t("bankslip")}
          </div>
          <br />

          <br />
        </div>
        <div className="flex font-semibold w-[490px] mx-auto justify-center mb-8">
          <p className=" ">{t("problem")}</p>
        </div>
        <div className=" flex  justify-center">
          <form action="" className=" w-1/3 ">
            <div className="w-full outline-dashed outline-1 h-48 relative  mb-8 ">
              <input
                type="file"
                placeholder="abbb"
                className=" absolute right-10 top-16 flex justify-center"
              />
            </div>
            <Link to="/pending">
              {" "}
              <button className="  w-full mb-12  h-10 text-white hover:bg-sky-700  bg-teal-950  ">
                {t("leo")}
              </button>
            </Link>
          </form>
        </div>
      </section>

      <div className=" relative">
        <Footer />
      </div>
      <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
    </div>
  );
}

export default BankSlip;
