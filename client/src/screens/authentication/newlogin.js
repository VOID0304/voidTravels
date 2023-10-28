import React, { useState } from "react";
import googlelogo from "../../assets/images/googlelogo.svg";
import fblogo from "../../assets/images/fblogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import carousel1 from "../../assets/images/carousel1.jpg"
import carousel2 from "../../assets/images/carousel2.jpg"
import carousel3 from "../../assets/images/carousel3.jpg"
// import axios from "axios";
import axios from "../../services/instance";

const LogIn = () => {
    const navigate = useNavigate();
    const [data,setData]=useState({
        email:'',
        password:'',
    })

    const submitHandler = (e)=>{
        e.preventDefault();
        const {email,password} = data;
        axios.post("/login",{
            email:email,
            password:password,
        }).then(function (response){
            navigate('/');
        }).catch(function (error){
            if (error.response) {
                window.alert(error.response.data["message"]);
            }
        })
    }

    return(
        <div className="row justify-content-center align-items-center">
            <div className="carous col-lg-6 col-sm-12 col-md-10 p-lg-5 p-md-2">
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
            <div className="loginbox col-lg-6 col-sm-10 col-md-7 p-lg-5 p-md-2 mt-3">
                <div className="loginbg p-4">
                    <h1 className="text-center">LOGIN</h1>
                    <p className="mx-auto">Welcome to VOID TRAVELS</p>          
                    <form onSubmit={submitHandler} method="POST">
                        <div className="mb-3">
                            <input onChange={(e)=>setData({...data,email:e.target.value})} value={data.email} type="email" className="form-control py-2" placeholder="Email" aria-label="Email" required/>
                        </div>
                        <div className="mb-3">
                            <input onChange={(e)=>setData({...data,password:e.target.value})} value={data.password} type="password" className="form-control py-2" placeholder="Password" aria-label="Password" required/>
                        </div>
                        <p className="ms-auto"><NavLink to="/forgotpassword" style={{textDecoration:'none', color:'black'}}><b>Forgot Password ?</b></NavLink></p>
                        <button type="submit" className="btn btn-dark w-100 py-2 mb-4">Login</button>
                    </form> 
                    <div className="row">
                        <div className="altlog col-lg-4 col-md-4 col-sm-4"><hr/></div>
                        <div className="altlogs col-lg-4 col-md-4 col-sm-4"><p className="mx-auto">Or Login with</p></div>
                        <div className="altlog col-lg-4 col-md-4 col-sm-4"><hr/></div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="signinlogo m-3 p-2">
                            <img src={googlelogo} alt="google"></img>
                        </div>
                        <div className="signinlogo m-3 p-2">
                            <img src={fblogo} alt="fb"></img>
                        </div>
                    </div>
                    <div>
                        <p className="mx-auto mt-3">No Account ? <span><NavLink to="/signup" style={{textDecoration:'none', color:'black'}}><b>REGISTER</b></NavLink></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default LogIn;