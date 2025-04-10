import React from "react";

function Button({ text, background }) {
  return (
    <button
      className={`${background} text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto ${
        background === "bg-indigo-600"
          ? "hover:bg-indigo-700"
          : "hover:bg-red-700"
      } `}
    >
      {text}
    </button>
  );
}

export default Button;
