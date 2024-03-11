import React from "react";
import Contact from "../../../home/Contact";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const SPE = () => {
  return (
    <div className="flex flex-col md:flex-row lg:mt-20 ml-20 sm:mt-60">
      <div className="md:w-1/2 md:ml-20">
        <h1 className="text-5xl text-gray-500 lg:mt-20 sm:mt-20">
          Single Premium Endownment (917)
        </h1>
        <hr className="border-black mt-2" />
        <div className="mt-10 item-center">
          <h1 className="text-gray-500 text-2xl">
            Plan : Single Premium Endownment (917)
          </h1>
          <h1 className="text-gray-500 font-bold mt-2">Product Summary:</h1>
          <p className="">
            Single premium ,non-linked, with profits endowment plan.{" "}
          </p>
          <h1 className=" text-gray-500 mt-4 font-bold">
            Premium Payment Mode:
          </h1>
          <p>Single premium</p>
          <h1 className="text-gray-500 font-bold mt-4">Term:</h1>
          <p className="">10 to 25 years</p>
          <h1 className="text-gray-500 font-bold mt-4">
            Minimum Age at Entry:
          </h1>
          <p>90 days completed</p>
          <h1 className="text-gray-500 font-bold mt-4">
            Maximum Age at Entry:
          </h1>
          <p>65 year (Nearest birth day)</p>
          <h1 className="text-gray-500 font-bold mt-4">
            Maximum Maturity Age:
          </h1>
          <p>75 Year</p>
          <h1 className="text-gray-500 font-bold mt-4">Minimum Sum Assured:</h1>
          <p>50,000</p>
          <h1 className="text-gray-500 font-bold mt-4">Maximum Sum Assured:</h1>
          <p>No Limit (Subject to other conditions)</p>
          <h1 className="text-gray-500 font-bold mt-4">Riders Available Nil</h1>
          <h1 className="text-gray-500 font-bold mt-4">
            Accidental Death and Disability Benefit (ADDB):
          </h1>
          <p>Not available</p>
          <h1 className="text-gray-500 font-bold mt-4">On Death:</h1>
          <p>
            On Death after commencement of risk : Sum Assured + Vested Bonus +
            Final Addition Bonus(FAB) if any and on death before commencement of
            risk, return of single premium excluding taxes and extra premium.{" "}
          </p>
          <h1 className="text-gray-500 font-bold mt-4">On Survival:</h1>
          <p>
            Basic Sum Assured + Vested Bonus + Final Additional Bonus (if any)
          </p>
          <h1>Surrender Value:</h1>
          <p>
            Policy can be surrendered at any time during the policy term
            provided the premium cheque has been realized.{" "}
          </p>
          <h1 className="text-gray-500 font-bold mt-4">Loan:</h1>
          <p>
            Loan can be availed at any time during the policy term after
            completion of one full year from the inception of policy.{" "}
          </p>
          <h1 className="text-gray-500 font-bold mt-4">Income Tax Benefit:</h1>
          <p>
            Premium paid under the policy is eligible for Tax rebate under
            section 80C up to 10 % of Sum Assured.{" "}
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

export default SPE;
