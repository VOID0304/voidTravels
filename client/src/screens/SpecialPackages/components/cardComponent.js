import React from "react";
import vrindavan from "../../../assets/images/vrindavan.png";
import { FaHotel } from "react-icons/fa";
import IconList from "./icons";



const CardComponent =()=>{
    return(
        <div className="col-lg-6 mb-4 d-flex justify-content-center">
                <div className="card" style={{width: '75%'}}>
                    <img src={vrindavan} alt="hello" className="card-img-top" style={{borderRadius: '5px', height:'100%'}}></img>
                    <div className="card-body">
                        <h5 className="card-title ct">₹ 15,000</h5><p className="f-6 fw-light">per person</p>
                        <p className="card-text"></p>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Tughlqabad</li>
                                <li>Agra</li>
                                <li>Vrindavan</li>
                                <li>Mathura</li>
                            </ul>
                        </div>
                        <div className="col-6 d-flex justify-content-end pe-4">
                            <div className="d-flex flex-column justify-content-around">
                                <IconList  icon={<FaHotel/>} name='Hotel'/>
                                <IconList  icon={<FaHotel/>} name='Hotel'/>
                            </div>
                        </div>
                    </div>
                    <div className="card-body row">
                    <div className="d-flex justify-content-between align-items-start">
                        <IconList  icon={<FaHotel/>} name='Hotel'/>
                        <IconList  icon={<FaHotel/>} name='Hotel'/>
                        <IconList  icon={<FaHotel/>} name='Hotelffffffffffffffffff'/>
                    </div>
                    </div> 
                </div>
        </div>
    );
}

export default CardComponent