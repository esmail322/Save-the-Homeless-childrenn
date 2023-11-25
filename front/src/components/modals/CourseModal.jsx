import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  //   file: yup
  //     .mixed()
  //     .required("File is required")
  //     .test(
  //       "fileSize",
  //       "File size is required/large",
  //       (value) => value && value[0]?.size <= 1048576
  //     ),
});

const CourseModal = ({ show, toggleModal, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [image, setImageFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", image);

    if (!image) {
      return toast.error("Please select an image!");
    }

    try {
      const response = await axios.post(
        `http://127.0.0.1:8080/teacher/course`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      reset();
      onClose();
      setImageFile(null);
      toast.success("Course has been created successfully");

      console.log(response.data);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <>
      <div
        id="modal"
        className={`${
          !show ? "hidden" : ""
        } fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex items-center justify-center`}
      >
        <div className="absolute bg-white p-8 w-full max-w-md rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-bold mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                {...register("title")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.title && (
                <p className="text-red-500 text-xs italic">
                  {errors.title.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                {...register("description")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.description && (
                <p className="text-red-500 text-xs italic">
                  {errors.description.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="file"
                className="block text-gray-700 font-bold mb-2"
              >
                File
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={(e) => handleFileChange(e)}
                // {...register("image")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.file && (
                <p className="text-red-500 text-xs italic">
                  {errors.file.message}
                </p>
              )}
            </div>
            <div className="float-right">
              <button
                type="button"
                onClick={toggleModal}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
              >
                Close
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {isSubmitting ? "Saving" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CourseModal;
