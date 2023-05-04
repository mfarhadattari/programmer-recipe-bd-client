import React from "react";
import Banner from "../Banner/Banner";
import Chefs from "../../chefs/Chefs/Chefs";
import About from "../About/About";
import Contract from "../Contract/Contract";

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <Chefs></Chefs>
      <About></About>
      <Contract></Contract>
    </main>
  );
};

export default Home;
