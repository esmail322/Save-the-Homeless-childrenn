import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className=" relative">
      <div className="h-110 bg-cyan-700 w-full md:pl-2  pt-6 grid lg:grid-cols-5 md:grid-cols-3 h-full  sticky bottom-0 left-0    text-yellow-50 ">
        <div className="text-yellow-50 pl-[60px]  ">
          <p className="text-yellow-50  text-0.5xl">
            SAVE THE <br /> HOMELESS
          </p>{" "}
          <br />
          <span className="text-yellow-50 ">{t("bright")}</span>
        </div>
        <div className="pl-20">
          <span className="text-xl ">{t("about")}</span>
          <br />
          <div className="pt-4">
            <a href="">{t("whowe")}</a>
            <br />
            <a href="">{t("contact")}</a>
            <br />
            <a href="">{t("career")}</a>
            <br />
          </div>
        </div>
        <div>
          <span className="text-xl">{t("featured")}</span>
          <br />
          <div className="pt-4 ml-0 pl-0">
            <a href="">{t("save")}</a>
            <br />
            <a href="">{t("orphanage")}</a>
            <br />
            <a href="">{t("appeal")}</a>
            <br />
          </div>
        </div>
        <div>
          <div className="md:pl-14 md:pt-6 lg:pl-0 lg:pt-0">
            <span className="text-xl">{t("involved")}</span>
            <br />
            <div className="pt-4 ml-0 pl-0">
              <a href="">{t("Be_A_Volunteer")}</a>
              <br />
              <a href="">{t("represent")}</a>
              <br />
              <a href="">{t("join")}</a>
              <br />
            </div>
          </div>
        </div>
        <div className="ml-6 pl-4">
          <div className="h-44 w-44 bg-slate-50 mt-2 pt-4 pl-7 md:justify-end  pr-4 mb-4 pb-8">
            <p className="text-black mt-4 font-bold text-xs">
              {t("together")}{" "}
            </p>
            <br />
            <Link to="/bank">
              <button className=" mt-2  w-[120px]  h-8 text-black rounded-sm hover:bg-sky-700   bg-accent-2">
                {t("donate")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
