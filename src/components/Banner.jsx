import {
  FaCalculator,
  FaHandshake,
  FaHeartCircleCheck,
  FaUserGraduate,
} from "react-icons/fa6";
import { MdFamilyRestroom, MdOutlineElderlyWoman } from "react-icons/md";
import { PiPottedPlantFill } from "react-icons/pi";

import { TbPigMoney } from "react-icons/tb";

import { Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const lists = [
  {
    id: 1,
    header: "Health Plans",
    sublists: ["Arogya Rakshak"],
    toLists: ["/health-plans/arogya-rakshak"],
  },
  {
    id: 2,
    header: "Child Plans",
    sublists: [
      "New Children Money Back Plan",
      "Jeevan Tarun",
      "Single Premium Endownment",
    ],
    toLists: [
      "/child-plans/child-money-back",
      "/child-plans/jeevan-tarun",
      "/child-plans/amrit-baal",
    ],
  },
  {
    id: 3,
    header: "Pension Plans",
    sublists: ["Jeevan Askshay VII", "New Jeevan Shanti", "Saral Pension"],
    toLists: [
      "/pension-plans/jeevan-akshay",
      "/pension-plans/new-jeevan-shanti",
      "/pension-plans/saral-pension",
    ],
  },
  {
    id: 4,
    header: "Term Plans",
    sublists: ["Jeevan Amar", "Saral Jeevan Bima"],
    toLists: ["/term-plans/jeevan-amar", "/term-plans/saral-jeevan-bima"],
  },
  {
    id: 5,
    header: "Single Premium Plans",
    sublists: ["Single Premium Plans", "Bima Bachat", "Dhan Rekha"],
    toLists: [
      "/single-premium/bima-bachat",
      "/single-premium/dhan-rekha",
      "/single-premium/single-premium-endownment",
    ],
  },
  {
    id: 6,
    header: "Money Back Plans",
    sublists: [
      "New Money Back-20 Year",
      "New Money Back-25 Year",
      "Jeevan Tarun",
      "Bima Bachat",
    ],
    toLists: [
      "/money-back/new-moneyback-20",
      "/money-back/new-moneyback-25",
      "/money-back/jeevan-tarun",
      "/money-back/bima-bachat",
    ],
  },
  {
    id: 7,
    header: "Ulip Plans",
    sublists: ["New Endownment Plus"],
    toLists: ["/ulip-plans/new-endownment-plus"],
  },
  {
    id: 8,
    header: "Endownment Plans",
    sublists: [
      "Aadhaar Shila",
      "Aadhar Stambh",
      "Jeevan Lakshya",
      "Jeevan Labh",
    ],
    toLists: [
      "/endownment-plans/aadhaar-shila",
      "/endownment-plans/aadhaar-stambh",
      "/endownment-plans/jeevan-lakshya",
      "/endownment-plans/jeevan-labh",
    ],
  },
  {
    id: 9,
    header: "Whole Life",
    sublists: ["Jeevan Umang", "Jeevan Utsav"],
    toLists: ["/whole-life/jeevan-umang", "/whole-life/jeevan-utsav"],
  },
];

const getEmojiComponent = (header) => {
  switch (header) {
    case "Health Plans":
      return <FaHeartCircleCheck className="w-full h-10" />;
    case "Child Plans":
      return <FaUserGraduate className="w-full h-10" />;
    case "Pension Plans":
      return <MdOutlineElderlyWoman className="w-full h-10" />;
    case "Term Plans":
      return <MdFamilyRestroom className="w-full h-10" />;
    case "Single Premium Plans":
      return <TbPigMoney className="w-full h-10" />;
    case "Money Back Plans":
      return <FaCalculator className="w-full h-10" />;
    case "Ulip Plans":
      return <PiPottedPlantFill className="w-full h-10" />;
    case "Endownment Plans":
      return <FaHandshake className="w-full h-10" />;
    case "Whole Life":
      return <FaHandshake className="w-full h-10" />;

    default:
      return null;
  }
};

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 flex items-center bg-[#5CDB95]">
      <div className="flex w-full flex-col md:flex-row justify-between items-center py-40">
        {/* <div className="md:w-1/2 h-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 ml-20"> */}
        <div className="grid lg:my-12 gap-10 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-4 grid-cols-1 lg:ml-20 md:mt-40 sm:mt-40">
          {lists.map((list, i) => (
            <Card
              // className="w-full cursor-pointer flex flex-col items-center hover:scale-110 duration-500 border-green-800"
              className="w-full cursor-pointer flex flex-col items-center duration-500 border-green-800 hover:animate-fadeinup"
              key={i}
            >
              <div className="flex-grow ">
                {getEmojiComponent(list.header)} {/* Get emoji dynamically */}
                {/* <p className="w-full h-10">{lists.emojis}</p> */}
                {/* <FaHeartCircleCheck className="w-full h-10" /> */}
                <h6 className="mt-3 text-green-500 font-bold text-xl">
                  {list.header}
                </h6>
                <ul className="mt-3 text-gray-500 underline font-bold">
                  {list.sublists.map((sublist, index) => (
                    <Link to={list.toLists[index]} key={index}>
                      {" "}
                      <li key={index} className="text-sm">
                        {sublist}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
              {/* <ul>
                {list.sublists.map((sublist, index) => (
                  <Link to="/" key={index}>
                    {" "}
                    <li key={index} className="mb-2 text-sm font-bold">
                      {sublist}
                    </li>
                  </Link>
                ))}
              </ul> */}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
// <div
//   className="bg-white h-64 p-4 rounded-lg shadow-md w-60"
//   key={i}
// >
//   <h1 className="text-xl font-bold mb-4">{list.header}</h1>
//   <ul>
//     {list.sublists.map((sublist, index) => (
//       <li key={index} className="mb-2">
//         {sublist}
//       </li>
//     ))}
//   </ul>
// </div>;
