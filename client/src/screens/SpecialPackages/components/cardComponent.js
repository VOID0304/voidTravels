import React from "react";
import vrindavan from "../../../assets/images/vrindavan.png";
import { FaHotel, FaLocationArrow, FaListAlt } from "react-icons/fa";
import IconList from "./icons";




const CardComponent =(props)=>{
    return(
        <div className="col-lg-6 mb-4 d-flex justify-content-center">

                <div className="card" style={{width: '75%'}}>
                <div style={{color: 'black', padding: '10px', borderRadius: '5px 5px 0 0' }}>
                    <h4 style={{textAlign:'left'}}>{props.heading}</h4>
                    <p style={{textAlign:'left'}} className="fw-light"><FaLocationArrow/>  {props.subheading}</p>
                </div>
                    <img src={props.img} alt="hello" className="card-img-top" style={{borderRadius: '5px', height:'100%'}}></img>
                    <div className="card-body">
                        <h5 className="card-title ct">{props.price}</h5><p className="f-6 fw-light">per person</p>
                        <p className="card-text"></p>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>{props.l1}</li>
                                <li>{props.l2}</li>
                                <li>{props.l3}</li>
                                <li>{props.l4}</li>
                            </ul>
                        </div>
                        <div className="col-6 d-flex justify-content-end pe-4">
                            <div className="d-flex flex-column justify-content-around">
                                <IconList  icon={<FaHotel/>} name='Hotel'/>
                                <IconList  icon={<FaListAlt/>} name='Activities'/>
                            </div>
                        </div>
                    </div>
                    <div className="card-body row">
                    <div className="d-flex justify-content-between align-items-start">
                        <IconList  icon={<FaHotel/>} name='Package'/>
                        <IconList  icon={<FaHotel/>} name='Train'/>
                        <IconList  icon={<FaHotel/>} name='Hotel'/>
                    </div>
                    </div> 
                </div>
        </div>
    );
}

export default CardComponent