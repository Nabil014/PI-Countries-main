import React from 'react'
import { Link } from 'react-router-dom'

import estilos from '../style/Landing.module.css'
export default function Landing () {
  return (
    <div className={estilos.Landing}>
      <div className={estilos.column}>
        <div className={estilos.titulo}>
        <img src="https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png" alt="img" />
        <h1>Countries</h1>
        </div>
        <div className={estilos.boton} >
      <Link to='/home' >
          <button className={estilos.btn}>
            Ingresar
            </button>
      </Link>
        </div>
       
      </div>
    </div>
  )
}

 
