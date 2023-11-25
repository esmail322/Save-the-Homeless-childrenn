const CourseDetails = ({ show, onClose, details }) => {
  return (
    <>
      <div
        id="modal"
        className={`${
          !show ? "hidden" : ""
        } fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex items-center justify-center`}
      >
        <div
          className={`absolute bg-white px-6 w-full max-w-7xl rounded-lg ${
            details?.description?.length > 100 ? "h-3/5 overflow-y-scroll" : ""
          }`}
        >
          <h2 className="text-center font-bold text-4xl my-3 mb-4">
            {details?.title}
          </h2>
          <p className="text-justify">{details?.description}</p>

          <button
            type="button"
            onClick={onClose}
            className="bg-red-500 mb-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2 float-right"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
