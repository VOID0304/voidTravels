import React from "react";
import carousel1 from "../../assets/images/carousel1.jpg"
import carousel2 from "../../assets/images/carousel2.jpg"
import carousel3 from "../../assets/images/carousel3.jpg"
import {FaEnvelope,FaLock} from "react-icons/fa";

const SignIn = () => {
    return(
                <div className="container text-center">
                <div className="row">
                    <div className="col m-5 p-5">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={carousel1} className="d-block w-100 img" alt="img1"></img>
                            </div>
                            <div className="carousel-item">
                            <img src={carousel2} className="d-block w-100 img" alt="img2"></img>
                            </div>
                            <div className="carousel-item">
                            <img src={carousel3} className="d-block w-100 img" alt="img3"></img>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col m-5 p-5">
                    <h1>LOGIN PAGE</h1>
                    <form className="row g-3 needs-validation" novalidate>
                        <label for="validationTooltipUsername" className="form-label"></label>
                        <div className="input-group has-validation">
                        <span className="login input-group-text" id="validationTooltipUsernamePrepend"><FaEnvelope/></span>
                        <input type="email" className="login form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" placeholder="Email..." required></input>
                        <div className="invalid-tooltip">
                            Please enter a valid email.
                        </div>
                        </div>
                        <label for="validationTooltip03" className="form-label"></label>
                        <div className="input-group has-validation">
                        <span className="login input-group-text" id="validationTooltipUsernamePrepend"><FaLock/></span>
                        <input type="password" className="login form-control" id="validationTooltip03" placeholder="Password..." required></input>
                        <div className="invalid-tooltip">
                        Please provide a valid city.
                        </div>
                        </div>
                        <div className="mt-3 row">
                        <div className="col-4">
                        Signup
                        </div>
                        <div className="ms-auto col-5">
                        Forgot Password ?
                        </div>
                    </div>
                    <div className="m-4">
                    <button type="button" className="btn btn-outline-dark" style={{justifyContent:'left'}}>login</button>
                    </div>
                    </form>
                    </div>
                    </div>
                </div>
    );
}

export default SignIn;