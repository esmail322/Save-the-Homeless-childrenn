import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import BankSlip from "./BankSlip";

function Blog() {
  const navigate = useNavigate();

  const [donar, donarLog] = useState(false);
  const [page, setPage] = useState(1);

  return (
    <div className="relative bg-backgorund">
      <Header />
      <section className=" bg-backgorund mt-6 ">
        <div className="flex relative flex-row items-stretch justify-center mb-8 pt-12 pb-2 ">
          <div className="  text-3xl font-bold text-true-gray-800">
            <h1>Payment Methode</h1>
          </div>
        </div>

        <div className=" w-4/4 mx-[60px] my-6  h-full border border-collapse border-black">
          <img
            src="Telegram/chiled2.jpg"
            className="w-[1270px] p-6 h-[530px] "
            alt=""
          />{" "}
          <div className="absolute  right-[140px] pt-20">
            <p className="lg:text-[20px] font-bold  md:mt-14 lg:mt-0 ">
              Top Article
            </p>
          </div>
          <div className="ml-[25px] mt-[48px]">
            <p className="font-semibold">Aguest 23 2023</p>
            <p className="text-2xl top-14  flex flex-row mb-[28px] mt-[30px] font-bold ">
              10 Ways to Give To Charity Without Your <br /> Budget
            </p>
            <div className="lg:w-[760px] lg:h-full pb-10 ">
              <p>
                A poor child refers to a young individual who is living in
                poverty, facing significant economic hardships and limited
                access to essential resources. These children often grow up in
                disadvantaged circumstances, lacking access to proper nutrition,
                healthcare, education, and other basic needs. Poverty can have a
                profound impact on a child's well-being, development, and future
                opportunities. It can hinder their physical and cognitive
                growth, limit their educational attainment, and perpetuate a
                cycle of poverty across generations. The plight of poor children
                highlights the urgent need for social and economic support
                systems to address poverty, promote equal opportunities, and
                ensure the well-being and future prospects of all children,
                regardless of their socioeconomic background. A poor child
                refers to a young individual who is living in poverty, facing
                significant economic hardships and limited access to essential
                resources. These children often grow up in disadvantaged
                circumstances, lacking access to proper nutrition, healthcare,
                education, and other basic needs. Poverty can have a profound
                impact on a child's well-being, development, and future
                opportunities. It can hinder their physical and cognitive
                growth, limit their educational attainment, and perpetuate a
                cycle of poverty across generations. The plight of poor children
                highlights the urgent need for social and economic support
                systems to address poverty, promote equal opportunities, and
                ensure the well-being and future prospects of all children,
                regardless of their socioeconomic background.A poor child refers
                to a young individual who is living in poverty, facing
                significant economic hardships and limited access to essential
                resources. These children often grow up in disadvantaged
                circumstances, lacking access to proper nutrition, healthcare,
                education, and other basic needs. Poverty can have a profound
                impact on a child's well-being, development, and future
                opportunities. It can hinder their physical and cognitive
                growth, limit their educational attainment, and perpetuate a
                cycle of poverty across generations. The plight of poor children
                highlights the urgent need for social and economic support
                systems to address poverty, promote equal opportunities, and
                ensure the well-being and future prospects of all children,
                regardless of their socioeconomic background.A poor child refers
                to a young individual who is living in poverty, facing
                significant economic hardships and limited access to essential
                resources. These children often grow up in disadvantaged
                circumstances, lacking access to proper nutrition, healthcare,
                education, and other basic needs. Poverty can have a profound
                impact on a child's well-being, development, and future
                opportunities. It can hinder their physical and cognitive
                growth, limit their educational attainment, and perpetuate a
                cycle of poverty across generations. The plight of poor children
                highlights the urgent need for social and economic support
                systems to address poverty, promote equal opportunities, and
                ensure the well-being and future prospects of all children,
                regardless of their socioeconomic background. A poor child
                refers to a young individual who is living in poverty, facing
                significant economic hardships and limited access to essential
                resources. These children often grow up in disadvantaged
                circumstances, lacking access to proper nutrition, healthcare,
                education, and other basic needs. Poverty can have a profound
                impact on a child's well-being, development, and future
                opportunities. It can hinder their physical and cognitive
                growth, limit their educational attainment, and perpetuate a
                cycle of poverty across generations. The plight of poor children
                highlights the urgent need for social and economic support
                systems to address poverty, promote equal opportunities, and
                ensure the well-being and future prospects of all children,
                regardless of their socioeconomic background.A poor child refers
                to a young individual who is living in poverty, facing
                significant economic hardships and limited access to essential
                resources. These children often grow up in disadvantaged
                regardless of their socioeconomic background.
              </p>
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

export default Blog;
