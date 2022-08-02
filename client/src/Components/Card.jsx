import React from "react";
import estilos from '../style/Card.module.css'
import { Link } from "react-router-dom";

export default function Card({name,image,continent,id}){
    return(
        <div>
        <Link style={{ textDecoration: 'none' }} to={"/home/"+id}>
            <div className={estilos.card}>
            <img src={image} alt="img" />
            <h3 id="nameCountry">{name}</h3>
            <h5>{continent}</h5>
            </div>
        </Link>
        </div>
        
        
    )
}