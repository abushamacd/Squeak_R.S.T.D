/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaFileInvoiceDollar,
  FaHome,
  FaLock,
  FaMoneyBill,
  FaUser,
} from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { RiPagesLine, RiContactsBookLine } from "react-icons/ri";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";
import moment from "moment";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <MdMessage />,
  },
  {
    path: "/pages",
    name: "Pages",
    icon: <RiPagesLine />,
    subRoutes: [
      {
        path: "/pages/users",
        name: "Users ",
        icon: <FaUser />,
      },
      {
        path: "/pages/contacts",
        name: "Contacts ",
        icon: <RiContactsBookLine />,
      },
      {
        path: "/pages/invoices",
        name: "Invoices ",
        icon: <FaFileInvoiceDollar />,
      },
    ],
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },
  {
    path: "/fileManager",
    name: "File Manager",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/orders",
    name: "Order",
    icon: <BsCartCheck />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },
];

const Sidebar = ({ children }) => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "170px",
      margin: "0px 20px 0px 10px",
      padding: "3px 10px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const userAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "260px",
      margin: "0px 20px 0px 10px",
      padding: "10px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white  text-md m-2 bg-light-gray";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  const date = moment().format("dddd, Do MMM YYYY");
  let time = moment().format("h:mm:ss A");

  const [cTime, setCTime] = useState("");
  const updateTime = () => {
    time = moment().format("h:mm:ss A");
    setCTime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <AnimatePresence>
      <motion.div
        animate={{
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10"
      >
        {activeMenu && (
          <>
            <div className="flex justify-between items-center">
              <NavLink
                to="/"
                onClick={handleCloseSideBar}
                style={{ color: currentColor }}
                className="items-center gap-3 ml-10 mt-4 flex text-xl font-extrabold tracking-tight dark:text-dark text-slate-900"
              >
                <SiShopware />{" "}
                <motion.span
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className={`logo text-2xl whitespace-nowrap`}
                >
                  Squeak N.S.T.D.
                </motion.span>
              </NavLink>
              <TooltipComponent content="Menu" position="BottomCenter">
                <button
                  type="button"
                  onClick={() => setActiveMenu(!activeMenu)}
                  style={{ color: currentColor }}
                  className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                >
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>
            </div>

            <div className="mt-6">
              {screenSize <= 1050 ? (
                <div
                  className={`search flex items-center justify-center my-3 p-3 h-7`}
                >
                  <AnimatePresence>
                    {activeMenu && (
                      <motion.input
                        className={`rounded-md border-0`}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        variants={inputAnimation}
                        type="text"
                        placeholder="Search"
                      />
                    )}
                  </AnimatePresence>
                  <div className="search_icon">
                    <BiSearch className={``} />
                  </div>
                </div>
              ) : (
                ""
              )}
              {screenSize <= 500 ? (
                <div className="text-sm flex  flex-col text-center">
                  <span> {date} </span>
                  <span> {cTime} </span>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="mt-6">
              <AnimatePresence>
                {activeMenu && (
                  <motion.div
                    variants={userAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="user_section text-center border p-2 m-2 rounded-md"
                  >
                    <img
                      className={`user_logo block mx-auto rounded-full`}
                      alt="User photo"
                      width={100}
                      height={100}
                      src="https://i.ibb.co/MgsTCcv/avater.jpg"
                    />
                    <h1
                      style={{ color: currentColor }}
                      className="user_name text-lg whitespace-nowrap"
                    >
                      Abu Shama
                    </h1>
                    <p className="role text-sm whitespace-nowrap">
                      Super Admin
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="mt-10 ">
              {routes.map((route, index) => {
                if (route.subRoutes) {
                  return (
                    <Dropdown
                      handleCloseSideBar={handleCloseSideBar}
                      key={index}
                      setActiveMenu={setActiveMenu}
                      route={route}
                      showAnimation={showAnimation}
                      activeMenu={activeMenu}
                    />
                  );
                }
                return (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    onClick={handleCloseSideBar}
                    to={route.path}
                    key={index}
                  >
                    {route.icon}
                    {/* </AnimatePresence> */}
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className={`link_text whitespace-nowrap`}
                    >
                      <h4 className="capitalize">{route.name}</h4>
                    </motion.div>
                    {/* </AnimatePresence> */}
                  </NavLink>
                );
              })}
            </div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Sidebar;