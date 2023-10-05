import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import SignIn from "./screens/login/signIn";
import HomePage from "./screens/homepage/home";
import StateTourism from "./screens/StateTourism/stateTourism";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import SpecialPackages from "./screens/SpecialPackages/specialPackages";
import MakemyPlan from "./screens/MakeMyPlan/makeMyPlan";

const App=()=> {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/login" Component={SignIn}/>
        <Route path="*" element={<Navigate replace to={"/"}/>} />
        <Route path="/stateTourism" Component={StateTourism}/>
        <Route path="/specialPackages" Component={SpecialPackages}/>
        <Route path="/makemyplan" Component={MakemyPlan}/>
      </Routes>
    </>
  );
}

export default App;
