import React from "react";
import { cn } from "../../helpers/common";

function Button2({ title, className }) {
  return (
    <button className={cn("py-1 border px-10 text-lg rounded-sm capitalize", className)}>
      {title}
    </button>
  );
}

export default Button2;
