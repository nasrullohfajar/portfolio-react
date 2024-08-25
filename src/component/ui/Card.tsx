import React from "react";
import Icon from "../ui/Icon";

interface CardProps {
  img: string;
  title: string;
  description: string;
  icon: string[];
}

const Card = ({ title, description, img, icon }: CardProps) => {
  return (
    <div className="flex flex-col bg-black-900 w-1/2 rounded-xl p-10 gap-6">
      <div
        className="bg-black-800 h-72 w-[500px] mx-auto rounded-xl"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="px-2 gap-20">
        <h1 className="text-3xl text-left font-bold mb-4">{title}</h1>
        <p className="text-xl text-left mb-5">{description}</p>

        <div className="flex gap-2">
          {icon.map((img, idx) => (
            <Icon key={idx} img={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
