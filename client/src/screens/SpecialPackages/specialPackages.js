import React from "react";
import StringConstants from "../../constants/string_constants";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import allepy from "../../assets/images/allepy.png";
// import CardBody from "react-bootstrap/esm/CardBody";
// import { alignPropType } from "react-bootstrap/esm/types";
import image1 from "../../assets/images/image1.png"


const SpecialPackages =()=>{
    return (
        <div class="container text-center">
        <div class="mt-5 row">
            <div class="col"></div>
            <div class="col"></div>
        </div>
        <div class="mt-5 row gx-0">
            <div class="col"><img src={image1} className="w-75 h-90"></img></div>
            <div class="col"><img src={image1} className="w-75 h-90"></img></div>
            <div class="col"><img src={image1} className="w-75 h-90"></img></div>
        </div>
        </div>
    );
}

export default SpecialPackages;