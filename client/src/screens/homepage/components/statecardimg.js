import React from 'react';
// import pic from "../../../assets/images/karnataka.png";
import { NavLink } from 'react-router-dom';

const StateCardImg = (props) => {
  return (
    <>
      <NavLink to={`/statetourism/${props.state}`} className='d-inline-block me-3 text-decoration-none text-dark'>
        <img className="sc-image1" src={props.img} alt={props.state}></img>
        <h6 className='text-center mt-2'>{props.state}</h6>
      </NavLink>
    </>
  )
}

export default StateCardImg;
