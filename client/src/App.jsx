import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import SignIn from "./screens/login/signIn";
import HomePage from "./screens/homepage/home";
import StringConstants from "./constants/string_constants";
import StateTourism from "./screens/StateTourism/stateTourism";

const App=()=> {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/login" Component={SignIn}/>
        <Route path="*" element={<Navigate replace to={"/"}/>} />
        <Route path="/stateTourism" Component={StateTourism}/>
      </Routes>
      <h4>{StringConstants.description_routes}</h4>
    </>
  );
}

export default App;
