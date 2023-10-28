import React, { useEffect, useState } from "react";
import StringConstants from "../../constants/string_constants";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import allepy from "../../assets/images/allepy.png";
// import CardBody from "react-bootstrap/esm/CardBody";
// import { alignPropType } from "react-bootstrap/esm/types";
import StateCard from "./components/StateCard";
import StaticData from "../../constants/static_data";
import AppBar from "../homepage/components/appbar";
import axios from "../../services/instance";

const StateTourism=()=>{
    const [data, setData] = useState([]);
    useEffect(()=>{ 
        axios.get('/getStateListings',{
            params:{
                state:StringConstants.stateName,
            }
        }).then((res)=>{setData(res.data.lists)})
    },[]);

    return(
        <React.Fragment>
        <AppBar/>
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
                    data.map((val, index)=><StateCard title={val.title} img={val.img} description={val.description} stars={val.rating} besttime={val.besttime} tourist={val.tourist}/>)
                }
                </div>
            </div>
        </section>        
        </React.Fragment>    
    );
}



export default StateTourism;