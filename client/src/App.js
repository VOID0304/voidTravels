import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import SignIn from "./screens/login/signIn";
import HomePage from "./screens/homepage/home";
import StringConstants from "./constants/string_constants";
import StateTourism from "./screens/StateTourism/stateTourism";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Flights from "./screens/appbar options/flights";
import SpecialPackages from "./screens/SpecialPackages/specialPackages";
import MakemyPlan from "./screens/MakeMyPlan/makeMyPlan";

import IconList from "./screens/SpecialPackages/components/icons";


const App=()=> {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/login" Component={SignIn}/>
        <Route path="*" element={<Navigate replace to={"/"}/>} />
        <Route path="/stateTourism" Component={StateTourism}/>
        <Route path="/flights" Component={Flights}/>
        <Route path="/specialPackages" Component={SpecialPackages}/>
        <Route path="/makemyplan" Component={MakemyPlan}/>
        <Route path="/icon" Component={IconList}/>
      </Routes>
      {/* <h4>{StringConstants.description_routes}</h4> */}
    </>
  );
}

export default App;
