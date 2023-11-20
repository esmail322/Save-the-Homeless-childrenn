import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import BankSlip from "./BankSlip";
import { useTranslation } from "react-i18next";

function Bank() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [formerrors, setformerrors] = useState({});
  const [issubmit, setissubmit] = useState(false);
  const [page, setPage] = useState(1);

  const [Payment, setPayment] = useState({
    card_name: "",
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
      const response = await axios.post(
        "http://127.0.0.1:8080/payment",
        Payment
      );
      console.log(response);
    } catch (err) {
      console.log("something went wrong");
    }
    setformerrors(validate(Payment));
    setissubmit(true);
  };
  useEffect(() => {
    console.log(formerrors);
    if (Object.keys(formerrors).length === 0 && issubmit) {
      console.log(Payment);
    }
  }, [formerrors]);
  const validate = (values) => {
    const errors = {};
    const numberRegex = /^-?\d+(\.\d+)?$/;
    const regexdate = /^\d{4}-\d{2}-\d{2}$/;
    if (!values.card_name) {
      errors.card_name = "card name is required";
    }
    if (!values.card_number) {
      errors.card_number = "card number is required";
    } else if (values.card_number.length < 5) {
      errors.card_number = "card number must greater than 5 character";
    } else if (values.card_number.length > 15) {
      errors.card_number = "card number must be less than 15 character";
    }
    if (!values.expire_date) {
      errors.expire_date = "select a date";
    } else if (!regexdate.test(values.expire_date)) {
      errors.expire_date = "expire data must have date format";
    }
    if (!values.cvc) {
      errors.cvc = "cvc is required";
    } else if (!numberRegex.test(values.cvc)) {
      errors.cvc = "cvc must be number";
    } else if (values.cvc.length < 2) {
      errors.cvc = "cvc must be greater than 2 character";
    } else if (values.cvc.length > 7) {
      errors.cvc = "cvc must be less than 7 character";
    }
    return errors;
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
                <div className="flex justify-center ">
                  <input
                    type="text"
                    className="block pl-3   border border-black w-96  h-11 rounded mt-6"
                    name="card_name"
                    placeholder={`${t("cardname")}`}
                    onChange={(e) => Changepaymetnhandler(e)}
                  />{" "}
                </div>
                {formerrors.card_name && (
                  <span className="text-red-600">{formerrors.card_name}</span>
                )}
                <div className="flex justify-center ">
                  <input
                    type="text"
                    className="block pl-3  border border-b-greay border-black w-96 m-1 h-11 rounded "
                    name="card_number"
                    placeholder={`${t("cardnumber")}`}
                    onChange={(e) => Changepaymetnhandler(e)}
                  />{" "}
                </div>
                {formerrors.card_number && (
                  <span className="text-red-600">{formerrors.card_number}</span>
                )}
                <div className="flex justify-center ">
                  <select
                    className="  bg-secondary w-[62px] h-11 m-1 border border-black  rounded border-r-0  "
                    name="typeofmoney"
                    id=""
                  >
                    <option value="">USD</option>
                    <option value="">Afg</option>
                    <option value="">Eur</option>
                    <option value="">Pound</option>
                  </select>
                  <input
                    type="number"
                    className="block pl-3  border border-b-greay border-black w-[313px] m-1 ml-1 h-11 rounded "
                    name="amount"
                    placeholder={`${t("amount of pay")}`}
                    onChange={(e) => Changepaymetnhandler(e)}
                  />{" "}
                </div>
                {formerrors.amount && (
                  <span className="text-red-600">{formerrors.amount}</span>
                )}
                <div className=" flex justify-center space-x-2 mb-5">
                  <select
                    name="expire_date"
                    className="border border-black  w-24 rounded h-11"
                    id=""
                  >
                    <option value="">{t("expire")}</option>
                  </select>
                  {/* <select
                    className="border border-black w-32 h-11"
                    name=""
                    id=""
                  >
                    <option value="">{t("year")}</option>
                    <option value=""> </option>
                  </select> */}

                  <div>
                    <input
                      type="date"
                      name="expire_date"
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
                  {formerrors.expire_date && (
                    <span className="text-red-600">
                      {formerrors.expire_date}
                    </span>
                  )}
                  <input
                    type="number"
                    name="cvc"
                    className="  w-28 border border-black pl-3 font-semibold"
                    placeholder="CVC"
                    id=""
                    onChange={(e) => Changepaymetnhandler(e)}
                  />
                  {formerrors.cvc && (
                    <span className="text-red-600">{formerrors.cvc}</span>
                  )}
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    onClick={onSubmitchange}
                    className="  w-96  h-10 text-white hover:bg-sky-700  bg-teal-950  "
                  >
                    {t("pay")}
                  </button>{" "}
                </div>
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
