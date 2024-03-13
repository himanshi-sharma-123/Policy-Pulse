import React from "react";
import Contact from "../../../home/Contact";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const JeevanUtsav = () => {
  return (
    <div className="flex flex-col md:flex-row lg:mt-20 ml-20 mt-60">
      <div className="md:w-1/2 md:ml-20">
        <h1 className="text-5xl text-gray-500 lg:mt-20 sm:mt-20">
          Jeevan Utsav (871)
        </h1>
        <hr className="border-black mt-2" />
        <div className="mt-10 item-center">
          <h1 className="text-gray-500 text-2xl">Plan : Jeevan Utsav (871)</h1>
          <h1 className="text-gray-500 font-bold mt-2">Product Summary:</h1>
          <p className="">
            Jeevan Utsav (871) is a non linked , guaranteed benefit, whole life
            assurance plan. Guaranteed additions @ Rs 40 per 1000 Sum Assured
            shall get accrued to the policy account through out the premium
            paying term. Guaranteed survival benefits at the rate of 10% of the
            sum assured shall be available (from the specific income start year)
            throughout the life of the policy holder. Sum Assured on death along
            with accrued guaranteed additions shall be paid as the death benefit
            to the nominee.
          </p>
          <h1 className=" text-gray-500 mt-4 font-bold">
            Premium Payment Mode:
          </h1>
          <p>Yearly, Half Yearly, Quartely, Monthly(SSS and NACH)</p>
          <h1 className="text-gray-500 font-bold mt-4">Term:</h1>
          <p className="">100 - Age at entry</p>
          <h1 className="text-gray-500 font-bold mt-4">
            Premium Paying Term 5 to 16 years
          </h1>

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
          <p>65 Years(nbd)</p>
          <h1 className="text-gray-500 font-bold mt-4">
            Income start age For premium payment period of 5 to 7 years {"->"}{" "}
            10 years. For premium payment period from 8 to 16 years{"->"}
            (premium payment preiod+2)
          </h1>
          <h1 className="text-gray-500 font-bold mt-4">Minimum Sum Assured:</h1>
          <p>500,000</p>
          <h1 className="text-gray-500 font-bold mt-4">
            Riders Available AB/ADDB,Term Rider, Critical illness rider, Premium
            Waiver Benefit(for minors). Riders Available AB/ADDB,Term Rider,
            Critical illness rider, Premium Waiver Benefit(for minors).
          </h1>
          <h1 className="text-gray-500 font-bold mt-4">
            Accidental Death and Disability Benefit (ADDB):
          </h1>
          <p>Available up to age 70.</p>
          <h1 className="text-gray-500 font-bold mt-4">On Death:</h1>
          <p>Sum Assured on death + vested Guaranteed Additions</p>
          <h1 className="text-gray-500 font-bold mt-4">On Survival:</h1>
          <p>
            10 % of sum assured shall be paid every year(from the income start
            year) till 100 years of age and on surviving the period, Sum assured
            + accrued Guaranteed Additions shall be paid.
          </p>
          <h1>Surrender Value:</h1>
          <p>
            Policy can be surrendered at any time during the policy term
            provided at least 2 full years premium have been paid.{" "}
          </p>
          <h1 className="text-gray-500 font-bold mt-4">Loan:</h1>
          <p>
            Loan can be availed at any time during the policy term provided at
            least 2 full years premium have been paid.{" "}
          </p>
          <h1 className="text-gray-500 font-bold mt-4">Income Tax Benefit:</h1>
          <p>
            Premium paid under the policy is eligible for Tax rebate under
            section 80C. Maturity benefit under this policy is tax free under
            section 10 (10 D) of income tax act(based on the SA restrictions on
            10(10D) imposed).{" "}
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

export default JeevanUtsav;
