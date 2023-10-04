import React from "react";
import StringConstants from "../../constants/string_constants";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import allepy from "../../assets/images/allepy.png";
// import CardBody from "react-bootstrap/esm/CardBody";
// import { alignPropType } from "react-bootstrap/esm/types";
import StateCard from "./components/StateCard";
import StaticData from "../../constants/static_data";


const StateTourism=()=>{
    
    return(
        <React.Fragment>
        <section className="p-lg-5">
            <div className='row'>
                <div className='z-n1 col-lg-3 position-absolute'>
                    <div className="filter">
                        <h3>{StringConstants.stateFilters}</h3>
                    </div>
                </div>
                    
                <div className='col centered'></div>
                
                <div className='col-sm-12 col-lg-8 order-1'>
                    <div className="heading">
                        <h3>{StringConstants.stateHeading}</h3>
                    </div>
                    <div>
                        <p className="fs-5 mt-3"><b>Here are top 10 places to visit</b></p>
                    </div>
                {
                    StaticData.StateListdata.map((val, index)=><StateCard title={val.title} img={val.img} description={val.description} stars={val.stars} besttime={val.besttime} tourist={val.tourist}/>)
                }
                </div>
            </div>
        </section>        
        </React.Fragment>    
    );
}



export default StateTourism;