import React from "react";

const Button = ({ text, color, disabled, onClick, isTrue }) => {
  console.log(isTrue);

  return (
    <button
      className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 ${
        isTrue ? "cursor-pointer" : ""
      } px-4 rounded`}
      onClick={onClick}
      isTrue={isTrue}
    >
      {text}
    </button>
  );
};

export default Button;
