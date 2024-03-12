import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { BsFillPersonLinesFill } from "react-icons/bs";

const lists = [
  {
    id: 1,
    header: "Health Plans",
    sublists: ["Arogya Rakshak", "Cancer Cover"],
    links: ["/health-plans/arogya-rakshak", "/health-plans/cancer-cover"],
  },
  {
    id: 2,
    header: "Child Plans",
    sublists: [
      "Child Money Back",
      "Jeevan Tarun",
      "Amrit Baal",
      "Single Premium Endownment",
    ],
    links: [
      "/child-plans/child-money-back",
      "/child-plans/jeevan-tarun",
      "/child-plans/amrit-baal",
      "/child-plans/single-premium-endownment",
    ],
  },
  {
    id: 3,
    header: "Term Plans",
    sublists: ["Jeevan Amar", "Saral Jeevan Bima"],
    links: ["/term-plans/jeevan-amar", "/term-plans/saral-jeevan-bima"],
  },
  {
    id: 4,
    header: "Single Premium",
    sublists: ["Bima Bachat", "Dhan Rekha ", "Single Premium Endownment"],
    links: [
      "/single-premium/bima-bachat",
      "/single-premium/dhan-rekha",
      "/single-premium/single-premium-endownment",
    ],
  },
  {
    id: 5,
    header: "Money Back",
    sublists: [
      "Bima Bachat",
      "Bima Shree",
      "Jeevan Shiromani",
      "Jeevan Tarun",
      "New Money Back 20 year",
      "New Money Back 20 year",
    ],
    links: [
      "/money-back/bima-bachat",
      "/money-back/bima-shree",
      "/money-back/jeevan-shiromani",
      "/money-back/jeevan-tarun",
      "/money-back/new-moneyback-20",
      "/money-back/new-moneyback-25",
    ],
  },
  {
    id: 6,
    header: "Ulip Plans",
    sublists: ["LIC new Endownment Plus"],
    links: ["/ulip-plans/new-endownment-plus"],
  },
  {
    id: 7,
    header: "Endownment Plans",
    sublists: [
      "Aadhaar Shila",
      "Aadhaar Stambh",
      "Bima Jyoti",
      "Jeevan Anand",
      "Jeevan Labh",
      "Jeevan Lakshya",
      "Jeevan Azad",
      "Dhan Vriddhi",
      "New Endownment",
      "Single Premium Endownment",
    ],
    links: [
      "/endownment-plans/aadhaar-shila",
      "/endownment-plans/aadhaar-stambh",
      "/endownment-plans/bima-jyoti",
      "/endownment-plans/jeevan-anand",
      "/endownment-plans/jeevan-labh",
      "/endownment-plans/jeevan-lakshya",
      "/endownment-plans/jeevan-azad",
      "/endownment-plans/dhan-vriddhi",
      "/endownment-plans/new-endownment",
      "/endownment-plans/single-premium-endownment",
    ],
  },
  {
    id: 8,
    header: "Pension Plans",
    sublists: ["Jeevan Akshay VII", "New Jeevan Shanti", "Saral Pension"],
    links: [
      "/pension-plans/jeevan-akshay",
      "/pension-plans/new-jeevan-shanti",
      "/pension-plans/saral-pension",
    ],
  },
  {
    id: 9,
    header: "Whole Life Plans",
    sublists: ["Jeevan Utsav", "Jeevan Umang"],
    links: ["/whole-life/jeevan-utsav", "/whole-life/jeevan-umang"],
  },
];

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClick = () => setClick(!click);
  const handleDropdown = (index) => {
    setHoveredIndex(index);
  };

  return (
    <header className="fixed w-full bg-transparent top-0 left-0 right-0 transition-all ease-in duration-300 bg-white">
      <div className="md:flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        <div className="flex flex-row items-center lg:items-start lg:ml-40 justify-center">
          <img className="w-20" src={logo} alt="" />
          <h3 className="mt-4 text-green-500 text-4xl font-bold italic font-serif">
            POLICY PULSE
          </h3>
        </div>
        <div className="flex flex-col gap-5 items-center lg:flex-row lg:gap-20 lg:mr-40">
          <div className="flex flex-col">
            <h6 className="ml-auto font-mono font-bold">CALL US ON</h6>
            <h2 className="text-green-500 font-mono font-bold">
              +91 - 9818122882
            </h2>
          </div>
          <div className="flex flex-col ">
            <h6 className="ml-auto font-mono font-bold">EMAIL US ON</h6>
            <h4 className="text-gray-500 text-xs font-bold">
              liclokeshsharma@gmail.com
            </h4>
          </div>
        </div>
      </div>
      <div
        className={`bg-gray-400 w-full p-5 absolute cursor-pointer items-center justify-center ${
          click ? "h-auto" : "h-15"
        }`}
      >
        {click ? (
          <AiOutlineClose
            onClick={handleClick}
            className="lg:hidden md:hidden"
          />
        ) : (
          <div className="flex flex-row justify-between lg:hidden md:hidden">
            <h1 className="text-white font-bold italic text-2xl ">MENU</h1>
            <AiOutlineMenu
              onClick={handleClick}
              className="lg:hidden md:hidden mt-2"
            />
          </div>
        )}
        <ul
          className={`md:flex flex-col md:flex-row lg:ml-20 gap-10  ${
            click ? "flex" : "hidden"
          }`}
        >
          {lists.map((list, index) => (
            <li
              key={index}
              onMouseEnter={() => handleDropdown(index)}
              onMouseLeave={() => handleDropdown(null)}
              className={`lg:bg-gray-400 ${
                window.innerWidth < 640
                  ? "sm:bg-gray-200 flex justify-center h-10 rounded-3xl pt-1"
                  : ""
              }`}
            >
              <Link to="/">
                {list.header} <i className="fas fa-caret-down" />
              </Link>
              {hoveredIndex === index && (
                <ul className="absolute bg-gray-200 flex flex-col gap-1 top-15 border-r-8 rounded-lg pb-2 text-green-500 font-bold font-serif">
                  {list.sublists &&
                    list.sublists.map((sublist, subIndex) => (
                      <div key={subIndex}>
                        {list.links && list.links[subIndex] ? (
                          <Link to={list.links[subIndex]}>
                            <li className="items-center text-sm ml-1">
                              {sublist}
                            </li>
                          </Link>
                        ) : (
                          <li>{sublist}</li>
                        )}
                        {subIndex !== list.sublists.length - 1 && (
                          <div className="flex items-center">
                            <div className="w-24 h-1 border-b border-dotted border-black"></div>
                            <div className="w-24 h-1 border-b border-dotted border-black"></div>
                          </div>
                        )}
                      </div>
                    ))}
                </ul>
              )}
            </li>
          ))}
          {/* <div className="bg-[#05386B] h-8 rounded-lg text-2xl">Contact us</div> */}
        </ul>
      </div>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ml-2.5">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/lokesh-sharma-509a2b116/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-900">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="Lokesh Shrma"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-400">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="9818122882"
            >
              Whatsapp <FaWhatsapp size={30} />
            </a>
          </li>
          {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1uqP0pIHX-zpKP3_TM9t2nibr8OE3DLu-/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
