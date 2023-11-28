import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Editstudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const clickTobackhandler = () => {
    navigate("/dashboard/students");
  };
  const { t } = useTranslation();
  const [studentField, setstudentField] = useState({
    fullName: "",
    email: "",
    password: "",
    contact_number: "",
    address: "",
    province: "",
    Zip_code: "",
    Country: "",
    typeOfassist: "",
  });

  useEffect(() => {
    fetchData();
  }, [id]);
  const fetchData = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8080/student/" + id);
      // console.log(result.data.results);
      setstudentField(result.data);
    } catch (err) {
      console.log("something went wrong");
    }
  };
  const handleStudentFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch("http://127.0.0.1:8080/student/" + id, studentField);
      navigate("/dashboard/students");
    } catch (err) {
      console.log("something went wrong");
    }
  };
  return (
    <div className="flex justify-center items-center flex-col mt-10 ">
      <h1 className="  text-4xl font-semibold  my-10">Edit A Student</h1>
      <form
        action=""
        className="flex flex-col gap-1 p-10 shadow-2xl rounded-md border"
      >
        <input
          type="text"
          // {...register("firstName")}
          className="block border bg-backgorund border-black w-full p-3 rounded mb-1"
          name="fullName"
          value={studentField.fullName}
          placeholder={`${t("fullname")}`}
          onChange={(event) =>
            setstudentField({
              ...studentField,
              fullName: event.target.value,
            })
          }
        />
        {/* {errors.firstName && (
                <span className="text-red-600">{errors.firstName.message}</span>
              )} */}
        <input
          type="text"
          // {...register("emails")}
          className="block border bg-backgorund border-black   w-full p-3 rounded mb-1"
          name="email"
          value={studentField.email}
          onChange={(event) =>
            setstudentField({
              ...studentField,
              email: event.target.value,
            })
          }
          placeholder={`${t("email1")}`}
        />
        {/* {errors.emails && (
                <span className="text-red-600">{errors.emails.message}</span>
              )} */}
        <input
          type="password"
          // {...register("password")}
          className="block border border-black bg-backgorund w-full p-3 rounded mb-1"
          name="password"
          placeholder={`${t("password1")}`}
          value={studentField.password}
          onChange={(event) =>
            setstudentField({
              ...studentField,
              password: event.target.value,
            })
          }
        />
        {/* {errors.password && (
                <span className="text-red-600">
                  {errors.confirmPassword.message}
                </span>
              )} */}
        <input
          type="password"
          // {...register("confirmPassword")}
          className="block border  border-black bg-backgorund w-full p-3  rounded "
          name="confirm_password"
          placeholder={`${t("password12")}`}
        />
        <div className="flex flex-row   ">
          <select
            className="  bg-secondary w-20 h-12 border border-black  border-r-0  "
            name=""
            id=""
          >
            <option value="">93</option>
            <option value="">93</option>
            <option value="">93</option>
            <option value="">93</option>
          </select>
          <input
            type="number"
            className="block border border-black bg-backgorund border-l-0 w-full p-3  h-12 mb-1"
            name="contact_number"
            placeholder={`${t("contact")}`}
            value={studentField.contact_number}
            onChange={(event) =>
              setstudentField({
                ...studentField,
                contact_number: event.target.value,
              })
            }
          />
        </div>
        <input
          type="text"
          className=" border  bg-backgorund w-full font-semibold border-black  p-3  rounded mb-1"
          name="address"
          // {...register("address")}
          placeholder={`${t("address")}`}
          value={studentField.address}
          onChange={(event) =>
            setstudentField({
              ...studentField,
              address: event.target.value,
            })
          }
        />
        <div className="grid grid-cols-2 gap-1 ">
          <select
            className=" bg-backgorund p-3  h-12 block rounded  border border-black"
            name="province"
            value={studentField.province}
            id=""
            onChange={(event) =>
              setstudentField({
                ...studentField,
                province: event.target.value,
              })
            }
          >
            <option value="Kabul">{t("kabul")}</option>
            <option value="Mazar_shrif">{t("mazar")}</option>
            <option value="Kunduz">{t("kunduz")}</option>
            <option value="Herat">{t("herat")}</option>
          </select>
          <input
            type="password"
            className="block border h-12 bg-backgorund border-black  p-3  rounded mb-1"
            name="Zip_code"
            placeholder={t("zibcode")}
            value={studentField.Zip_code}
            onChange={(event) =>
              setstudentField({
                ...studentField,
                Zip_code: event.target.value,
              })
            }
          />
        </div>{" "}
        <div className="flex justify-center flex-row mb-1 ">
          <select
            className=" bg-secondary w-96 h-12 p-3 block rounded border border-black"
            name="Country"
            id=""
            value={studentField.Country}
            onChange={(event) =>
              setstudentField({
                ...studentField,
                Country: event.target.value,
              })
            }
          >
            <option value="Afghanistan">{t("afghanistan")}</option>
            <option value="Iran">{t("iran")}</option>
            <option value="Turkey">{t("turkey")}</option>
            <option value="Pakistan">{t("pakistan")}</option>
          </select>
        </div>
        <div className="flex justify-center flex-row mb-4 ">
          <select
            className=" bg-backgorund p-3  w-96 h-12 block rounded border border-black"
            name="typeOfassist"
            id=""
            value={studentField.typeOfassist}
            onChange={(event) =>
              setstudentField({
                ...studentField,
                typeOfassist: event.target.value,
              })
            }
          >
            <option value="">{t("assisted")}</option>
            <option value="education">{t("education")}</option>
            <option value="Help">{t("help")}</option>
          </select>
        </div>
        <button
          type="submit"
          onClick={handleStudentFormSubmit}
          className="  w-1/2 p-3 flex text-center justify-center mx-auto text-white hover:bg-sky-700 rounded-sm bg-teal-950  "
        >
          {t("update")}
        </button>
      </form>

      <button
        className="  my-3 hover:border-b-2  hover:border-sky-700 rounded  "
        onClick={clickTobackhandler}
      >
        back to home
      </button>
    </div>
  );
};
export default Editstudent;
