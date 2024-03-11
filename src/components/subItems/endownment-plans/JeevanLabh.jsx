import React from "react";
import Contact from "../../../home/Contact";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const JeevanLabh = () => {
  return (
    <div className="flex flex-col md:flex-row lg:mt-20 ml-20 sm:mt-60">
      <div className="md:w-1/2 md:ml-20">
        <h1 className="text-5xl text-gray-500 lg:mt-20 sm:mt-20">
          Jeevan Labh (936)
        </h1>
        <hr className="border-black mt-2" />
        <div className="mt-10 item-center">
          <h1 className="text-gray-500 text-2xl">Plan : Jeevan Labh (936)</h1>
          <h1 className="text-gray-500 font-bold mt-2">Product Summary:</h1>
          <p className="">
            Jeevan Labh is a regular premium, non - linked, with profit
            Endowment Assurance plan. Provides high returns at a lower premium
            compared to sum assured opted.
          </p>
          <h1 className=" text-gray-500 mt-4 font-bold">
            Premium Payment Mode:
          </h1>
          <p>Yearly, Half Yearly, Quartely, Monthly(SSS and NACH)</p>
          <h1 className="text-gray-500 font-bold mt-4">Term:</h1>
          <p className="">16 Year, 21 Year, 25 Year.</p>
          <h1 className="text-gray-500 font-bold mt-4">
            Minimum Age at Entry:
          </h1>
          <p>8 Year completed</p>
          <h1 className="text-gray-500 font-bold mt-4">
            Maximum Age at Entry:
          </h1>
          <p>59 year (Nearest birth day)</p>
          <h1 className="text-gray-500 font-bold mt-4">
            Maximum Maturity Age:
          </h1>
          <p>75 Years</p>
          <h1 className="text-gray-500 font-bold mt-4">Minimum Sum Assured:</h1>
          <p>2,00,000</p>
          <h1 className="text-gray-500 font-bold mt-4">Maximum Sum Assured:</h1>
          <p>No Limit (Subject to other conditions)</p>
          <h1 className="text-gray-500 font-bold mt-4">
            Riders Available ADDB/AB, Critical Illness Rider, Term Rider.
          </h1>
          <h1 className="text-gray-500 font-bold mt-4">
            Accidental Death and Disability Benefit (ADDB):
          </h1>
          <p>Available up to age 70.</p>
          <h1 className="text-gray-500 font-bold mt-4">On Death:</h1>
          <p>
            Sum Assured + Vested Bonus + Final Addition Bonus(FAB) if any, OR 7
            times of Annualized Premium, OR 105% of all premiums paid as on
            death, WHICH EVER IS HIGHER.{" "}
          </p>
          <h1 className="text-gray-500 font-bold mt-4">On Survival:</h1>
          <p>Basic Sum Assured + Vested Bonus + Final Additional Bonus(FAB)</p>
          <h1>Surrender Value:</h1>
          <p>
            Policy can be surrendered at any time during the policy term
            provided at least 2 full years premium have been paid and two full
            years completed since inception of policy.{" "}
          </p>
          <h1 className="text-gray-500 font-bold mt-4">Loan:</h1>
          <p>
            Loan can be availed at any time during the policy term provided at
            least 2 full years premium have been paid and two full years
            completed since inception of policy.{" "}
          </p>
          <h1 className="text-gray-500 font-bold mt-4">Income Tax Benefit:</h1>
          <p>
            Premium paid under the policy is eligible for Tax rebate under
            section 80C. Maturity benefit under this policy is tax free under
            section 10 (10 D) of income tax act.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:w-2/6 md:mr-20 lg:mt-10 lg:ml-20 md:ml-20 sm:mr-20">
        <div className="mt-20 ml-4">
          <h1 className="text-2xl text-gray-500 font-bold">Quick Contact</h1>
          <div className="flex flex-row gap-5 mt-4 lg:text-xl sm:text-xl text-gray-600">
            <FaPhone />
            +91 9818122882
          </div>
          <div className="flex flex-row gap-5 mt-4 lg:text-xl sm:text-xl text-gray-600">
            <IoMail />
            liclokeshsharma@gmail.com
          </div>
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default JeevanLabh;
