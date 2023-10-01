import React from "react";
import StringConstants from "../../constants/string_constants";

const SignIn = () => {
    return(
        <>
            <div>
                <h1>{StringConstants.loginHeading}</h1>
                <h4>{StringConstants.description}</h4>
            </div>
        </>
    );
}

export default SignIn;