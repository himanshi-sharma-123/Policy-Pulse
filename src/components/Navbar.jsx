import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

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
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <img className="w-20" src={logo} alt="" />
          <h3>Policy Pulse</h3>
        </div>
        <div className="flex flex-row gap-20">
          <div className="flex flex-col">
            <h3>Call us on</h3>
            <h3>9818321882</h3>
            <h3>9818122882</h3>
          </div>
          <div className="flex flex-col">
            <h3>Email us on</h3>
            <h3>liclokeshsharma@gmail.com</h3>
          </div>
        </div>
      </div>
      <div onClick={handleClick}>
        <div>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className="flex flex-row gap-20">
          {lists.map((list, index) => (
            <li
              key={index}
              onMouseEnter={() => handleDropdown(index)}
              onMouseLeave={() => handleDropdown(null)}
            >
              <Link to="/">
                {list.header} <i className="fas fa-caret-down" />
              </Link>
              {hoveredIndex === index && (
                <ul className="dropdown-menu">
                  {list.sublists &&
                    list.sublists.map((sublist, subIndex) => (
                      <div key={subIndex}>
                        {list.links && list.links[subIndex] ? (
                          <Link to={list.links[subIndex]}>
                            <li>{sublist}</li>
                          </Link>
                        ) : (
                          <li>{sublist}</li>
                        )}
                        {subIndex !== list.sublists.length - 1 && <hr />}
                      </div>
                    ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
