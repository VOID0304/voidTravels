import React from "react";
import allepey from "../../assets/images/allepey.png";
import { BiTimer,BiRestaurant,BiCar } from "react-icons/bi";
import { MdDownhillSkiing } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import makemyplanimg from "../../assets/images/makemyplanimg.png";
import AppBar from "../homepage/components/appbar";

const MakemyPlan =()=>{
    return(
        <>
        <AppBar />
        <section>
            
            <div>
                <img className="w-100" src={makemyplanimg} alt="img"></img>
            </div>
            <div className="makebox">
                <h4 className="pt-4 mx-4" style={{textAlign:'left'}}><b>VOID </b>made some exciting plans for you</h4>
                <h4 className="pt-4 mx-4" style={{textAlign:'left'}}><b>Check these out...</b>❤️</h4> <br></br>
                <div className="mx-5 justify-content-around row">
                    <div className="w-auto p-2">
                    <h5 className="text-center">2 Day Trip in Alleppey</h5>
                    <div className="insidebox card">
                        <img className="m-3" src={allepey} alt="allepey"></img>
                        <div className="card-body">
                            <h3 className="text-center card-text">₹ 15,490</h3>
                            <div className="card-body row">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div><BiTimer/> <b>1N/2D</b></div>
                                    <div><BiRestaurant/> <b>Hotel</b></div>
                                    <div><MdDownhillSkiing/> <b>3 Activities</b></div>
                                    <div><BiCar/> <b>Car</b></div>
                                </div>
                            </div> 
                            <div className="row">
                                <div className="columnbox col mx-2">
                                    <h6 className="text-center">DAY - 1</h6>
                                    <ul className="text fw-light">
                                        <li>Arthunkal church</li>
                                        <li>Mararikulam Beach</li>
                                        <li>Alleppey Backwater cruises</li>
                                        <li>Alappuzha Beach</li>
                                        <li>Mullakkal Raja Rajeswari Temple</li>
                                    </ul>
                                    <GiSandsOfTime/><b>9AM to 7PM</b>
                                </div>
                                <div className="columnbox col mx-2">
                                    <h6 className="text-center">DAY - 2</h6>
                                    <ul className="text fw-light">
                                        <li>Arthunkal church</li>
                                        <li>Mararikulam Beach</li>
                                        <li>Alleppey Backwater cruises</li>
                                        <li>Alappuzha Beach</li>
                                        <li>Mullakkal Raja Rajeswari Temple</li>
                                    </ul>
                                    <GiSandsOfTime/><b>9AM to 5PM</b>
                                </div>
                            </div>
                            <br></br>
                            <div>
                                <ul className="text">
                                    <li>This includes Hotel Stay, Car chargers and petrol Charges.</li>
                                    <li>Food cost, Entry fees are excluded.</li>
                                    <li>Hotel information and other info will be provided after you reach the destination.</li>
                                </ul> 
                            </div>
                            <button type="submit" class="btn d-block mx-auto btn-black">BOOK NOW</button>
                        </div>
                    </div>
                    </div>
                    <div className="w-auto p-2">
                    <h5>2 Day Trip in Alleppey</h5>
                    <div className="insidebox card">
                        <img className="m-3" src={allepey} alt="allepey"></img>
                        <div className="card-body">
                            <h3 className="text-center card-text">₹ 15,490</h3>
                            <div className="card-body row">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div><BiTimer/> <b>1N/2D</b></div>
                                    <div><BiRestaurant/> <b>Hotel</b></div>
                                    <div><MdDownhillSkiing/> <b>3 Activities</b></div>
                                    <div><BiCar/> <b>Car</b></div>
                                </div>
                            </div> 
                            <div className="row">
                                <div className="columnbox col mx-2">
                                    <h6 className="text-center">DAY - 1</h6>
                                    <ul className="text fw-light">
                                        <li>Arthunkal church</li>
                                        <li>Mararikulam Beach</li>
                                        <li>Alleppey Backwater cruises</li>
                                        <li>Alappuzha Beach</li>
                                        <li>Mullakkal Raja Rajeswari Temple</li>
                                    </ul>
                                    <GiSandsOfTime/><b>9AM to 7PM</b>
                                </div>
                                <div className="columnbox col mx-2">
                                    <h6 className="text-center">DAY - 2</h6>
                                    <ul className="text fw-light">
                                        <li>Arthunkal church</li>
                                        <li>Mararikulam Beach</li>
                                        <li>Alleppey Backwater cruises</li>
                                        <li>Alappuzha Beach</li>
                                        <li>Mullakkal Raja Rajeswari Temple</li>
                                    </ul>
                                    <GiSandsOfTime/><b>9AM to 5PM</b>
                                </div>
                            </div>
                            <br></br>
                            <div>
                                <ul className="text">
                                    <li>This includes Hotel Stay, Car chargers and petrol Charges.</li>
                                    <li>Food cost, Entry fees are excluded.</li>
                                    <li>Hotel information and other info will be provided after you reach the destination.</li>
                                </ul> 
                            </div>
                            <button type="submit" class="btn d-block mx-auto btn-black">BOOK NOW</button>
                        </div>
                    </div>
                    </div>
                    <div className="w-auto p-2">
                    <h5>2 Day Trip in Alleppey</h5>
                    <div className="insidebox card">
                        <img className="m-3" src={allepey} alt="allepey"></img>
                        <div className="card-body">
                            <h3 className="text-center card-text">₹ 15,490</h3>
                            <div className="card-body row">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div><BiTimer/> <b>1N/2D</b></div>
                                    <div><BiRestaurant/> <b>Hotel</b></div>
                                    <div><MdDownhillSkiing/> <b>3 Activities</b></div>
                                    <div><BiCar/> <b>Car</b></div>
                                </div>
                            </div> 
                            <div className="row">
                                <div className="columnbox col mx-2">
                                    <h6 className="text-center">DAY - 1</h6>
                                    <ul className="text fw-light">
                                        <li>Arthunkal church</li>
                                        <li>Mararikulam Beach</li>
                                        <li>Alleppey Backwater cruises</li>
                                        <li>Alappuzha Beach</li>
                                        <li>Mullakkal Raja Rajeswari Temple</li>
                                    </ul>
                                    <GiSandsOfTime/><b>9AM to 7PM</b>
                                </div>
                                <div className="columnbox col mx-2">
                                    <h6 className="text-center">DAY - 2</h6>
                                    <ul className="text fw-light">
                                        <li>Arthunkal church</li>
                                        <li>Mararikulam Beach</li>
                                        <li>Alleppey Backwater cruises</li>
                                        <li>Alappuzha Beach</li>
                                        <li>Mullakkal Raja Rajeswari Temple</li>
                                    </ul>
                                    <GiSandsOfTime/><b>9AM to 5PM</b>
                                </div>
                            </div>
                            <br></br>
                            <div>
                                <ul className="text">
                                    <li>This includes Hotel Stay, Car chargers and petrol Charges.</li>
                                    <li>Food cost, Entry fees are excluded.</li>
                                    <li>Hotel information and other info will be provided after you reach the destination.</li>
                                </ul> 
                            </div>
                            <button type="submit" class="btn d-block mx-auto btn-black">BOOK NOW</button>
                        </div>
                    </div>
                    </div>
                    <div className="w-auto p-2">
                    <h5>2 Day Trip in Alleppey</h5>
                    <div className="insidebox card">
                        <img className="m-3" src={allepey} alt="allepey"></img>
                        <div className="card-body">
                            <h3 className="text-center card-text">₹ 15,490</h3>
                            <div className="card-body row">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div><BiTimer/> <b>1N/2D</b></div>
                                    <div><BiRestaurant/> <b>Hotel</b></div>
                                    <div><MdDownhillSkiing/> <b>3 Activities</b></div>
                                    <div><BiCar/> <b>Car</b></div>
                                </div>
                            </div> 
                            <div className="row">
                                <div className="columnbox col mx-2">
                                    <h6 className="text-center">DAY - 1</h6>
                                    <ul className="text fw-light">
                                        <li>Arthunkal church</li>
                                        <li>Mararikulam Beach</li>
                                        <li>Alleppey Backwater cruises</li>
                                        <li>Alappuzha Beach</li>
                                        <li>Mullakkal Raja Rajeswari Temple</li>
                                    </ul>
                                    <GiSandsOfTime/><b>9AM to 7PM</b>
                                </div>
                                <div className="columnbox col mx-2">
                                    <h6 className="text-center">DAY - 2</h6>
                                    <ul className="text fw-light">
                                        <li>Arthunkal church</li>
                                        <li>Mararikulam Beach</li>
                                        <li>Alleppey Backwater cruises</li>
                                        <li>Alappuzha Beach</li>
                                        <li>Mullakkal Raja Rajeswari Temple</li>
                                    </ul>
                                    <GiSandsOfTime/><b>9AM to 5PM</b>
                                </div>
                            </div>
                            <br></br>
                            <div>
                                <ul className="text">
                                    <li>This includes Hotel Stay, Car chargers and petrol Charges.</li>
                                    <li>Food cost, Entry fees are excluded.</li>
                                    <li>Hotel information and other info will be provided after you reach the destination.</li>
                                </ul> 
                            </div>
                            <button type="submit" class="btn d-block mx-auto btn-black">BOOK NOW</button>
                        </div>
                    </div>
                    </div>
                    <div className="w-auto p-2">
                    <h5>2 Day Trip in Alleppey</h5>
                    <div className="insidebox card">
                        <img className="m-3" src={allepey} alt="allepey"></img>
                        <div className="card-body">
                            <h3 className="text-center card-text">₹ 15,490</h3>
                            <div className="card-body row">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div><BiTimer/> <b>1N/2D</b></div>
                                    <div><BiRestaurant/> <b>Hotel</b></div>
                                    <div><MdDownhillSkiing/> <b>3 Activities</b></div>
                                    <div><BiCar/> <b>Car</b></div>
                                </div>
                            </div> 
                            <div className="row">
                                <div className="columnbox col mx-2">
                                    <h6 className="text-center">DAY - 1</h6>
                                    <ul className="text fw-light">
                                        <li>Arthunkal church</li>
                                        <li>Mararikulam Beach</li>
                                        <li>Alleppey Backwater cruises</li>
                                        <li>Alappuzha Beach</li>
                                        <li>Mullakkal Raja Rajeswari Temple</li>
                                    </ul>
                                    <GiSandsOfTime/><b>9AM to 7PM</b>
                                </div>
                                <div className="columnbox col mx-2">
                                    <h6 className="text-center">DAY - 2</h6>
                                    <ul className="text fw-light">
                                        <li>Arthunkal church</li>
                                        <li>Mararikulam Beach</li>
                                        <li>Alleppey Backwater cruises</li>
                                        <li>Alappuzha Beach</li>
                                        <li>Mullakkal Raja Rajeswari Temple</li>
                                    </ul>
                                    <GiSandsOfTime/><b>9AM to 5PM</b>
                                </div>
                            </div>
                            <br></br>
                            <div>
                                <ul className="text">
                                    <li>This includes Hotel Stay, Car chargers and petrol Charges.</li>
                                    <li>Food cost, Entry fees are excluded.</li>
                                    <li>Hotel information and other info will be provided after you reach the destination.</li>
                                </ul> 
                            </div>
                            <button type="submit" class="btn d-block mx-auto btn-black">BOOK NOW</button>
                        </div>
                    </div>
                    </div>
                    <div className="w-auto p-2">
                    <h5>2 Day Trip in Alleppey</h5>
                    <div className="insidebox card">
                        <img className="m-3" src={allepey} alt="allepey"></img>
                        <div className="card-body">
                            <h3 className="text-center card-text">₹ 15,490</h3>
                            <div className="card-body row">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div><BiTimer/> <b>1N/2D</b></div>
                                    <div><BiRestaurant/> <b>Hotel</b></div>
                                    <div><MdDownhillSkiing/> <b>3 Activities</b></div>
                                    <div><BiCar/> <b>Car</b></div>
                                </div>
                            </div> 
                            <div className="row">
                                <div className="columnbox col mx-2">
                                    <h6 className="text-center">DAY - 1</h6>
                                    <ul className="text fw-light">
                                        <li>Arthunkal church</li>
                                        <li>Mararikulam Beach</li>
                                        <li>Alleppey Backwater cruises</li>
                                        <li>Alappuzha Beach</li>
                                        <li>Mullakkal Raja Rajeswari Temple</li>
                                    </ul>
                                    <GiSandsOfTime/><b>9AM to 7PM</b>
                                </div>
                                <div className="columnbox col mx-2">
                                    <h6 className="text-center">DAY - 2</h6>
                                    <ul className="text fw-light">
                                        <li>Arthunkal church</li>
                                        <li>Mararikulam Beach</li>
                                        <li>Alleppey Backwater cruises</li>
                                        <li>Alappuzha Beach</li>
                                        <li>Mullakkal Raja Rajeswari Temple</li>
                                    </ul>
                                    <GiSandsOfTime/><b>9AM to 5PM</b>
                                </div>
                            </div>
                            <br></br>
                            <div>
                                <ul className="text">
                                    <li>This includes Hotel Stay, Car chargers and petrol Charges.</li>
                                    <li>Food cost, Entry fees are excluded.</li>
                                    <li>Hotel information and other info will be provided after you reach the destination.</li>
                                </ul> 
                            </div>
                            <button type="submit" class="btn d-block mx-auto btn-black">BOOK NOW</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </>
        
    );
}


export default MakemyPlan;