import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const states = [
    "Choose a State",
    "Maharashtra",
    "Delhi",
    "Karnataka",
    "Telangana",
    "Gujarat",
    "Tamil Nadu",
    "West Bengal",
    "Rajasthan",
    "Uttar Pradesh",
    "Madhya Pradesh",
    "Andhra Pradesh",
    "Bihar",
    "Punjab",
    "Haryana",
    "Jammu and Kashmir",
    "Jharkhand",
    "Chhattisgarh",
  ];

  const cities = [
    "Choose a City",
    "Mumbai",
    "New Delhi",
    "Bangalore",
    "Hyderabad",
    "Ahmedabad",
    "Tamil Nadu",
    "Chennai",
    "Kolkata",
    "Surat",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Vishakhapatnam",
    "Pimpri-Chinchwad",
    "Patna",
    "Vadodara",
    "Ghaziabad",
    "Ludhiana",
    "Agra",
    "Nashik",
    "Faridabad",
    "Meerut",
    "Rajkot",
    "Kalyan Dombivali",
    "Vasai Vihar",
    "Varanasi",
    "Srinagar",
    "Aurangabad",
    "Dhanbad",
    "Amritsar",
    "Navi Mumbai",
    "Prayagraj",
    "Howrah",
    "Ranchi",
    "Jabalpur",
    "Gwalior",
    "Coimbatore",
    "Vijayawada",
    "Jodhpur",
    "Madurai",
    "Raipur",
    "Kota",
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      name="contact"
      className="w-full h-full flex justify-center items-center p-4 bg-[#5CDB95] mt-5"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline text-black">Contact</p>
          <p className=" py-4">Leave a message</p>
        </div>
        <input
          className="bg-[#cadfd3] p-2"
          type="text"
          placeholder="Name"
          name="from_name"
          required
        />
        <input
          className="my-4 p-2 bg-[#cadfd3]"
          type="email"
          placeholder="email"
          name="from_email"
          required
        />
        <input
          className="my-4 p-2 bg-[#cadfd3]"
          type="text"
          placeholder="Phone Number"
          name="from_phone"
          required
        />
        <label
          htmlFor="state"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select an State
        </label>
        <select
          id="state"
          name="from_state"
          required
          defaultValue={"DEFAULT"}
          className="bg-[#cadfd3] text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>

        <label
          htmlFor="city"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
        >
          Select an City
        </label>
        <select
          id="city"
          name="from_city"
          required
          defaultValue={"DEFAULT"}
          className="bg-[#cadfd3] text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>

        <textarea
          className="bg-[#cadfd3] p-2 mt-4"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="hover:text-white border-2 hover:bg-[#308254] hover:border-cyan-800 px-4 py-3 my-6 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
