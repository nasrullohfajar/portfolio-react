import React from "react";

interface IconContactProps {
  icon: any;
  link: string;
}

const IconContact = ({ icon, link }: IconContactProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-8 h-8 bg-black-900 outline outline-1 outline-black-700 rounded-md"
    >
      {icon}
    </a>
  );
};

export default IconContact;
