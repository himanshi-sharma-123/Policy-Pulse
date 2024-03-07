import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
    sublists: ["Child Money Back", "Jeevan Tarun", "Single Premium Endownment"],
    links: [
      "/child-plans/child-money-back",
      "/child-plans/jeevan-tarun",
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
      "Jeevan Rakshak",
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
      "/endownment-plans/jeevan-rakshak",
      "/endownment-plans/new-endownment",
      "/endownment-plans/single-premium-endownment",
    ],
  },
  {
    id: 7,
    header: "Pension Plans",
    sublists: ["Jeevan Akshay VII", "New Jeevan Shanti", "Saral Pension"],
    links: [
      "/pension-plans/jeevan-akshay",
      "/pension-plans/new-jeevan-shanti",
      "/pension-plans/saral-pension",
    ],
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
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <div className="md:flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        <div className="flex flex-row items-center lg:items-start lg:ml-40 justify-center">
          <img className="w-20" src={logo} alt="" />
          <h3 className="mt-4 text-green-500 text-4xl font-bold italic font-serif">
            POLICY PULSE
          </h3>
        </div>
        <div className="flex flex-col gap-5 items-center lg:flex-row lg:gap-20 lg:mr-40">
          <div className="flex flex-col">
            <h6 className="ml-auto">CALL US ON</h6>
            <h2 className="text-gray-500">+91 - 9818321882</h2>
            <h2 className="text-gray-500">+91 - 9818122882</h2>
          </div>
          <div className="flex flex-col ">
            <h6 className="ml-auto">EMAIL US ON</h6>
            <h4 className="text-gray-500 text-xs">liclokeshsharma@gmail.com</h4>
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
          className={`md:flex flex-col md:flex-row lg:ml-40 gap-10  ${
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
                <ul className="absolute bg-gray-200 flex flex-col gap-1 top-15 border-r-8">
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
                          <div class="flex items-center">
                            <div class="w-24 h-1 border-b border-dotted border-black"></div>
                            <div class="w-24 h-1 border-b border-dotted border-black"></div>
                          </div>
                        )}
                      </div>
                    ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;