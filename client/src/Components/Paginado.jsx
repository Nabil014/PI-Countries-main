import React from "react";
import { Link } from "react-router-dom";

export default function Paginado ({countriesPorPag,allCountries,paginado}){
    const pageNumber = []
    for (let i = 0; i <= Math.floor(allCountries/countriesPorPag); i++) {
        pageNumber.push(i+1)
    }
return(
    <nav>
        <ul className="paginado" >
            {
            pageNumber && 
            pageNumber.map(number=>(
                <button onClick={()=> paginado(number)}> {number} </button>
            )) }
        </ul>
    </nav>
 )
}