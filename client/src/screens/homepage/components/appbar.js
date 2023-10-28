import React from "react";
import logo from "../../../assets/images/Void logo.svg";
import AppIcon from "./appicon"; 
import Flights from "../../../assets/images/flights.png";
import cabs from "../../../assets/images/cabs.png";
import bus from "../../../assets/images/bus.png";
import hotels from "../../../assets/images/hotels.png";
import mytrips from "../../../assets/images/mytrips.png";
import trains from "../../../assets/images/trains.png";
import profile from "../../../assets/images/profile.svg";
import { NavLink } from "react-router-dom";

const AppBar = ()=>{
    return (
        <>
          <div className = "appbarbg p-4" >
          <nav className="navbar navbar-expand-lg navbar-light px-4">
              <div className="container-fluid">
                <NavLink className="navbar-brand" href="#"><img src={logo} alt="logo" width="50" height="50"></img></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link active" aria-current="page" href="#"><AppIcon name={"Flights"} img={Flights}/></NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" href="#"><AppIcon name={"Hotels"} img={hotels}/></NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" href="#"><AppIcon name={"Cabs"} img={cabs}/></NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" href="#"><AppIcon name={"Trains"} img={trains}/></NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" href="#"><AppIcon name={"Bus"} img={bus}/></NavLink>
                    </li> 
                    <li className="nav-item">
                      <NavLink className="nav-link" href="#"><AppIcon name={"Self-Drive"} img={cabs}/></NavLink>
                    </li>
                  </ul>
                  <NavLink className="nav-link mb-sm-4 mb-xs-4 mb-lg-0 mx-auto" >

                  <div>

                      <img className="me-2" src={mytrips} height={40} width={40} alt="My Trips" />

                      <p className="d-inline">My Trips</p>

                  </div>

                  </NavLink>

                  <NavLink to="/login" className="nav-link mb-sm-4 mb-xs-4 mb-lg-0 ms-auto" >

                  <div>

                      <img className="me-2" src={profile} height={40} width={40} alt="My Trips" />

                      <p className="d-inline">SignIn/SignUP</p>

                  </div>

                 </NavLink>
                </div>
              </div>
            </nav>
          </div>
        </>

    );
} 

export default AppBar;