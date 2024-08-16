import React from "react";

const Button = ({ url, title, description }) => {
  return (
    <div className="">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="black">{title}</button>
      </a>
      <p className="w-50 flex flex-col center f4">{description}</p>
    </div>
  );
};

export default Button;
