import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-full bg-black mx-aut0 py-16 px-20 grid lg:grid-cols-3 gap-8 text-gray-300 mt-10">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          Thanks for visiting!!
        </h1>
        <p className="py-4">
          Got Questions,comments or any feedback? Feel free to reach out and
          contact me on my socials below.
          {/* Let me know your views through the contact form or drop me a message
          on my socials mentioned below. */}
        </p>
        <h1 className="mt-4 text-[#00df9a]">Let's Connect🙌</h1>
        <div className="flex justify-between md:w-[75%] my-6">
          <a href="https://github.com/himanshi-sharma-123">
            <FaGithubSquare size={30} />
          </a>
          <a href="https://www.linkedin.com/in/himanshi-sharma-564548202/">
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://drive.google.com/file/d/1jNGuXMPaD3UdQxZhctiyJiV4hYSfACTx/view?usp=sharing"
            target="_blank"
          >
            <BsFillPersonLinesFill size={30} />
          </a>
          <a href="https://twitter.com/Himansh93626788?t=58ZIeC6a4E-MQ0Y3rBpHCQ&s=09">
            <FaTwitterSquare size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        <div>
          <h6 className="font-medium text-[#00df9a] px-4">Contact Us</h6>
          <ul>
            <li className="py-2 text-sm">+91 9818122882</li>
            <li className="py-2 text-sm">liclokeshsharma@gmail.com</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#00df9a]">News Lic</h6>
          <ul>
            <li className="py-2 text-sm">
              {" "}
              <Link href="/">10 Time Risk Cover</Link>
            </li>
            <li className="py-2 text-sm">
              {" "}
              <Link href="/about">Anti Fruad Policy</Link>
            </li>
            <li className="py-2 text-sm">
              {" "}
              <Link href="/">Reasons to buy Jeevan Labh</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#00df9a]">Quick Links</h6>
          <ul>
            <li className="py-2 text-sm">
              <a href="https://leetcode.com/Himanshi_Sharma/">
                Lic Child Plans
              </a>
            </li>
            <li className="py-2 text-sm">
              <a href="https://www.codingninjas.com/studio/profile/8ac82452-fc95-4765-aad4-1ed885e9a6a3">
                Health Insurance Plans
              </a>
            </li>

            <li className="py-2 text-sm ">
              <a href="/">Lic Insurance Plans</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/">Lic Pension Plans</a>
            </li>
          </ul>
        </div>
      </div>{" "}
      <div>
        <p className="text-[#00df9a]">
          Copyright &copy; by Policy Pulse 2024 | All Rights Reserved
        </p>
        <div className="flex flex-row">
          <img src={logo} alt="" width={200} height={200} className=" mt-0" />
          <h1 className="text-green-500 text-4xl font-bold italic font-serif mt-10">
            POLICY PULSE
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
