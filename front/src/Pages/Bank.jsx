import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import BankSlip from "./BankSlip";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

function Bank() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [issubmit, setissubmit] = useState(false);
  const [page, setPage] = useState(1);

  const [searchParams] = useSearchParams();
  const stdValue = searchParams.get("std");

  const [Payment, setPayment] = useState({
    card_name: "sdfsf",
    card_number: "",
    amount: "",
    expire_date: "",
    cvc: "",
  });
  const Changepaymetnhandler = (e) => {
    setPayment({
      ...Payment,
      [e.target.name]: e.target.value,
    });
    console.log(Payment);
  };
  const [loading, setLoading] = useState();
  const onSubmitchange = async (e) => {
    e.preventDefault(e);

    console.log(Payment);
    try {
      const donarId = JSON.parse(localStorage.getItem("donar"));

      Payment.donarId = donarId;
      Payment.studentId = stdValue;

      const response = await axios.post(
        "http://127.0.0.1:8080/payment",
        Payment
      );
      if (response.data) {
        toast.success("Thanks! You Successfully Donated For A Student");
        navigate("/");
      }
    } catch (err) {
      console.log("something went wrong");
    }
    setissubmit(true);
  };

  return (
    <div className="relative bg-backgorund">
      <Header />
      <section className=" bg-backgorund mt-6">
        <div className="flex relative flex-row items-stretch justify-center mb-8 pt-12 pb-2 ">
          <div className="  text-3xl font-bold text-true-gray-800">
            <h1>{t("methode")}</h1>
          </div>
        </div>

        <div className=" w-4/4 mx-[60px] my-6  h-full border border-collapse border-black">
          <h1 className=" text-2xl pl-10 font-semibold  p-6">{t("local")}</h1>
          <p className="pl-8 pb-4 font-semibold md:w-[640px] lg:w-[460px]">
            {t("pleaseinfo")}
          </p>

          <div className=" mb-12 mx-8">
            <div
              className={`flex ${
                page == 1 && ".active"
              }  md:flex-wrap lg:flex-nowrap md:space-y-5 md:ml-28 lg:ml-0  lg:space-x-10  lg:pt-3  `}
            >
              <div
                onClick={() => setPage(1)}
                className={`
                h-40
                w-96 border-4 pt-2 mt-5 bg-accent-2 border-amber-50 rounded-xl ${
                  page == 1 && ""
                } bg-accent-2 rounded-sm`}
              >
                <Link to="/bankslip">
                  <h1 className=" text-xl font-semibold flex justify-center">
                    {t("azizibank")}
                  </h1>
                  <div className="mx-14 my-4">
                    <p className=""> {t("afghani")}</p>{" "}
                    <p className=""> {t("dolar")}</p>
                  </div>
                </Link>
              </div>

              <div
                onClick={() => setPage(2)}
                className={` h-40
                w-96 border-4 pt-3 bg-accent-2 border-amber-50 rounded-xl`}
              >
                <Link to="/bankslip">
                  <h1 className=" text-xl font-semibold flex justify-center">
                    {t("islamibank")}{" "}
                  </h1>
                  <div className="mx-14 my-4">
                    <p className=""> {t("afghani")}</p>{" "}
                    <p className=""> {t("dolar")}</p>
                  </div>
                </Link>
              </div>

              <div
                onClick={() => setPage(3)}
                className={`  h-40
                w-96 border-4 pt-3 bg-accent-2 border-amber-50 rounded-xl`}
              >
                <Link to="/bankslip">
                  <h1 className=" text-xl font-semibold flex justify-center">
                    {t("kabulbank")}
                  </h1>
                  <div className="mx-14 my-4">
                    <p className=""> {t("afghani")}</p>{" "}
                    <p className=""> {t("dolar")}</p>
                  </div>{" "}
                </Link>
              </div>
            </div>
            <div>
              <h1 className="my-8 text-xl font-semibold">{t("credit")}</h1>
              <div className="">
                <div
                  className={`flex  items-stretch   space-x-6 justify-center  pt-3  `}
                >
                  <div
                    onClick={() => setPage(1)}
                    className={`h-28
                w-28 border border-black ${
                  page == 1 && ""
                } flex items-center pl-6  `}
                  >
                    <img className="" src="./Telegram/credit.svg" alt="" />
                  </div>{" "}
                  <div
                    onClick={() => setPage(2)}
                    className={`h-28
                w-28 border border-black  ${
                  page == 1 && ""
                } flex items-center pl-6  `}
                  >
                    <img className="" src="./Telegram/apple.svg" alt="" />
                  </div>
                  <div
                    onClick={() => setPage(1)}
                    className={` h-28
                  w-28  border border-black relative  `}
                  >
                    <img
                      className=" absolute left-6 top-3"
                      src="./Telegram/paypal.svg"
                      alt=""
                    />

                    <p className=" absolute top-12 left-3 font-semibold">
                      Apple Pay
                    </p>
                  </div>
                </div>

                <form action="" onSubmit={onSubmitchange}>
                  <div className="flex justify-center ">
                    {/* <select
                      // name="card_name"
                      // value={Payment.card_name}
                      className="block pl-3   border border-black w-96  h-11 rounded mt-6"
                      required
                      placeholder={`${t("cardname")}`}
                      onChange={(e) => Changepaymetnhandler(e)}
                    >
                      <option selected disabled>
                        select a bank
                      </option>
                      <option value="Kabul bank">{t("kabul bank")}</option>
                      <option value="AZiZi Bank">{t("azizi bank")}</option>
                      <option value="D Afghanistan Bank">
                        {t("D afganistan bank")}
                      </option>
                    </select> */}

                    <select
                      className="block pl-3   border border-black w-96  h-11 rounded mt-6"
                      placeholder={`${t("cardname")}`}
                      onChange={(e) => Changepaymetnhandler(e)}
                      name="card_name"
                      required
                      value={Payment.card_name}
                    >
                      <option selected disabled>
                        Choose a bank
                      </option>
                      <option value="Kabul bank">{t("kabul bank")}</option>
                      <option value="AZiZi Bank">{t("azizi bank")}</option>
                      <option value="D Afghanistan Bank">
                        {t("D afganistan bank")}
                      </option>
                    </select>

                    {/* {" "} */}
                  </div>
                  <div className="flex justify-center ">
                    <input
                      type="number"
                      required
                      className="block pl-3  border border-b-greay border-black w-96 m-1 h-11 rounded "
                      name="card_number"
                      placeholder={`${t("cardnumber")}`}
                      onChange={(e) => Changepaymetnhandler(e)}
                    />{" "}
                  </div>
                  <div className="flex justify-center ">
                    <select
                      className="  bg-secondary w-[62px] h-11 m-1 border border-black  rounded border-r-0  "
                      name="typeofmoney"
                      id=""
                      required
                    >
                      <option value="">USD</option>
                      <option value="">Afg</option>
                      <option value="">Eur</option>
                      <option value="">Pound</option>
                    </select>
                    <input
                      type="number"
                      required
                      className="block pl-3  border border-b-greay border-black w-[313px] m-1 ml-1 h-11 rounded "
                      name="amount"
                      placeholder={`${t("amount of pay")}`}
                      onChange={(e) => Changepaymetnhandler(e)}
                    />{" "}
                  </div>
                  <div className=" flex justify-center space-x-2 mb-5">
                    <select
                      name="expire_date"
                      className="border border-black  w-24 rounded h-11"
                      id=""
                    >
                      <option value="">{t("expire")}</option>
                    </select>
                    <div>
                      <input
                        type="date"
                        name="expire_date"
                        required
                        className="  w-29 h-11 border border-black pl-4 font-semibold"
                        placeholder="Date"
                        id=""
                        onChange={(e) => Changepaymetnhandler(e)}
                      />
                      <svg
                        className="absolute left-3 top-3 h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 12h14M12 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="number"
                      name="cvc"
                      required
                      className="  w-28 border border-black pl-3 font-semibold"
                      placeholder="CVC"
                      id=""
                      onChange={(e) => Changepaymetnhandler(e)}
                    />
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="  w-96  h-10 text-white hover:bg-sky-700  bg-teal-950  "
                    >
                      {t("pay")}
                    </button>{" "}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className=" relative">
        <Footer />
      </div>
      <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
    </div>
  );
}

export default Bank;
