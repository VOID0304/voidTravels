import React from "react";
import AppBar from "./components/appbar"
import Coupon from "./components/coupon";
import StateCards from "./components/statecards";
import Caurosel from "./components/caurosel";
const HomePage = () => {
  return (
    <>
      <AppBar />
      <Caurosel />
      <Coupon/>
      <StateCards/>
    </>
  );
};

export default HomePage;
