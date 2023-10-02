import React from "react";
import StringConstants from "../../constants/string_constants";

const StateTourism=()=>{
    return(
        <React.Fragment>
        <section>
            <div className='m-5 p-5 row'>
                <div className='col-3 filter'>
                    <h3>{StringConstants.stateFilters}</h3>
                </div>
                <div className='col centered'></div>
                <div className='col-8'>
                <div className="heading">
                    <h3>{StringConstants.stateHeading}</h3>
                </div>
                <div>
                    <p>State</p>
                </div>
                </div>
                
            </div>
        </section>        
        </React.Fragment>    
    );
}

export default StateTourism;