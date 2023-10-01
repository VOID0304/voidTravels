import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import SignIn from "./screens/login/signIn";
import HomePage from "./screens/homepage/home";
import StringConstants from "./constants/string_constants";

const App=()=> {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/login" Component={SignIn}/>
        <Route path="*" element={<Navigate replace to={"/"}/>} />
      </Routes>
      <h4>{StringConstants.description_routes}</h4>
    </>
  );
}

export default App;
