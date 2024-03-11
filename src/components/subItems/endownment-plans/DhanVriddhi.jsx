import React from "react";
import Contact from "../../../home/Contact";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const DhanVriddhi = () => {
  return (
    <div className="flex flex-col md:flex-row lg:mt-20 ml-20 sm:mt-60">
      <div className="md:w-1/2 md:ml-20">
        <h1 className="text-5xl text-gray-500 lg:mt-20 sm:mt-20">
          LIC's Dhan Vriddhi
        </h1>
        <hr className="border-black mt-2" />
        <div className="mt-10 item-center">
          <h1 className="text-gray-500 text-2xl">Plan : LIC's Dhan Vriddhi</h1>
          <h1 className="text-gray-500 font-bold mt-2">Product Summary:</h1>
          <p className="">
            Non Linked, Non participating, Individual, Savings, Single Premium
            Life Insurance Plan. In other words, it is a single premium
            endowment plan with guaranteed benefits.
          </p>
          <h1 className=" text-gray-500 mt-4 font-bold">
            Premium Payment Mode:
          </h1>
          <p>Single Premium</p>
          <h1 className="text-gray-500 font-bold mt-4">Term:</h1>
          <p className="">10, 15 and 18 years</p>
          <h1 className="text-gray-500 font-bold mt-4">
            Minimum Age at Entry:
          </h1>
          <p>
            18 Year Term-90 days completed; 15 year Term-3 Years completed; 10
            Years term-8 Years completed
          </p>
          <h1 className="text-gray-500 font-bold mt-4">
            Maximum Age at Entry:
          </h1>
          <p>
            {" "}
            Option 1(1.25 times SA) 60 Years; Option 2(10 times SA)10 Term -
            40;15 Term - 35 Years; 18 Term 32 Years
          </p>
          <h1 className="text-gray-500 font-bold mt-4">
            Maximum Maturity Age:
          </h1>
          <p>
            Option 1(1.25 times SA) 78 Years; Option 2(10 times SA) 50 Years
          </p>
          <h1 className="text-gray-500 font-bold mt-4">
            {" "}
            Maturity Benefit Sum Assured along with Guaranteed additions
          </h1>

          <h1 className="text-gray-500 font-bold mt-4"> Sum Assured:</h1>
          <p>1,25,000</p>
          <h1 className="text-gray-500 font-bold mt-4">
            Riders available AD and DB and Term rider
          </h1>
          <h1 className="text-gray-500 font-bold mt-4"> Settlement Options:</h1>
          <p>Available for 5 years</p>
          <h1 className="text-gray-500 font-bold mt-4">
            {" "}
            Multiple Allowed 5000
          </h1>

          <h1 className="text-gray-500 font-bold mt-4">
            Accidental Death and Disability Benefit (ADDB):
          </h1>
          <h1 className="text-gray-500 font-bold mt-4">On Death:</h1>
          <p>
            Death Benefit Sum Assured on death' along with Guaranteed additions
            (where sum assured on death is 1.25 times tabular premium for option
            1 and 10 times tabular premium for option 2)
          </p>
          <h1>Surrender Value:</h1>
          <p>Policy can be surrenderd any time during the term of the policy</p>
          <h1 className="text-gray-500 font-bold mt-4">Loan:</h1>
          <p>
            Loan available any time after 3 months from the date of completion
            of the policy.{" "}
          </p>
          <h1 className="text-gray-500 font-bold mt-4">Income Tax Benefit:</h1>
          <p>
            Available for Option 2 [on Premium paid u/s 80C and Maturity benefit
            under section 10(10D)]{" "}
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

export default DhanVriddhi;
