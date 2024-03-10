import React from "react";
import lic from "../assets/lic.png";

const About = () => {
  return (
    <div className="flex flex-row ml-40 gap-5">
      <div className="lg:block sm:hidden md:block">
        <img src={lic} alt="" />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold">WELCOME TO PLOICY PULSE</h1>
        <p className="mt-5">
          We provide the latest and best LIC Insurance plans to our clients
          which satisfy their Insurance needs. If you are confused and want to
          know the right Insurance plan for yourself and your family..Let Us
          help you...Just fill up the query form and we'll get in touch with you
          shortly.
        </p>
        <p className="mt-5">
          We provide excellent services to thousands of clients from different
          industries. Our aim is to simplify the process of identifying the plan
          is right for you. And we do so by introducing you to experts who can
          answer your specific queries. When choosing an insurance policy one
          needs to think very carefully of the Company Brand's value. We are the
          highly professional and qualified service providers of the most
          trusted Life Insurance Corporation (LIC) of India deal in Delhi & NCR.
          You can invest in top rated policies from LIC India some of them are
          Health Plans, Child Plans, Pension Plans and Money Back Plans. Your
          insurance portfolio must consist of these plans for a smooth and happy
          life for self and beloved family members.
        </p>
      </div>
    </div>
  );
};

export default About;
