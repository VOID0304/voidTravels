import React, { useEffect, useState } from "react";
import StringConstants from "../../constants/string_constants";
import StateCard from "./components/StateCard";
import AppBar from "../homepage/components/appbar";
import axios from "../../services/instance";
import { useParams } from "react-router-dom";

const StateTourism=()=>{
    const [data, setData] = useState([]);
    const params = useParams();
    useEffect(()=>{ 
        axios.get('/getStateListings',{
            params:{
                state:params.state,
            }
        }).then((res)=>{setData(res.data.lists)})
    });
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
                        <h3>{params.state}</h3>
                    </div>
                    <div>
                        <p className="fs-5 mt-3"><b>Here are top 10 places to visit</b></p>
                    </div>
                {
                    data.map((val, index)=><StateCard key={index} title={val.title} img={val.img} description={val.description} stars={val.rating} besttime={val.besttime} tourist={val.tourist}/>)
                }
                </div>
            </div>
        </section>        
        </React.Fragment>    
    );
}



export default StateTourism;