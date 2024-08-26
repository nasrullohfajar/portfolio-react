import React from "react";
import IconContact from "../ui/IconContact";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { RiDiscordLine } from "react-icons/ri";

const Icon = [
  {
    icon: <CiLinkedin size={16} />,
    link: "https://www.linkedin.com/in/nasrullohfajar/",
  },
  {
    icon: <RiDiscordLine size={16} />,
    link: "https://discord.com/users/913229865757573150",
  },
  {
    icon: <FaWhatsapp size={16} />,
    link: "https://wa.me/6282120092578",
  },
];

const Footer = () => {
  return (
    <div className="flex items-center justify-between mb-16">
      <div>
        <h3 className="text-left">Copyright &#169;2024 Nasrulloh Fajar</h3>
      </div>

      <div className="flex gap-x-2">
        {Icon.map((icon, idx) => (
          <IconContact key={idx} icon={icon.icon} link={icon.link} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
