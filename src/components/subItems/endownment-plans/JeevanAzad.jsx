import React from "react";
import Contact from "../../../home/Contact";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const JeevanAzad = () => {
  return (
    <div className="flex flex-col md:flex-row lg:mt-20 ml-20 sm:mt-60">
      <div className="md:w-1/2 md:ml-20">
        <h1 className="text-5xl text-gray-500 lg:mt-20 sm:mt-20">
          Jeevan Azad-(868)
        </h1>
        <hr className="border-black mt-2" />
        <div className="mt-10 item-center">
          <h1 className="text-gray-500 text-2xl">Plan : Jeevan Azad-(868)</h1>
          <h1 className="text-gray-500 font-bold mt-2">Product Summary:</h1>
          <p className="">
            Non Linked, Non participating, Individual, Savings Life Insurance
            Plan. In other words, it is a limited premium endowment plan with
            guaranteed benefits.{" "}
          </p>
          <h1 className=" text-gray-500 mt-4 font-bold">
            Premium Payment Mode:
          </h1>
          <p>Yearly, Half Yearly, Quartely, Monthly(SSS and NACH)</p>
          <h1 className="text-gray-500 font-bold mt-4">Term:</h1>
          <p className="">15 to 20 years</p>
          <h1 className="text-gray-500 font-bold mt-4">
            Minimum Age at Entry:
          </h1>
          <p>90 days completed</p>
          <h1 className="text-gray-500 font-bold mt-4">
            Maximum Age at Entry:
          </h1>
          <p>50 year (Nearest birth day)</p>
          <h1 className="text-gray-500 font-bold mt-4">
            Minimum Maturity Age:
          </h1>
          <p>18 Years (completed)</p>

          <h1 className="text-gray-500 font-bold mt-4">
            Maximum Maturity Age:
          </h1>
          <p>65 Years (nbd)</p>
          <h1 className="text-gray-500 font-bold mt-4">Minimum Sum Assured:</h1>
          <p>2,00,000</p>
          <h1 className="text-gray-500 font-bold mt-4">Maximum Sum Assured:</h1>
          <p>5,00,000</p>
          <h1 className="text-gray-500 font-bold mt-4">Riders Available</h1>
          <h1 className="text-gray-500 font-bold mt-4">
            Accidental Death and Disability Benefit (ADDB):
          </h1>
          <p>Accident Benefit Rider, Premium Waiver Benefit.</p>
          <h1 className="text-gray-500 font-bold mt-4">Settlement Option:</h1>
          <p>Available for 5 years</p>
          <h1 className="text-gray-500 font-bold mt-4">
            Multiple allowed 25000
          </h1>

          <h1 className="text-gray-500 font-bold mt-4">On Death:</h1>
          <p>
            Death Benefit Sum Assured on Death (Higher of - Basic Sum Assured /
            7 times of annualized Premium / 105% of Total basic premiums paid ){" "}
          </p>
          <h1 className="text-gray-500 font-bold mt-4">On Survival:</h1>
          <p>Basic Sum Assured + Vested Bonus + Final Additional Bonus(FAB)</p>
          <h1>Surrender Value:</h1>
          <p>
            Policy can be surrenderred any time during the policy term provided
            two full years premium have been paid.{" "}
          </p>
          <h1 className="text-gray-500 font-bold mt-4">Loan:</h1>
          <p>
            Loan shall be available under the plan after the policy acquires
            paid up value.(ie at least two full years premiums have been paid).{" "}
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

export default JeevanAzad;
