import React from "react"
import Data from "../data"



export default function Card(props){
    return(
        <div className="card">
            <img src={`${props.imageUrl}`} className="card-image"/>
                <div>
                    <div className="Country">
                    <img src="./images/Location.png" />
                    <span>{props.location.toUpperCase()}</span>
                    <a href={`${props.googleMapsUrl}`} target="_blank">View on Google Maps</a>
                    </div>
                <h2>{props.title}</h2>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}