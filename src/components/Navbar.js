import React, { useState } from "react";
import { BsChatDots, BsArrowLeftCircle } from "react-icons/bs";
import {
  MdKeyboardArrowDown,
  MdOutlineNotificationsActive,
} from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Chat from "./Chat";
import Notification from "./Notification";
import UserProfile from "./UserProfile";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { BiSearch } from "react-icons/bi";
import moment from "moment";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    isClicked,
    handleClick,
    setScreenSize,
    screenSize,
  } = useStateContext();

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

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
      <div className="flex justify-between items-center p-2 md:ml-2 md:mr-6 relative">
        <div className="flex justify-between items-center">
          <motion.div
            animate={
              activeMenu
                ? {
                    rotate: 0,
                  }
                : { rotate: 180 }
            }
          >
            <NavButton
              title="Menu"
              customFunc={handleActiveMenu}
              color={currentColor}
              icon={<BsArrowLeftCircle />}
            />
          </motion.div>
          {screenSize >= 1050 ? (
            <div className={`search flex items-center my-3 p-3 h-1`}>
              <motion.input
                className={`rounded-md border-0`}
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={inputAnimation}
                type="text"
                placeholder="Search"
              />
              <div className="search_icon">
                <BiSearch style={{ color: currentColor }} />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        {screenSize >= 500 ? (
          <div className={`text-sm flex  flex-col text-center`}>
            <span> {date} </span>
            <span> {cTime} </span>
          </div>
        ) : (
          ""
        )}

        <div className="flex">
          <NavButton
            title="Chat"
            dotColor={`#fe5d49`}
            customFunc={() => handleClick("chat")}
            color={currentColor}
            icon={<BsChatDots />}
          />
          <NavButton
            title="Notification"
            dotColor="#ff0545"
            customFunc={() => handleClick("notification")}
            color={currentColor}
            icon={<MdOutlineNotificationsActive />}
          />
          <TooltipComponent content="Profile" position="BottomCenter">
            <div
              className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
              onClick={() => handleClick("userProfile")}
            >
              <img
                className="rounded-full w-8 h-8"
                src="https://i.ibb.co/MgsTCcv/avater.jpg"
                alt="user-profile"
              />
              <p>
                <span className="text-gray-400 text-14">Hi,</span>{" "}
                <span
                  style={{ color: currentColor }}
                  className="text-gray-400 font-bold ml-1 text-14"
                >
                  Abu Shama
                </span>
              </p>
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
            </div>
          </TooltipComponent>
          {isClicked?.chat && <Chat />}
          {isClicked?.notification && <Notification />}
          {isClicked?.userProfile && <UserProfile />}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Navbar;
