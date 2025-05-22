import React, { useState, useEffect, useRef } from "react";
import logoImage from "./assets/IMG_9322.jpg";
import moonImage from "./assets/moonImage.png";
import sunImage from "./assets/sunImage.png";
import { FaAward, FaGithub, FaHome, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import { NavLink, Outlet } from "react-router-dom";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const buttons = [
    { id: "home", label: "Home", icon: <FaHome />, path: "/" },
    { id: "resume", label: "Resume", icon: <FaBriefcase />, path: "/resume" },
    {
      id: "Certificate",
      label: "cetificate",
      icon: <FaAward />,
      path: "/certificate",
    },

    {
      id: "projects",
      label: "Projects",
      icon: <FaFileAlt />,
      path: "/projects",
    },
    { id: "contact", label: "Contact", icon: <FaEnvelope />, path: "/contact" },
  ];
  const resumeRef = useRef();

  const handleView = () => {
    window.open("/resume1.pdf", "_blank");
  };

  return (
    <div
      ref={resumeRef}
      className="bg-[#F2F5F9] dark:bg-[#1a1a1a] text-black dark:text-white transition-colors duration-300 max-h-screen  h-[calc(100vh-60px)] overflow-y-auto"
      style={{ padding: "1%" }}
    >
      <header>
        <div className="container mx-auto px-4 sm:px-4 py-4 flex justify-between items-center">
          <div className="text-[30px] font-bold pacifico-regular">
            Maha
            <span className="bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] bg-clip-text text-transparent">
              lakshmi
            </span>
          </div>
          <div
            className="p-2 w-12 h-12 rounded-full bg-[#EBF2FA] dark:bg-gray-700 shadow-[0_0_4px_rgba(0,0,0,0.25)] cursor-pointer overflow-hidden flex items-center justify-center"
            onClick={() => setDarkMode(!darkMode)}
          >
            <img
              src={darkMode ? sunImage : moonImage}
              alt="Toggle Dark/Light Mode"
              className="w-6 h-6 object-cover"
            />
          </div>
        </div>
        <div className="flex justify-end px-4 py-4">
          <div className="flex flex-wrap md:flex-nowrap justify-end gap-3 px-4 py-4 shadow-md bg-[#F2F5F9] dark:bg-gray-800 rounded-[19px] transition w-full md:w-fit">
            {buttons.map((btn) => (
              <NavLink
                to={btn.path}
                key={btn.id}
                className={({ isActive }) =>
                  `w-full md:w-auto flex flex-col items-center px-4 py-2 rounded-[20px] transition shadow-md text-sm md:text-center ${
                    isActive
                      ? "text-white bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09]"
                      : "text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-700 shadow-inner hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`
                }
              >
                <div className="w-5 h-5 md:w-6 md:h-6 mb-1 text-lg">
                  {btn.icon}
                </div>
                <span className="text-sm font-medium raleway-regular">
                  {btn.label}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </header>

      <div className="flex flex-col sm:flex-row lg:flex-row p-4 sm:p-6 lg:p-6 gap-4">
        <aside
          id="default-sidebar"
          className="w-full md:w-80 h-full bg-[#F2F5F9] dark:bg-[#222] flex flex-col justify-between transition duration-300 rounded-lg"
          aria-label="Sidebar"
        >
          <div className="relative w-full bg-white dark:bg-gray-800 rounded-3xl shadow-md flex flex-col items-center pt-10 pb-6 px-4">
            <div className="absolute-top-16">
              <img
                src={logoImage}
                className="w-40 sm:w-44 md:w-52 h-32 sm:h-36 md:h-44 rounded-2xl border-4 border-white shadow-md object-cover"
                alt="Profile"
              />
            </div>

            <h2 className="mt-4 text-[29px] text-gray-900 dark:text-white font-bold font-raleway">
              Mahalakshmi R
            </h2>

            <p className="text-[16px] font-medium font-raleway text-gray-500 dark:text-gray-300 mb-4">
              Front-end web Developer
            </p>

            <div className="flex justify-center space-x-4 mb-7">
              <a
                href="https://www.linkedin.com/in/mahalakshmi-r-a66560229/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-gray-100 dark:bg-gray-700 rounded text-[#0A66C2]"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Mahalakshmirajenderan/Mahalakshmirajenderan"
                target="_blank"
                rel="noopener"
                className="p-5 bg-gray-100 dark:bg-gray-700 rounded"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            </div>

            <div className="w-full bg-[#F5F7FA] dark:bg-gray-700 rounded-xl p-4 space-y-4 text-[14px] text-gray-800 dark:text-gray-200 font-semibold font-raleway">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 mt-1 rounded-full bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] flex items-center justify-center text-white">
                  <FiPhone className="w-3.5 h-3.5" />
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-500 dark:text-gray-300">
                    Phone
                  </label>
                  <span>+9344587124</span>
                </div>
              </div>

              <div className="w-full h-px bg-gray-300 dark:bg-gray-600 my-2"></div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 mt-1 rounded-full bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] flex items-center justify-center text-white">
                  <HiOutlineMail className="w-4 h-4" />
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-500 dark:text-gray-300">
                    Email
                  </label>
                  <span className="break-all">mahalakshmi9201@gmail.com</span>
                </div>
              </div>

              <div className="w-full h-px bg-gray-300 dark:bg-gray-600 my-2"></div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 mt-1 rounded-full bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] flex items-center justify-center text-white">
                  <HiOutlineLocationMarker className="w-4 h-4" />
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-500 dark:text-gray-300">
                    Location
                  </label>
                  <span>Chennai, India</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleView}
              className="mt-6 w-full text-center flex items-center justify-center gap-2 text-white bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] py-2 rounded-3xl text-sm font-semibold shadow-md hover:opacity-90 transition"
            >
              View Resume
            </button>
          </div>
        </aside>

        <main className="flex-1 w-full max-w-full sm:max-w-5xl lg:max-w-6xl mx-auto p-4 sm:p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg transition duration-300 h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
