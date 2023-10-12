import React from "react";
import Card from 'react-bootstrap/Card';

// import allepy from "../../../assets/images/allepy.png";
// import CardBody from "react-bootstrap/esm/CardBody";
// import { alignPropType } from "react-bootstrap/esm/types";


const StateCard = (props) => {
    
    return (
        <div className="mb-5 custom-cursor">
            <Card className="cards" style={{ width: '58rem', height: '15rem', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Card.Img className="allepyimg" variant="top" src={props.img} style={{ flex: '0 0 auto', width: '200px', height: 'auto', marginRight: '20px'}} />
                <div style={{ flex: '1' }}>
                    <Card.Body>
                        <Card.Title className="fs-3">{props.title}</Card.Title>
                    </Card.Body>
                    <Card.Body>{props.tourist}</Card.Body>
                    <Card.Body>{props.stars}</Card.Body>
                </div>
                <div style={{ flex: '2' }}>
                    <Card.Body>
                        <Card.Text style={{ marginRight: '50px', marginTop: '25px' }}>{props.description}</Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Text style={{ textAlign: 'right' }}><b>Best Time To Visit:</b></Card.Text>
                        <Card.Text style={{ textAlign: 'right' }}>{props.besttime}</Card.Text>
                    </Card.Body>
                </div>
            </Card>
        </div>
    );
}

export default StateCard;
