import React from "react";

import { useStateContext } from "../contexts/ContextProvider";
const d = new Date();

const Footer = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-24">
      <p className="dark:text-gray-200 text-gray-700 text-sm text-center m-20">
        © {d.getFullYear()} All rights reserved by{" "}
        <span style={{ color: currentColor }}>~ Abu Shama || Squeak ~</span>
      </p>
    </div>
  );
};

export default Footer;
