import React from "react";
import lic from "../assets/lic.png";
import about from "../assets/about.png";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-5">
      <div className="lg:block sm:hidden md:hidden">
        <img src={about} alt="" />
      </div>
      <div className="md:w-full lg:w-1/2 bg-green-200 rounded-lg">
        <h1 className="text-3xl font-bold text-green-700 lg:ml-20 mt-10">
          WELCOME TO POLICY PULSE
        </h1>
        <div className="lg:ml-2">
          <p className="mt-7 text-gray-600 font-serif">
            We provide the latest and best LIC Insurance plans to our clients
            which satisfy their Insurance needs. If you are confused and want to
            know the right Insurance plan for yourself and your family..Let Us
            help you...Just fill up the query form and we'll get in touch with
            you shortly.
          </p>
          <p className="mt-7 text-gray-600 font-serif">
            We provide excellent services to thousands of clients from different
            industries. Our aim is to simplify the process of identifying the
            plan is right for you. And we do so by introducing you to experts
            who can answer your specific queries. When choosing an insurance
            policy one needs to think very carefully of the Company Brand's
            value.
          </p>
          <p className="mt-7 text-gray-600 font-serif">
            We are the highly professional and qualified service providers of
            the most trusted Life Insurance Corporation (LIC) of India deal in
            Delhi & NCR. You can invest in top rated policies from LIC India
            some of them are Health Plans, Child Plans, Pension Plans and Money
            Back Plans. Your insurance portfolio must consist of these plans for
            a smooth and happy life for self and beloved family members.
          </p>
          <h1 className="mt-7 text-2xl font-serif font-bold text-green-500">
            "Invest in the future, secure your present with LIC."
          </h1>
          <h1 className="mt-7 text-2xl font-serif font-bold text-green-500">
            "Build a safety net for your loved ones with LIC policies."
          </h1>
          <h1 className="mt-7 text-2xl font-serif font-bold text-green-500">
            "LIC - safeguarding dreams, nurturing aspirations."
          </h1>
          <h1 className="mt-7 text-2xl font-serif font-bold text-green-500">
            "With LIC, every premium is an investment in your peace of mind."
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;

// import React from "react";
// import lic from "../assets/lic.png";

// const About = () => {
//   return (
//     <div className="flex flex-row ml-40 gap-5 mt-5">
//       <div className="lg:block sm:hidden md:block">
//         <img src={lic} alt="" />
//       </div>
//       <div className="md:w-1/2 bg-green-200 rounded-lg">
//         <h1 className="text-3xl font-bold text-green-700 ml-20 mt-10">
//           WELCOME TO POLICY PULSE
//         </h1>
//         <div className="ml-2">
//           <p className="mt-7 text-gray-600 font-serif">
//             We provide the latest and best LIC Insurance plans to our clients
//             which satisfy their Insurance needs. If you are confused and want to
//             know the right Insurance plan for yourself and your family..Let Us
//             help you...Just fill up the query form and we'll get in touch with
//             you shortly.
//           </p>
//           <p className="mt-7 text-gray-600 font-serif">
//             We provide excellent services to thousands of clients from different
//             industries. Our aim is to simplify the process of identifying the
//             plan is right for you. And we do so by introducing you to experts
//             who can answer your specific queries. When choosing an insurance
//             policy one needs to think very carefully of the Company Brand's
//             value.
//           </p>
//           <p className="mt-7 text-gray-600 font-serif">
//             We are the highly professional and qualified service providers of
//             the most trusted Life Insurance Corporation (LIC) of India deal in
//             Delhi & NCR. You can invest in top rated policies from LIC India
//             some of them are Health Plans, Child Plans, Pension Plans and Money
//             Back Plans. Your insurance portfolio must consist of these plans for
//             a smooth and happy life for self and beloved family members.
//           </p>
//           <h1 className="mt-7 text-2xl font-serif font-bold text-green-500">
//             "Invest in the future, secure your present with LIC."
//           </h1>
//           <h1 className="mt-7 text-2xl font-serif font-bold text-green-500">
//             "Build a safety net for your loved ones with LIC policies."
//           </h1>
//           <h1 className="mt-7 text-2xl font-serif font-bold text-green-500">
//             "LIC - safeguarding dreams, nurturing aspirations."
//           </h1>
//           <h1 className="mt-7 text-2xl font-serif font-bold text-green-500">
//             "With LIC, every premium is an investment in your peace of mind."
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
