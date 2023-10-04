import React from "react";
import StringConstants from "../../constants/string_constants";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import allepy from "../../assets/images/allepy.png";
// import CardBody from "react-bootstrap/esm/CardBody";
// import { alignPropType } from "react-bootstrap/esm/types";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import vrindavan from "../../assets/images/vrindavan.png";
import { NavLink } from "react-router-dom";
import { FaHotel } from "react-icons/fa";
import IconList from "./components/icons";
import CardComponent from "./components/cardComponent";
import StaticData from "../../constants/static_data";


const SpecialPackages =()=>{
    return (
        <div className="container text-center">
        
        <div className="mt-5 row">
            <div className="col-4 p-0"><img src={image1} alt="hello" ></img></div>
            <div className="col-4 p-0"><img src={image2} alt="hello" ></img></div>
            <div className="col-4 p-0"><img src={image3} alt="hello" ></img></div>
        </div>
        <div className="line p-3 my-4">
            <h2 className="mb-5">Exciting Special packages</h2><span></span>
            <div className="row d-flex">
                
                {
                    StaticData.packageList.map((index, val)=><CardComponent />)
                }
            </div>
        </div>
        </div>
    );
}

export default SpecialPackages;