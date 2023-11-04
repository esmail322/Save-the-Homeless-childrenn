import { Link } from "react-router-dom";
import Header from "../components/Header";
import React, { useState } from "react";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

function CreditCardD() {
  const { t } = useTranslation();

  const [donar, donarLog] = useState(false);
  const [page, setPage] = useState(1);

  return (
    <div className="relative bg-backgorund">
      <Header />

      <section className="">
        <div className="flex relative flex-row items-stretch justify-center  pt-12 pb-2 ">
          <div className="  text-3xl font-bold text-true-gray-80 0">
            {t("credentail")}
          </div>
          <br />

          <br />
        </div>
        <div className="flex w-[490px] mb-8 mx-auto font-semibold">
          <p className=" ">{t("problem")}</p>
        </div>
        <div className=" flex  justify-center">
          <form action="" className=" w-1/3 ">
            <select
              className=" opacity-60  h-10 w-full my-1 block rounded-sm border border-black"
              name=""
              id=""
            >
              <option value="">{t("kabul")}</option>
              <option value="">{t("mazar")}</option>
              <option value="">{t("herat")}</option>
              <option value="">{t("kunduz")}</option>
            </select>
            <input
              type="text"
              className="block border border-black w-full p-2 opacity-100   rounded mb-2"
              name="email"
              placeholder={`${t("cardname")}`}
            />
            <input
              type="text"
              className="block border border-black w-full p-2 rounded mb-2"
              name="email"
              placeholder={`${t("cardnumber")}`}
            />
            <div className="w-full outline-dashed outline-1 h-48 relative  mb-8 ">
              <input
                type="file"
                placeholder="abbb"
                className=" absolute right-10 top-16 flex justify-center"
              />
            </div>
            <Link
              to="/pending"
              className="w-full  h-10 text-white hover:bg-sky-700  bg-teal-950 "
            >
              <button className="  w-full  mb-12 h-10 text-white hover:bg-sky-700  bg-teal-950  ">
                {t("Sign")}
              </button>{" "}
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

export default CreditCardD;
