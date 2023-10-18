import React from "react";

const AppIcon =(props)=>{

    return(
        <>
        <div className="appicon px-2">
            <img className="me-2 "src={props.img} height={40} width={40} alt="pic"></img>
            <p>{props.name}</p>
        </div>
        </>
    );
}

export default AppIcon;