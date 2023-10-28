import React, {useEffect, useState} from "react";
import axios from "../../../services/instance";
import StateCardImg from "./statecardimg";


const StateCards = () => {
  const [data, setData] = useState([]);
    useEffect(()=>{ 
        axios.get('/getAllStates').then((res)=>{setData(res.data.states)})
    },[]);
  return (
    <>  
      <div className=" m-5 p-4 statecard">
        <h2>STATE TOURISM</h2>
        <div className="statecard-images">
          {
            data.map((item, index) => {
              return (
                <StateCardImg key={index} state={item.state} img={item.img}/>
              )
            })
          }
        </div>
      </div>
    </>
  );
};
export default StateCards;
