import React from "react";
import {  Route, Routes, Navigate  } from "react-router-dom";
import SignIn from "./screens/login/signIn";
import HomePage from "./screens/homepage/home";
import StateTourism from "./screens/StateTourism/stateTourism";
import SignUp from "./screens/login/signup";
import ForgotPwd from "./screens/login/forgotpass";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import SpecialPackages from "./screens/SpecialPackages/specialPackages";
import MakemyPlan from "./screens/MakeMyPlan/makeMyPlan";
import AppBar from "./screens/homepage/components/appbar";
import IconList from "./screens/SpecialPackages/components/icons";
import LogIn from "./screens/login/newlogin";

const App = () => {
  return (
    <>
    {/* <AppBar/> */}
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" Component={LogIn} />
        <Route path="*" element={<Navigate replace to={"/"} />} />
        <Route path="/stateTourism" Component={StateTourism} />
        <Route path="/specialPackages" Component={SpecialPackages} />
        <Route path="/makemyplan" Component={MakemyPlan} />
        <Route path="/signup" Component={SignUp}/>
        <Route path="/forgotpassword" Component={ForgotPwd}/>
      </Routes>
    </>
  );
};

export default App;
