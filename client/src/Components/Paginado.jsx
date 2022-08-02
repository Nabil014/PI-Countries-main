import React, { useEffect, useState } from 'react'
import estilos from '../style/Paginado.module.css'

export default function Paginado({ countriesPorPag, allCountries, paginado,pagActual }) {
  const pageNumber = []

  for (let i = 0; i <= Math.floor(allCountries / countriesPorPag); i++) {
    pageNumber.push(i + 1)
  }
  
  return (
      <div className={estilos.paginado}>
        <ul>
          <div className={estilos.btn}>
            
              {pageNumber &&
              pageNumber.map((number)=> (
                <button className={pagActual === number? estilos.pagUno : estilos.pagX} id={number} key={number}  onClick={() => paginado(number)}> {number} </button>
              ))}
            </div>
        </ul>
      </div>
  )
}
