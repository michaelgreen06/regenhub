import React from "react";

const Button = ({ url, title, description }) => {
  return (
    <div className="">
      <button className="black">{title}</button>

      <p className="w-50 flex flex-col center f4">{description}</p>
    </div>
  );
};

export default Button;
