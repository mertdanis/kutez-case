import React from "react";
import { useData } from "../store/MainContext";

function Button({ children, func }) {
  const { dispatch } = useData();

  return (
    <div
      onClick={() => {
        func;
      }}
      className="bg-orange-500 rounded-2xl text-white p-3"
    >
      {children}
    </div>
  );
}

export default Button;
