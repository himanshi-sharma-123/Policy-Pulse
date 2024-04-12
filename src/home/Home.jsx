import React from "react";
import Banner from "../components/Banner";
import Contact from "./Contact";
import About from "../components/About";
import ImageCard from "./ImageCard";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <ImageCard />
      <Contact />
    </div>
  );
};

export default Home;
