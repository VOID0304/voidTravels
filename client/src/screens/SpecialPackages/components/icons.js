import React from "react";


const IconList =(props)=> {
  return (
      <div className="lines px-3">
        <span className="me-3">{props.icon}</span>
        <p style={{justifyContent: 'center', display:'inline'}}>{props.name}</p>
      </div>
  );
}

export default IconList