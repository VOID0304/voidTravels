import React from "react";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import CardComponent from "./components/cardComponent";
import StaticData from "../../constants/static_data";
import {FaGlobeAsia} from "react-icons/fa";
import AppBar from "../homepage/components/appbar";

const SpecialPackages =()=>{
    return (
        <>
        <AppBar/>
        <div className="container text-center">
        
        <div className="mt-5 row">
            <div className="col-4 p-0"><img src={image1} alt="hello" ></img></div>
            <div className="col-4 p-0"><img src={image2} alt="hello" ></img></div>
            <div className="col-4 p-0"><img src={image3} alt="hello" ></img></div>
        </div>
        <div className="line p-3 my-4">
            <h2 className="mb-5" ><FaGlobeAsia/>  Exciting Special packages</h2><span></span>
            <div className="row d-flex">
                
                {
                    StaticData.packageList.map((val,index)=><CardComponent heading={val.heading} subheading={val.subheading} img={val.img} price={val.price} l1={val.l1} l2={val.l2} l3={val.l3} l4={val.l4} />)
                }
            </div>
        </div>
        </div>
        </>
        
    );
}

export default SpecialPackages;