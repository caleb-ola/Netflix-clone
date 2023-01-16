import axios from "axios";
import React, { useEffect } from "react";
import Hero from "../components/others/hero";
import Navbar from "../components/reusable/Navbar";

const Home = () => {
  return (
    <div className="homepage">
      <Hero />
    </div>
  );
};

export default Home;
