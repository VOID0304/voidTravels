import React from 'react';
import img1 from "../../../assets/images/img1.png";
import img2 from "../../../assets/images/img2.png";
import img3 from "../../../assets/images/img3.png";
import img4 from "../../../assets/images/img4.png";
import img5 from "../../../assets/images/img5.png";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Caurosel = () => {
  return (
    <div className="divtag">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="img1"></img>
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="img2"></img>
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="img3"></img>
            </div>
            <div className="carousel-item">
              <img src={img4} className="d-block w-100" alt="img4"></img>
            </div>
            <div className="carousel-item">
              <img src={img5} className="d-block w-100" alt="img5"></img>
            </div>
          </div>
        </div>

        <div
          className=" m-3 destination align-items-center d-flex flex-row "
          style={{ justifyContent: "center" }}
        >
          <label for="box" className=" m-2 form-label">
            Choose a destination :
          </label>
          <input
            type="textbox "
            className=" form mt-2 form-control"
            id="box"
          ></input>
          <span className=" mx-3 align-items-center d-flex">
            <FaMagnifyingGlass />
          </span>
        </div>
      </div>
  )
}

export default Caurosel;
