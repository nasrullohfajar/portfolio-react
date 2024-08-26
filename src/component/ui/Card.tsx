import React from "react";
import Icon from "../ui/Icon";

interface CardProps {
  img: string;
  title: string;
  description: string;
  icon: string[];
  isHaveLink: boolean;
  link?: string;
}

const Card = ({
  title,
  description,
  img,
  icon,
  link,
  isHaveLink,
}: CardProps) => {
  return (
    <div className="flex flex-col bg-black-900 lg:w-1/2 rounded-xl p-4 lg:p-10 gap-6">
      <div
        className="bg-black-800 h-36 lg:h-60 w-full mx-auto rounded-xl"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="px-2 gap-20">
        <h1 className="text-2xl lg:text-3xl text-left font-bold mb-4">
          {title}
        </h1>
        <p className="text-md lg:text-xl text-left mb-5">{description}</p>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {icon.map((img, idx) => (
              <Icon key={idx} img={img} />
            ))}
          </div>
          {isHaveLink && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm lg:text-xl text-[#A685ED]"
            >
              Go To Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
