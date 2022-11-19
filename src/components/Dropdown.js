import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const Dropdown = ({
  route,
  showAnimation,
  activeMenu,
  setActiveMenu,
  handleCloseSideBar,
}) => {
  const { currentColor } = useStateContext();

  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
    setActiveMenu(true);
  };

  useEffect(() => {
    if (!activeMenu) {
      setDropdown(false);
    }
  }, [activeMenu]);
  const dropdownAnimation = {
    hidden: {
      opacity: 0,
      height: 0,
      padding: 0,
      transition: { duration: 0.3, when: "afterChildren" },
    },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
      },
    },
  };
  const dropdownItemAnimation = {
    hidden: (index) => ({
      padding: 0,
      x: "-100%",
      transition: {
        duration: (index + 1) * 0.1,
      },
    }),
    show: (index) => ({
      x: 0,
      transition: {
        duration: (index + 1) * 0.1,
      },
    }),
  };

  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  const activeDropLink =
    "flex items-center gap-5 pl-10 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalDropLink =
    "flex items-center gap-5 pl-10 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <>
      <NavLink
        onClick={toggleDropdown}
        className={`link flex justify-between ${normalLink} `}
      >
        <div className={`menu_item flex gap-3 items-center`}>
          <div className="icon mr-2"> {route.icon} </div>
          <AnimatePresence>
            {activeMenu && (
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className={`link_text whitespace-nowrap`}
              >
                <h4 className="capitalize">{route.name}</h4>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {activeMenu && (
          <motion.div
            className="dropdown_icon mr-1"
            animate={
              dropdown
                ? {
                    rotate: 180,
                  }
                : { rotate: 0 }
            }
          >
            <FaAngleDown />
          </motion.div>
        )}
      </NavLink>
      <AnimatePresence>
        {dropdown && (
          <motion.div
            variants={dropdownAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="main_container flex flex-col"
          >
            {route.subRoutes.map((subRoute, index) => (
              <motion.div
                variants={dropdownItemAnimation}
                key={index}
                custom={index}
              >
                <NavLink
                  onClick={handleCloseSideBar}
                  className={({ isActive }) =>
                    isActive ? activeDropLink : normalDropLink
                  }
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : "",
                  })}
                  to={subRoute.path}
                >
                  <div className="icon"> {subRoute.icon} </div>
                  {activeMenu && (
                    <motion.div
                      variants={showAnimation}
                      className={`link_text whitespace-nowrap`}
                    >
                      {subRoute.name}
                    </motion.div>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Dropdown;
