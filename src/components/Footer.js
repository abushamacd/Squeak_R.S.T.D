/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaInternetExplorer } from "react-icons/fa";

import { useStateContext } from "../contexts/ContextProvider";
const d = new Date();

const socialLinks = [
  {
    link: "https://www.imshama.com/",
    icon: <FaInternetExplorer />,
  },
  {
    link: "https://www.facebook.com/imshama.com.bd/",
    icon: <BsFacebook />,
  },
  {
    link: "https://github.com/ASSiddik01",
    icon: <BsGithub />,
  },
  {
    link: "https://www.linkedin.com/in/imshama",
    icon: <BsLinkedin />,
  },
];

const Footer = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-12 md:flex text-center items-center justify-between mx-16 mb-6">
      <p className="dark:text-gray-200 text-gray-700 text-sm text-center ">
        © {d.getFullYear()} All rights reserved by{" "}
        <span style={{ color: currentColor }}>~ Abu_Shama || Squeak ~</span>
      </p>
      <div className="flex gap-4 justify-center ">
        {socialLinks.map((links, index) => {
          return (
            <span
              key={index}
              style={{ color: currentColor }}
              className="text-xl"
            >
              <a target="_blank" href={links.link}>
                {links.icon}
              </a>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
