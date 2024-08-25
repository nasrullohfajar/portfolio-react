import React from "react";

interface iconProps {
  img: string;
}

const Icon = ({ img }: iconProps) => {
  return (
    <div
      className="w-12 h-12 bg-black-900 outline outline-1 outline-black-700 rounded-full"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "50%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default Icon;
