import React from "react";
import StringConstants from "../../constants/string_constants";

const HomePage = () =>{
    return(
        <>
        <div>
            <h1 className="state">{StringConstants.homeHeading}</h1>
            <h4>{StringConstants.description}</h4>
        </div>
        </>
    );
}

export default HomePage;