import React from "react";
import carousel1 from "../../assets/images/carousel1.jpg"
import carousel2 from "../../assets/images/carousel2.jpg"
import carousel3 from "../../assets/images/carousel3.jpg"
import {FaEnvelope,FaLock,FaGoogle,FaFacebook, FaBorderStyle} from "react-icons/fa";

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
                                    <a id="a" href="http://localhost:3000/voidTravels/#/signup">Sign Up</a>
                                </div>
                                <div className="ms-auto col-5">
                                    <a id="a" href="http://localhost:3000/voidTravels/#/forgotpassword">Forgot Password?</a>
                                </div>
                            </div>
                            <div className="m-4">
                                <button type="button" className="btn btn-outline-dark" style={{justifyContent:'left'}}><a id="loginbtn" href="http://localhost:3000/voidTravels/#/">login</a></button>
                            </div>
                        </form>
                                <div><br></br> 
                                <h6>Or Continue With</h6><br></br>
                                <div style={{justifyContent:'center'}} className="input-group has-validation">
                                    <span className="bg-danger input-group-text" id="validationTooltipUsernamePrepend"><FaGoogle/></span>
                                    <button style={{borderRadius:'0.375rem', borderWidth:'1px',BorderStyle:'solid', borderColor:'#dee2e6'}} type="button" className="w-50 btn btn-danger">Google</button>
                                </div>
                                </div> <br></br>
                                <div style={{justifyContent:'center'}} className="input-group has-validation">
                                    <span className="bg-primary input-group-text" id="validationTooltipUsernamePrepend"><FaFacebook/></span>
                                    <button style={{borderRadius:'0.375rem', borderWidth:'1px',BorderStyle:'solid', borderColor:'#dee2e6'}} type="button" className="w-50 btn btn-primary">Facebook</button>
                                </div>
                    </div>                    
                </div>
            </div>
    );
}

export default SignIn;