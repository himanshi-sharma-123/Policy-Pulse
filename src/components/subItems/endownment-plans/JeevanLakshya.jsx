import React from "react";
import Contact from "../../../home/Contact";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const JeevanLakshya = () => {
  return (
    <div className="flex flex-col md:flex-row lg:mt-20 ml-20 mt-60">
      <div className="md:w-1/2 md:ml-20">
        <h1 className="text-5xl text-gray-500 lg:mt-20 sm:mt-20">
          Jeevan Lakshya (933){" "}
        </h1>
        <hr className="border-black mt-2" />
        <div className="mt-10 item-center">
          <h1 className="text-gray-500 text-2xl">
            Plan : Jeevan Lakshya (933)
          </h1>
          <h1 className="text-gray-500 font-bold mt-2">Product Summary:</h1>
          <p className="">
            Jeevan Lakshya is a limited premium paying term with profit
            endowment assurance plan with enhnced insurance coverage. Premium
            paying term is 3 years lesser than the term of the policy.{" "}
          </p>
          <h1 className=" text-gray-500 mt-4 font-bold">
            Premium Payment Mode:
          </h1>
          <p>Yearly, Half Yearly, Quartely, Monthly(SSS and NACH)</p>
          <h1 className="text-gray-500 font-bold mt-4">Term:</h1>
          <p className="">3</p>
          <h1 className="text-gray-500 font-bold mt-4">
            Minimum Age at Entry:
          </h1>
          <p>18 Year completed</p>
          <h1 className="text-gray-500 font-bold mt-4">
            Maximum Age at Entry:
          </h1>
          <p>50 years (Nearest birth day)</p>
          <h1 className="text-gray-500 font-bold mt-4">
            Maximum Maturity Age:
          </h1>
          <p>65 Year (nearest bithday)</p>
          <h1 className="text-gray-500 font-bold mt-4">Minimum Sum Assured:</h1>
          <p>1,00,000</p>
          <h1 className="text-gray-500 font-bold mt-4">Maximum Sum Assured:</h1>
          <p>No Limit (Subject to other conditions)</p>
          <h1 className="text-gray-500 font-bold mt-4">
            Riders Available ADDB/AB, Critical Illness Rider, Term Rider.
          </h1>
          <h1 className="text-gray-500 font-bold mt-4">
            Accidental Death and Disability Benefit (ADDB):
          </h1>
          <p>up to Age 65</p>
          <h1 className="text-gray-500 font-bold mt-4">On Death:</h1>
          <p>
            On death: annual income benefit equal to 10 % of the basic sum
            assured (till policy anniversary prior to date of maturity) + 110%
            of Basic sum assured +vested bonus and FAB(if any) at the time of
            maturity.
          </p>
          <h1 className="text-gray-500 font-bold mt-4">On Survival:</h1>
          <p>
            Basic Sum Assured + Vested Bonus + Final Additional Bonus (if any)
          </p>
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
        <div className="justify-center px-6 mr-10 py-0">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default JeevanLakshya;
