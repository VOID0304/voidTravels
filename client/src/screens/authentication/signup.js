import React, { useState } from "react";
import signup4 from "../../assets/images/signup4.avif";
import signup3 from "../../assets/images/signup3.jpg";
import axios from "../../services/instance";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const navigate = useNavigate();
    const [data,setData]=useState({
        name:'',
        email:'',
        phone:'',
        state:'',
        country:'',
        city:'',
        gender:'',        
        password:'',
        cpassword:'',
    });

    const submitHandler = (e)=>{
        e.preventDefault();
        const {name,email,phone,state,country,city,gender,password,cpassword} = data;
        axios.post("/register",{
            name:name,
            email:email,
            phone:phone,
            state:state,
            country:country,
            city:city,
            gender:gender,        
            password:password,
            cpassword:cpassword,
        }).then(function (response){
            window.alert(response.data["message"]);
            navigate("/login");
        }).catch(function (error){
            if (error.response) {
                window.alert(error.response.data["message"]);
            }
        })
    }

    return(
            <div class="container text-center">
                <div className="row vh-100 flex-row justify-content-center">
                    <div className="signupvec col-7">
                        <img src={signup4} alt='sign-up to VOID' className="vh-100"></img>
                    </div>
                    <div className="col align-items-center d-flex">
                    <div className="loginbg p-3 w-100">
                        <h1 className="mb-3">SIGNUP</h1>
                    <form method="POST" className="row g-2 justify-content-around ">
                            {/* 1stname */}
                            <div className="col-md-6 pb-3 ">
                                <label for="validationServer01" class="form-label text-start d-block">Name</label>
                                <input onChange={(e)=>setData({...data,name:e.target.value})} value={data.name} type="text" className="form-control" id="validationServer01" placeholder="Enter your name..." required />
                            </div>
                            {/* lastname */}
                            <div class="col-md-6 pb-3">
                                <label for="validationServer02" class="form-label text-start d-block">Gender</label>
                                <input onChange={(e)=>setData({...data,gender:e.target.value})} value={data.gender} type="text" class="form-control" id="validationServer02" placeholder="Enter your gender..." required />
                                <div class="valid-feedback">
                                Looks good!
                                </div>
                            </div>
                            {/* country */}
                            <div class="col-md-6 pb-3">
                                <label for="validationServerUsername" class="form-label text-start d-block">Country</label>
                                <input onChange={(e)=>setData({...data,country:e.target.value})} value={data.country} type="text" class="form-control" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" placeholder="Enter your Country..." required />
                                <div id="validationServerUsernameFeedback" class="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                            {/* state */}
                            <div class="col-md-6 pb-3">
                                <label for="validationServer04" class="form-label text-start d-block">State</label>
                                <input onChange={(e)=>setData({...data,state:e.target.value})} value={data.state} type="text" className="form-control" id="validationServer04" placeholder="Enter your state..." required />
                            </div>
                            {/* city */}
                            <div class="col-md-6 pb-3">
                                <label for="validationServer03" class="form-label text-start d-block">City</label>
                                <input onChange={(e)=>setData({...data,city:e.target.value})} value={data.city} type="text" class="form-control" id="validationServer03" aria-describedby="validationServer03Feedback" placeholder="Enter your city..." required />
                                <div id="validationServer03Feedback" class="invalid-feedback">
                                Please provide a valid city.
                                </div>
                            </div>
                            {/* zip */}
                            {/* <div class="col-md-6 pb-3">
                                <label for="validationServer05" class="form-label text-start d-block">Zip</label>
                                <input onChange={(e)=>setData({...data,zip:e.target.value})} value={data.zip} type="text" class="form-control" id="validationServer05" aria-describedby="validationServer05Feedback" placeholder="Enter your zip code..." required />
                                <div id="validationServer05Feedback" class="invalid-feedback">
                                Please provide a valid zip.
                                </div>
                            </div> */}
                            {/* phno */}
                            <div className="col-md-6 pb-3">
                                <label for="validationServer01" class="form-label text-start d-block">Phone Number</label>
                                <input onChange={(e)=>setData({...data,phone:e.target.value})} value={data.phone} type="number" className="form-control" id="validationServer01" placeholder="Enter your Phone number..." required />
                            </div>
                             {/* mail */}
                             <div class="col-md-12 pb-3">
                                <label for="validationServerUsername" class="form-label text-start d-block">Email</label>
                                <div class="input-group has-validation">
                                <span  class="input-group-text" id="inputGroupPrepend3">@</span>
                                <input onChange={(e)=>setData({...data,email:e.target.value})} value={data.email} type="email" class="form-control" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" placeholder="Enter your email..." required />
                                </div>
                            </div>
                            {/* pass */}
                            <div className="col-md-6 pb-3">
                                <label for="validationServer01" class="form-label text-start d-block">Password</label>
                                <input onChange={(e)=>setData({...data,password:e.target.value})} value={data.password} type="password" className="form-control" id="validationServer01" placeholder="Create your password..." required />
                            </div>
                            {/* conpass */}
                            <div className="col-md-6 pb-3">
                                <label for="validationServer01" class="form-label text-start d-block">Confirm Password</label>
                                <input onChange={(e)=>setData({...data,cpassword:e.target.value})} value={data.cpassword} type="password" className="form-control" id="validationServer01" placeholder="Confirm your passowrd..." required />
                            </div>
                            {/* agree */}
                            <div class="col-12 pb-3 ">
                                <div class="form-check">
                                <input class="form-check-input ms-auto me-2" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
                                <label class="form-check-label text-start d-block"  for="invalidCheck3">
                                    Agree to terms and conditions
                                </label>
                                <div id="invalidCheck3Feedback" class="invalid-feedback pb-3">
                                    You must agree before submitting.
                                </div>
                                </div>
                            </div>
                            {/* btn */}
                            <div class="col-12 pb-3">
                                <button onClick={submitHandler} class="btn btn-primary" type="submit">Submit form</button>
                            </div>
                            </form>
                            </div>
                    </div>
                </div>
            </div>
    );
}

export default SignUp;