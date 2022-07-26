import React from "react";

export default function Card({name,image,continent}){
    return(
        <div>
            <img src={image} alt="img" />
            <h3 id="nameCountry">{name}</h3>
            <h5>{continent}</h5>
            
        </div>
    )
}