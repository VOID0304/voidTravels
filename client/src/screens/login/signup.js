import React from "react";
import signup4 from "../../assets/images/signup4.avif";
import signup3 from "../../assets/images/signup3.jpg";


const SignUp = () => {
    return(
            <div class="container text-center">
                <div className="row vh-100 flex-row justify-content-center">
                    <div className="signupvec col-7">
                        <img src={signup4} alt='sign-up to VOID' className="vh-100"></img>
                    </div>
                    <div className="col align-items-center d-flex">
                    <div className="loginbg p-3 w-100">
                        <h1 className="mb-3">SIGNUP</h1>
                    <form className="row g-2 justify-content-around ">
                            {/* 1stname */}
                            <div className="col-md-6 pb-3 ">
                                <label for="validationServer01" class="form-label text-start d-block">First name</label>
                                <input type="text" className="form-control" id="validationServer01" placeholder="Enter your 1st name..." required />
                            </div>
                            {/* lastname */}
                            <div class="col-md-6 pb-3">
                                <label for="validationServer02" class="form-label text-start d-block">Last name</label>
                                <input type="text" class="form-control" id="validationServer02" placeholder="Enter your last name..." required />
                                <div class="valid-feedback">
                                Looks good!
                                </div>
                            </div>
                            {/* state */}
                            <div class="col-md-6 pb-3">
                                <label for="validationServer04" class="form-label text-start d-block">State</label>
                                <select class="form-select" id="validationServer04" aria-describedby="validationServer04Feedback" placeholder="Enter your state..." required>
                                <option selected disabled value="">Choose your state...</option>
                                <option>...</option>
                                </select>
                                <div id="validationServer04Feedback" class="invalid-feedback">
                                Please select a valid state.
                                </div>
                            </div>
                            {/* city */}
                            <div class="col-md-6 pb-3">
                                <label for="validationServer03" class="form-label text-start d-block">City</label>
                                <input type="text" class="form-control" id="validationServer03" aria-describedby="validationServer03Feedback" placeholder="Enter your city..." required />
                                <div id="validationServer03Feedback" class="invalid-feedback">
                                Please provide a valid city.
                                </div>
                            </div>
                            {/* zip */}
                            <div class="col-md-6 pb-3">
                                <label for="validationServer05" class="form-label text-start d-block">Zip</label>
                                <input type="text" class="form-control" id="validationServer05" aria-describedby="validationServer05Feedback" placeholder="Enter your zip code..." required />
                                <div id="validationServer05Feedback" class="invalid-feedback">
                                Please provide a valid zip.
                                </div>
                            </div>
                            {/* username */}
                            <div class="col-md-6 pb-3">
                                <label for="validationServerUsername" class="form-label text-start d-block">Username</label>
                                <input type="text" class="form-control" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" placeholder="Enter your username..." required />
                                <div id="validationServerUsernameFeedback" class="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                             {/* mail */}
                             <div class="col-md-6 pb-3">
                                <label for="validationServerUsername" class="form-label text-start d-block">Email</label>
                                <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend3">@</span>
                                <input type="email" class="form-control" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" placeholder="Enter your email..." required />
                                </div>
                            </div>
                            {/* phno */}
                            <div className="col-md-6 pb-3">
                                <label for="validationServer01" class="form-label text-start d-block">Phone Number</label>
                                <input type="nupber" className="form-control" id="validationServer01" placeholder="Enter your Phone number..." required />
                            </div>
                            {/* pass */}
                            <div className="col-md-6 pb-3">
                                <label for="validationServer01" class="form-label text-start d-block">Password</label>
                                <input type="password" className="form-control" id="validationServer01" placeholder="Create your password..." required />
                            </div>
                            {/* conpass */}
                            <div className="col-md-6 pb-3">
                                <label for="validationServer01" class="form-label text-start d-block">Confirm Password</label>
                                <input type="password" className="form-control" id="validationServer01" placeholder="Confirm your passowrd..." required />
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
                                <button class="btn btn-primary" type="submit">Submit form</button>
                            </div>
                            </form>
                            </div>
                    </div>
                </div>
            </div>
    );
}

export default SignUp;